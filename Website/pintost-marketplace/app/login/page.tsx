"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthModal } from "@/components/auth-modal"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthModal open={true} onOpenChange={(open) => !open && router.push("/")} defaultTab="login" />
      </main>
      <Footer />
    </div>
  )
}
