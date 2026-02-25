import { NextResponse } from "next/server"
import { getSessionEmail } from "@/lib/session"
import { supabaseAdmin, UPLOAD_BUCKET } from "@/lib/supabase"

const MAX_SIZE_MB = 5
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"]

export async function POST(req: Request) {
  try {
    const email = await getSessionEmail()
    if (!email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Upload not configured. Set Supabase env vars." },
        { status: 503 }
      )
    }

    const formData = await req.formData()
    const file = formData.get("file") as File | null
    const folder = (formData.get("folder") as string) || "misc"

    if (!file || !file.size) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      )
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return NextResponse.json(
        { error: `File too large. Max ${MAX_SIZE_MB}MB.` },
        { status: 400 }
      )
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Use JPEG, PNG, GIF, or WebP." },
        { status: 400 }
      )
    }

    const ext = file.name.split(".").pop() || "jpg"
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${ext}`
    const path = `${folder}/${safeName}`

    const buf = await file.arrayBuffer()
    const { data, error } = await supabaseAdmin.storage
      .from(UPLOAD_BUCKET)
      .upload(path, buf, {
        contentType: file.type,
        upsert: false,
      })

    if (error) {
      console.error("Supabase storage upload error:", error)
      return NextResponse.json(
        { error: error.message || "Upload failed" },
        { status: 500 }
      )
    }

    const { data: urlData } = supabaseAdmin.storage
      .from(UPLOAD_BUCKET)
      .getPublicUrl(data.path)

    return NextResponse.json({ url: urlData.publicUrl })
  } catch (e) {
    const message = e instanceof Error ? e.message : "Upload failed"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
