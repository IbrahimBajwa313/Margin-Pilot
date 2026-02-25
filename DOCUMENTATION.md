# MarginPilot – Project Documentation

This document describes the application architecture, APIs, authentication, security (including password hashing), and how to run and seed the project. Nothing is omitted.

---

## 1. Project overview

- **Name:** MarginPilot (workshop management / simulator).
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, MongoDB Atlas, Mongoose, Tailwind CSS.
- **Data:** All persistent data lives in MongoDB Atlas. There is no hardcoded business data; workshop data and user profiles are loaded from and saved to the database via API routes.

---

## 2. Environment and configuration

### 2.1 Required environment variables

Create **`.env.local`** in the project root (never commit it; it is in `.gitignore`):

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
AUTH_SECRET=<at-least-16-character-secret>
```

- **MONGODB_URI:** Replace `<user>`, `<password>`, and `<cluster>` with your Atlas credentials and cluster host. `<database>` is optional (default `test`).
- **AUTH_SECRET:** Used to sign the session cookie so the server can identify the logged-in user and scope data. Must be at least 16 characters. Generate with e.g. `openssl rand -base64 24`.
- **Supabase (optional, for image/file uploads):**
  - **NEXT_PUBLIC_SUPABASE_URL:** Your Supabase project URL (e.g. `https://xxxx.supabase.co`).
  - **SUPABASE_SERVICE_ROLE_KEY:** Service role key from Supabase Dashboard → Settings → API. Used by the upload API to write to Storage.
  - Create a **public** Storage bucket named **`uploads`** in Supabase Dashboard → Storage. Profile photos and company logos are stored there; the app saves only the public URL in MongoDB.
- **Resend (optional, for company invite emails):**
  - **RESEND_API_KEY:** API key from [resend.com](https://resend.com). Used to send invite emails when adding company users.
  - **RESEND_INVITE_FROM:** From address (e.g. `MarginPilot <onboarding@resend.dev>`). Use a verified domain in production or `onboarding@resend.dev` for testing.

See **MONGODB_ATLAS_SETUP.md** for Atlas setup.

### 2.2 .env.example

The repo includes **`.env.example`** with `MONGODB_URI`, `AUTH_SECRET`, and Supabase variables. Copy to `.env.local` and set the ones you need. Uploads are disabled if Supabase env vars are missing.

---

## 3. MongoDB Atlas

### 3.1 Connection

- The app connects to Atlas using **Mongoose** and the single connection string in `MONGODB_URI`.
- Connection is cached (e.g. in `lib/db.ts`) to avoid opening many connections in development and serverless.
- Connection options include `serverSelectionTimeoutMS` and `maxPoolSize` for reliability.

### 3.2 Databases and collections

- **Database:** Determined by the path in `MONGODB_URI` (e.g. `...mongodb.net/marginpilot?...` → database `marginpilot`). If no path, the default is `test`.
- **Collections:**
  - **userprofiles** – User accounts (sign-up, profile API). One document per user; passwords stored as bcrypt hashes.
  - **workshops** – Workshop/simulator and app preferences. **Multi-tenant:** each document has `ownerEmail`; each user sees only their own workshop(s). One current workshop per user (latest by `createdAt` for that `ownerEmail`).
  - **invites** – Company invite tokens (token, email, role, companyOwnerEmail, companyName, expiresAt, usedAt). Used for email invite links. **Multi-tenant:** each document has `ownerEmail`; each user sees only their own workshop(s). One “current” workshop per user (latest by `createdAt` for that `ownerEmail`).

In Atlas: **Data Storage** → **Browse Collections** → select the database above → open `userprofiles`, `workshops`, or `invites`.

### 3.3 Network access

In Atlas: **Network Access** → Add your dev machine IP (or allow `0.0.0.0/0` only if acceptable). Production hosts (e.g. Vercel) need their IPs allowed or the same rule.

---

## 4. API reference

All APIs are under **`/api`**. The base URL is the app origin (e.g. `http://localhost:3000` in development).

### 4.1 Workshop (per-user, requires session cookie)

All workshop endpoints require the session cookie (set on login). Data is scoped by the logged-in user's email (`ownerEmail`).

| Method | Path | Purpose |
|--------|------|--------|
| **GET** | `/api/workshop` | Return the current user's workshop. 401 if not logged in; 404 if none (front end may then call seed). |
| **POST** | `/api/workshop` | Create or update the **current user's** workshop (body = full payload). `ownerEmail` is set from session and cannot be overridden. |
| **POST** | `/api/workshop/seed` | Delete the current user's workshops and create one default for them. 401 if not logged in. |

- Workshop payload includes: efficiency/labour inputs, fixed expenses, marketing, loans, staff, technicians, monthly data, `userPreferences`, `efficiencyCalendar`. `ownerEmail` is server-set from the session.

### 4.2 Profile (user account)

| Method | Path | Purpose |
|--------|------|--------|
| **GET** | `/api/profile` | Return the **current user's** profile (from session cookie). 401 if not logged in. Password is never returned. |
| **POST** | `/api/profile` | Create (sign-up) or update a user. Body must include `email`. If email exists for another user → 409. Passwords are **hashed with bcrypt**. Response never includes password. No session required for sign-up. |
| **POST** | `/api/profile/seed` | If no profile exists, create a demo user (demo@marginpilot.com) with hashed password. Skip if any profile exists. |

- Profile payload: `firstName`, `lastName`, `email`, `password` (hashed on server), `company` (name, branches, etc.), `preferences`, `hasCompletedSetup`, `createdAt`, etc.

### 4.3 Auth (login)

| Method | Path | Purpose |
|--------|------|--------|
| **POST** | `/api/auth/login` | Body: `{ "email", "password" }`. Looks up user by email and verifies password using **bcrypt compare** (supports both hashed and legacy plain-text for migration). Returns the profile **without** password; 401 if invalid. |

- Used by the sign-in page. Passwords are never compared or stored in plain text on the server for new/updated users; only hashes are stored and compared.

### 4.4 Invite (company users, email + accept link)

| Method | Path | Purpose |
|--------|------|--------|
| **POST** | `/api/invite` | Create an invite (body: `{ email, role }`). Requires session. Creates an invite record, adds the user to the company with status `invited`, and sends an email with an **Accept invitation** link. Returns `{ success, message, acceptUrl }`. |
| **GET** | `/api/invite/validate?token=**` | Validate an invite token. Returns `{ companyName, email }` or 400/404. Used by the accept page. |
| **POST** | `/api/invite/accept` | Accept an invite (body: `{ token }`). Requires session. The session email must match the invite email. Adds the user to the company with status `active` and marks the invite used. |

- **Flow:** Admin invites user → email sent with link to `/invite/accept?token=xxx` → invitee clicks link → signs in or signs up with that email → accept page calls **POST /api/invite/accept** → user is added to the company. If **RESEND_API_KEY** is not set, the invite is still created and the user is added as "invited"; the API returns the `acceptUrl` so the admin can share it manually.

### 4.5 Upload (images/files)

| Method | Path | Purpose |
|--------|------|--------|
| **POST** | `/api/upload` | Upload a file (multipart form: `file`, optional `folder`: `profile` \| `company` \| `misc`). Requires session. File is stored in Supabase Storage bucket `uploads`; returns `{ url }` (public URL). Max 5MB; types: JPEG, PNG, GIF, WebP. |

- **Flow:** User selects file → client calls `POST /api/upload` with credentials → server uploads to Supabase Storage → public URL returned → client saves URL in MongoDB via profile/workshop APIs → app loads images via `<img src={url} />`.
- Used for: **Profile photo** (My Settings), **Company logo** (Company Settings). Same pattern can be used elsewhere (e.g. workshop assets) via `lib/upload.ts` → `uploadFile(file, folder)`.

### 4.6 Combined seed

| Method | Path | Purpose |
|--------|------|--------|
| **POST** | `/api/seed` | Runs both workshop seed and profile seed (creates default workshop and demo user with hashed password). Returns status for each. |

---

## 5. Authentication and session (front end)

- **Sign-up:** Form submits to **POST /api/profile** with email, password, name, company/workspace. Server hashes the password and stores the profile in `userprofiles`. On success, the client calls `login(profile)` (profile from response, no password).
- **Sign-in:** Form submits to **POST /api/auth/login** with email and password. Server verifies password (bcrypt); on success sets an HTTP-only signed session cookie and returns profile (no password); client calls `login(profile)`.
- **Session (client):** Stored in `localStorage`: a session-flag and the user’s **email**. No password or profile stored in `localStorage`.
- **Restore:** On load, if the session flag is set, the app calls **GET /api/profile** with credentials so the session cookie is sent; the server returns that user's profile. Workshop data is loaded the same way (scoped by cookie). **Logout:** Client calls **POST /api/auth/logout** to clear the cookie.

---

## 6. Password security (hashing)

- **Library:** `bcryptjs` (pure JavaScript; safe for serverless).
- **Utility:** `lib/password.ts`:
  - **hashPassword(plain)** – Hashes a plain-text password with a fixed cost (e.g. 12 rounds) for storage. Used on sign-up and when updating password.
  - **verifyPassword(plain, stored)** – Compares plain text to stored value: if stored value is a bcrypt hash (`$2a$`, `$2b$`, etc.), uses `bcrypt.compare`; otherwise treats as legacy plain text for one-time migration.
- **Where hashing is used:**
  - **POST /api/profile** – On create: hashes `body.password` before `UserProfile.create`. On update: if `password` is provided, hashes it before saving.
  - **POST /api/profile/seed** and **POST /api/seed** – Demo user password is hashed before insert.
- **Login:** **POST /api/auth/login** uses `verifyPassword(plain, stored)`; no plain-text comparison for hashed passwords.
- **Storage:** Only the hash is stored in the `userprofiles` collection. Passwords are never logged or returned in any API response.

---

## 7. Workshop data flow (front end)

- **Load:** On app load, the front end calls **GET /api/workshop**. If 404, it can call **POST /api/workshop/seed** and then GET again. Result is stored in app context (no hardcoded defaults for business data).
- **Save:** When the user changes workshop data or preferences, the context is updated and a **debounced** **POST /api/workshop** is sent with the full workshop payload so the database is the source of truth.
- **UI:** Dashboard shows a loading state until workshop data is loaded; on error, an error message and retry are shown.

---

## 8. Seeding and demo account

- **Workshop only:** `POST /api/workshop/seed` – resets workshop data to defaults.
- **Profile only:** `POST /api/profile/seed` – creates one demo user if none exists (e.g. demo@marginpilot.com with **hashed** password).
- **Both:** `POST /api/seed` – runs both seeds.
- **Demo login (after profile seed):** Email: `demo@marginpilot.com`, Password: `demo1234`. The stored password is the bcrypt hash of `demo1234`, not plain text.

---

## 9. Security measures summary

- **Passwords:** Bcrypt hashing (e.g. 12 rounds); no plain-text storage; verification via `verifyPassword` on login; legacy plain text supported only for migration in `verifyPassword`.
- **API responses:** Profile and login responses strip `password` before sending; no password in logs or client.
- **Multi-tenant data:** Workshop and profile are scoped by the signed session cookie (`AUTH_SECRET`). Each user only sees and updates their own workshop and profile.
- **Environment:** Secrets (`MONGODB_URI`, `AUTH_SECRET`) only in `.env.local`; `.env.local` is in `.gitignore`.
- **Database:** Single connection string; connection reused and configured with timeouts and pool size.
- **Auth:** Session is email + flag in `localStorage`; profile re-fetched from API by email on restore; no sensitive data stored in client storage.

---

## 10. Main files and structure

- **`lib/db.ts`** – MongoDB connection (cached) using `MONGODB_URI`.
- **`lib/session.ts`** – Session cookie: `getSessionEmail()` (from request), `setSessionCookie(email)`, `clearSessionCookie()`. Uses `AUTH_SECRET` to sign.
- **`lib/password.ts`** – `hashPassword`, `verifyPassword` (bcrypt).
- **`lib/models/Workshop.ts`** – Mongoose model for workshop (and embedded `userPreferences`, `efficiencyCalendar`).
- **`lib/models/UserProfile.ts`** – Mongoose model for user profile (company, branches, preferences; password field holds hash).
- **`lib/app-context.tsx`** – Workshop data state; fetches from GET /api/workshop; debounced POST /api/workshop on change; loading/error state.
- **`lib/auth-context.tsx`** – Auth state; restore via GET /api/profile?email=...; login/logout; updateProfile → POST /api/profile.
- **`app/api/workshop/route.ts`** – GET/POST workshop.
- **`app/api/workshop/seed/route.ts`** – Workshop seed.
- **`app/api/profile/route.ts`** – GET/POST profile; hashing on create/update when password present.
- **`app/api/profile/seed/route.ts`** – Profile seed (hashed demo password).
- **`app/api/auth/login/route.ts`** – Login; password verification via `verifyPassword`.
- **`app/api/seed/route.ts`** – Combined workshop + profile seed.

---

## 11. What was done (summary)

- **MongoDB Atlas:** Single connection string; all persistent data in Atlas (workshop + user profiles).
- **APIs:** Workshop (GET/POST + seed), Profile (GET/POST + seed), Auth login, combined seed; no hardcoded business data.
- **Auth:** Sign-up and sign-in use the API; session restored by email; profile always from DB.
- **Passwords:** Bcrypt hashing on sign-up and profile update; verification on login; no plain-text storage; demo seed uses hashed password.
- **Security:** Env-based secrets; password never in responses or logs; hashing and verification centralized in `lib/password.ts`.
- **Documentation:** This file plus **MONGODB_ATLAS_SETUP.md** for Atlas setup and **.env.example** for required variables.

This completes the documentation of the application, APIs, authentication, password hashing, and security measures.
