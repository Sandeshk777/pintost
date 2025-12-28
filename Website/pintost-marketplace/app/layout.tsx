import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pintost - Authentic Visuals, Verified",
  description:
    "Premium marketplace for high-quality, verified digital art and images. Discover authentic visuals from verified creators.",
  keywords: ["stock photos", "digital art", "illustrations", "verified images", "premium visuals"],
  authors: [{ name: "Pintost" }],
  openGraph: {
    title: "Pintost - Authentic Visuals, Verified",
    description: "Premium marketplace for high-quality, verified digital art and images.",
    type: "website",
    url: "https://www.pintost.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pintost - Authentic Visuals, Verified",
    description: "Premium marketplace for high-quality, verified digital art and images.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
