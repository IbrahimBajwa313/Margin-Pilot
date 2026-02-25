import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AppProvider } from "@/lib/app-context"
import { AuthProvider } from "@/lib/auth-context"
import { AuthGuard } from "@/components/auth-guard"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('workshop_theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t!=='light'&&d))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <AuthProvider>
          <AppProvider>
            <AuthGuard>
              {children}
            </AuthGuard>
          </AppProvider>
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
