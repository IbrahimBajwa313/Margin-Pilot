import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceRoleKey) {
  console.warn(
    "Supabase env vars missing (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY). Upload API will not work."
  )
}

/** Server-side Supabase client with service role for Storage uploads. Use only in API routes. */
export const supabaseAdmin =
  url && serviceRoleKey
    ? createClient(url, serviceRoleKey, {
        auth: { persistSession: false },
      })
    : null

/** Default storage bucket for app uploads. Create a public bucket with this name in Supabase Dashboard. */
export const UPLOAD_BUCKET = "uploads"
