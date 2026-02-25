# Security

This document summarizes how MarginPilot handles security. Full details are in **DOCUMENTATION.md**.

## Passwords

- **Hashing:** All passwords are hashed with **bcrypt** (via `bcryptjs`, 12 salt rounds) before being stored. Plain-text passwords are never written to the database.
- **Verification:** Login uses `verifyPassword(plain, stored)`, which uses `bcrypt.compare` when the stored value is a hash. Legacy plain-text storage is supported only for migration.
- **Transmission:** Passwords are sent over HTTPS in production. They are never returned in API responses or logged.

## Secrets and environment

- **MONGODB_URI** and any other secrets live only in **`.env.local`** (or deployment env). `.env.local` is in `.gitignore` and must not be committed.
- Use **`.env.example`** as a template; never put real credentials in the repo.

## API and data

- Profile and login responses **strip the password field** before sending. No endpoint returns a password or hash to the client.
- Workshop and profile data are persisted only in MongoDB Atlas; the app does not rely on hardcoded business data.

## Session (client)

- Session is kept in `localStorage` as a flag and the user’s **email** (no password or token stored). Profile data is re-fetched from the API when restoring the session.

For implementation details (hashing utility, which routes hash/verify, seeding), see **DOCUMENTATION.md** (Sections 4, 5, 6, and 9).
