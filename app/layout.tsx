import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AppProvider } from "@/lib/app-context"
import { AuthProvider } from "@/lib/auth-context"
import { AuthGuard } from "@/components/auth-guard"
import { Toaster } from "sonner"

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" })
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "MarginPilot",
  description: "Premium automotive workshop management SaaS",
  icons: {
    icon: [
      {
        url: "/logo for light screen.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo for dark screen.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo for light screen.png",
        type: "image/png",
      },
    ],
    apple: "/logo for light screen.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${syne.variable} font-sans antialiased bg-background text-foreground`}>
        <AuthProvider>
          <AppProvider>
            <Suspense
              fallback={
                <div className="min-h-screen bg-background flex items-center justify-center p-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                </div>
              }
            >
              <AuthGuard>
                {children}
              </AuthGuard>
            </Suspense>
          </AppProvider>
          <Toaster position="top-center" theme="dark" richColors closeButton />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
