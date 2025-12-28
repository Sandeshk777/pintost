"use client"

import Link from "next/link"
import { Search, ShoppingCart, Heart, User, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

interface NavigationProps {
  userRole?: "buyer" | "creator" | "admin" | null
}

const megaMenuData = {
  photos: {
    curatedContent: [
      { label: "Editor's Choice", href: "/photos/editors-choice" },
      { label: "Premium Collection", href: "/photos/premium" },
      { label: "New Arrivals", href: "/photos/new" },
      { label: "Best Sellers", href: "/photos/best-sellers" },
    ],
    trendingSearches: [
      { label: "Business Meeting", href: "/search?q=business+meeting" },
      { label: "Nature Landscape", href: "/search?q=nature+landscape" },
      { label: "Technology", href: "/search?q=technology" },
      { label: "People Working", href: "/search?q=people+working" },
    ],
    popularCategories: [
      { label: "Business & Finance", href: "/category/business" },
      { label: "Nature & Wildlife", href: "/category/nature" },
      { label: "People & Lifestyle", href: "/category/people" },
      { label: "Food & Drink", href: "/category/food" },
    ],
    moreToDiscover: [
      { label: "Free Photos", href: "/photos/free" },
      { label: "Editorial Photos", href: "/photos/editorial" },
      { label: "Creative Photos", href: "/photos/creative" },
      { label: "Seasonal Photos", href: "/photos/seasonal" },
    ],
  },
  illustrations: {
    curatedContent: [
      { label: "Featured Illustrations", href: "/illustrations/featured" },
      { label: "Hand-Drawn Collection", href: "/illustrations/hand-drawn" },
      { label: "Digital Art", href: "/illustrations/digital" },
      { label: "Trending Styles", href: "/illustrations/trending" },
    ],
    trendingSearches: [
      { label: "Abstract Art", href: "/search?q=abstract+illustration" },
      { label: "Character Design", href: "/search?q=character+design" },
      { label: "Infographics", href: "/search?q=infographics" },
      { label: "Patterns", href: "/search?q=patterns" },
    ],
    popularCategories: [
      { label: "Business Concepts", href: "/category/business-illustrations" },
      { label: "Technology & Science", href: "/category/tech-illustrations" },
      { label: "Education", href: "/category/education-illustrations" },
      { label: "Healthcare", href: "/category/healthcare-illustrations" },
    ],
    moreToDiscover: [
      { label: "3D Illustrations", href: "/illustrations/3d" },
      { label: "Flat Design", href: "/illustrations/flat" },
      { label: "Watercolor", href: "/illustrations/watercolor" },
      { label: "Line Art", href: "/illustrations/line-art" },
    ],
  },
  vectors: {
    curatedContent: [
      { label: "Premium Vectors", href: "/vectors/premium" },
      { label: "Icon Collections", href: "/vectors/icons" },
      { label: "Logo Templates", href: "/vectors/logos" },
      { label: "Background Patterns", href: "/vectors/backgrounds" },
    ],
    trendingSearches: [
      { label: "Business Icons", href: "/search?q=business+icons" },
      { label: "Social Media", href: "/search?q=social+media+vectors" },
      { label: "Geometric Shapes", href: "/search?q=geometric+shapes" },
      { label: "Arrows & Pointers", href: "/search?q=arrows" },
    ],
    popularCategories: [
      { label: "Icons & Symbols", href: "/category/icons" },
      { label: "Backgrounds", href: "/category/vector-backgrounds" },
      { label: "Borders & Frames", href: "/category/borders" },
      { label: "Badges & Labels", href: "/category/badges" },
    ],
    moreToDiscover: [
      { label: "SVG Files", href: "/vectors/svg" },
      { label: "EPS Format", href: "/vectors/eps" },
      { label: "Scalable Graphics", href: "/vectors/scalable" },
      { label: "Print Ready", href: "/vectors/print-ready" },
    ],
  },
}

function MegaMenu({ title, data }: { title: string; data: typeof megaMenuData.photos }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors py-2">
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 transition-all duration-300 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="bg-background border border-border rounded-lg shadow-2xl p-6 w-[800px]">
          <div className="grid grid-cols-4 gap-6">
            {/* Curated Content */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Curated content</h3>
              <ul className="space-y-2">
                {data.curatedContent.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Searches */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Trending searches</h3>
              <ul className="space-y-2">
                {data.trendingSearches.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Categories */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Popular categories</h3>
              <ul className="space-y-2">
                {data.popularCategories.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More to Discover */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">More to discover</h3>
              <ul className="space-y-2">
                {data.moreToDiscover.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Navigation({ userRole = null }: NavigationProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-foreground">pintost</div>
        </Link>

        <div className="hidden lg:flex items-center space-x-6 ml-8">
          <MegaMenu title="Photos" data={megaMenuData.photos} />
          <MegaMenu title="Illustrations" data={megaMenuData.illustrations} />
          <MegaMenu title="Vectors" data={megaMenuData.vectors} />
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden flex-1 max-w-xl mx-8 md:flex">
          <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for images, illustrations, vectors..."
              className="w-full pl-10 bg-muted border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search images"
            />
          </form>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/explore"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Explore
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Newsroom
          </Link>

          {!userRole ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="icon" aria-label="Favorites">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="User menu">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/purchases">My Purchases</Link>
                  </DropdownMenuItem>
                  {userRole === "creator" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/creator">Creator Dashboard</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  {userRole === "admin" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/admin">Admin Dashboard</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <form className="relative w-full mb-4" onSubmit={(e) => e.preventDefault()}>
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-full pl-10" aria-label="Search images" />
              </form>

              <div className="space-y-4 pb-4 border-b border-border">
                <Link href="/photos" className="text-lg font-medium block">
                  Photos
                </Link>
                <Link href="/illustrations" className="text-lg font-medium block">
                  Illustrations
                </Link>
                <Link href="/vectors" className="text-lg font-medium block">
                  Vectors
                </Link>
              </div>

              <Link href="/explore" className="text-lg font-medium">
                Explore
              </Link>
              <Link href="/news" className="text-lg font-medium">
                Newsroom
              </Link>
              {!userRole ? (
                <>
                  <Link href="/login" className="text-lg font-medium">
                    Log In
                  </Link>
                  <Link href="/signup" className="text-lg font-medium">
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/account" className="text-lg font-medium">
                    My Account
                  </Link>
                  <Link href="/purchases" className="text-lg font-medium">
                    My Purchases
                  </Link>
                  {userRole === "creator" && (
                    <Link href="/creator" className="text-lg font-medium">
                      Creator Dashboard
                    </Link>
                  )}
                  {userRole === "admin" && (
                    <Link href="/admin" className="text-lg font-medium">
                      Admin Dashboard
                    </Link>
                  )}
                  <button className="text-lg font-medium text-left">Log Out</button>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
