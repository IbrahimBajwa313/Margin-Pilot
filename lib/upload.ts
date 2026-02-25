/**
 * Client-side helper: upload a file to Supabase Storage via the app API.
 * Returns the public URL to store in MongoDB and use in the app.
 */
export async function uploadFile(
  file: File,
  folder: "profile" | "company" | "misc"
): Promise<string> {
  const formData = new FormData()
  formData.set("file", file)
  formData.set("folder", folder)

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
    credentials: "include",
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error((body as { error?: string }).error || "Upload failed")
  }

  const data = (await res.json()) as { url: string }
  return data.url
}
