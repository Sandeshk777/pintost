"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ImageIcon, Upload, DollarSign, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/creator", icon: LayoutDashboard },
  { name: "Portfolio", href: "/creator/portfolio", icon: ImageIcon },
  { name: "Upload", href: "/creator/upload", icon: Upload },
  { name: "Earnings", href: "/creator/earnings", icon: DollarSign },
  { name: "Settings", href: "/creator/settings", icon: Settings },
]

export function CreatorSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-muted/30 min-h-screen">
      <div className="p-6">
        <Link href="/" className="text-2xl font-bold">
          pintost
        </Link>
        <p className="text-sm text-muted-foreground mt-1">Creator Dashboard</p>
      </div>
      <nav className="px-3 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
