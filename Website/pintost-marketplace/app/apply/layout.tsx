import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Become a Contributor | Pintost",
  description:
    "Join our curated marketplace and share your authentic digital art with a global audience. Apply to become a Pintost creator today.",
  openGraph: {
    title: "Become a Contributor | Pintost",
    description: "Join our curated marketplace and share your authentic digital art with a global audience.",
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
