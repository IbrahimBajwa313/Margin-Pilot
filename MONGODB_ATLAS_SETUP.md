# MongoDB Atlas connection setup

This project uses **MongoDB Atlas** with Mongoose. Follow these steps to connect your cluster.

## 1. Get your connection string from Atlas

1. Log in at [MongoDB Atlas](https://cloud.mongodb.com).
2. Open your **Project** → select your **Cluster** (or create one).
3. Click **Connect** → **Connect your application**.
4. Choose **Node.js** and copy the connection string. It looks like:
   ```text
   mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your database user credentials.
6. Optional: add a database name before `?` if you want a specific DB, e.g. `...mongodb.net/margin-pilot?retryWrites=...`. If you omit it, MongoDB will create/use a default database when you first write data.

## 2. Configure the project

1. In the project root, create a file named **`.env.local`** (copy from `.env.example` if you prefer).
2. Set the variable:
   ```env
   MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/?retryWrites=true&w=majority
   ```
3. Save the file. **Do not commit `.env.local`** — it is already in `.gitignore`.

## 3. Network access (Atlas)

- In Atlas: **Network Access** → **Add IP Address**.
- For local dev: add your current IP or use **Allow Access from Anywhere** (`0.0.0.0/0`) only if acceptable for your use case.
- For production (e.g. Vercel): add the outbound IPs of your host or use `0.0.0.0/0` if your provider doesn’t offer static IPs.

## 4. Verify

1. Start the app: `npm run dev`.
2. Open the app and use features that call the workshop API (e.g. simulator or data that loads from the DB).
3. Optionally seed the database: send a `POST` request to `/api/workshop/seed` (e.g. with curl or a REST client).

If `MONGODB_URI` is missing or wrong, you’ll see an error pointing you to set it in `.env.local`.

## 5. Where to see your data in Atlas

- In Atlas go to **Data Storage** → **Browse Collections**.
- **Database**: The name comes from your connection string. If the URI has a path like `...mongodb.net/my-db-name?retryWrites=...`, the database is `my-db-name`. If there is no path (only `...mongodb.net/?retryWrites=...`), the database is **test**.
- **Collections**:
  - **userprofiles** — user accounts (sign-up / profile API). Each new account is one document here.
  - **workshops** — workshop data (simulator, data inputs, etc.).
- When you sign up a new account, the Next.js server terminal will log something like: `[Profile API] New account saved to Atlas → database: ... | collection: userprofiles | _id: ...`. Use that database name in Atlas to open the right database and then the **userprofiles** collection.
- **Passwords:** User passwords are never stored in plain text. They are hashed with bcrypt before being saved in `userprofiles`. See **DOCUMENTATION.md** for security details.
