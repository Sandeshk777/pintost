"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search, SlidersHorizontal, Grid3x3, LayoutGrid } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = [
  "Business & Finance",
  "Nature & Wildlife",
  "Technology & Innovation",
  "Art & Design",
  "People & Lifestyle",
  "Food & Drink",
  "Travel & Places",
  "Abstract & Patterns",
]

const orientations = ["All", "Horizontal", "Vertical", "Square"]
const imageTypes = ["All", "Photography", "Illustration", "Vector Art", "3D Render"]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [orientation, setOrientation] = useState("All")
  const [imageType, setImageType] = useState("All")
  const [sortBy, setSortBy] = useState("relevant")
  const [gridSize, setGridSize] = useState<"small" | "large">("small")

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Orientation */}
      <div>
        <h3 className="font-semibold mb-3">Orientation</h3>
        <div className="space-y-2">
          {orientations.map((orient) => (
            <div key={orient} className="flex items-center space-x-2">
              <Checkbox
                id={`orientation-${orient}`}
                checked={orientation === orient}
                onCheckedChange={() => setOrientation(orient)}
              />
              <Label htmlFor={`orientation-${orient}`} className="text-sm font-normal cursor-pointer">
                {orient}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Image Type */}
      <div>
        <h3 className="font-semibold mb-3">Image Type</h3>
        <div className="space-y-2">
          {imageTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={`type-${type}`} checked={imageType === type} onCheckedChange={() => setImageType(type)} />
              <Label htmlFor={`type-${type}`} className="text-sm font-normal cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Search Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <form className="flex-1 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search millions of verified images..."
                    className="w-full pl-10 pr-4 h-12 bg-background"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search images"
                  />
                </div>
              </form>

              <div className="flex items-center gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Most Relevant</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="downloads">Most Downloads</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-1 border border-border rounded-md p-1">
                  <Button
                    variant={gridSize === "small" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setGridSize("small")}
                    aria-label="Small grid"
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={gridSize === "large" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setGridSize("large")}
                    aria-label="Large grid"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>

                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Refine your search with filters</SheetDescription>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Active Filters */}
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedCategories.map((category) => (
                  <Button
                    key={category}
                    variant="secondary"
                    size="sm"
                    onClick={() => toggleCategory(category)}
                    className="h-7"
                  >
                    {category}
                    <span className="ml-2">×</span>
                  </Button>
                ))}
                <Button variant="ghost" size="sm" onClick={() => setSelectedCategories([])} className="h-7">
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategories([])
                      setOrientation("All")
                      setImageType("All")
                    }}
                  >
                    Clear
                  </Button>
                </div>
                <FilterContent />
              </div>
            </aside>

            {/* Image Grid */}
            <div className="flex-1">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  Showing 1,234,567 results
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>

              <div
                className={`grid gap-4 ${
                  gridSize === "small"
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {Array.from({ length: 24 }).map((_, i) => {
                  const aspectRatios = ["aspect-square", "aspect-video", "aspect-[3/4]"]
                  const aspectRatio = aspectRatios[i % 3]

                  return (
                    <Link
                      key={i}
                      href={`/image/sample-${i}`}
                      className="group relative overflow-hidden rounded-lg bg-muted watermarked-image"
                    >
                      <div className={aspectRatio}>
                        <img
                          src={`/professional-team.png?height=400&width=400&query=professional ${
                            i % 4 === 0 ? "business" : i % 4 === 1 ? "nature" : i % 4 === 2 ? "technology" : "abstract"
                          } photography ${i}`}
                          alt={`Image ${i + 1}`}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 protected-image"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <p className="text-white text-sm font-medium mb-1">Professional Image Title {i + 1}</p>
                        <p className="text-white/80 text-xs">by Artist Name</p>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button key={page} variant={page === 1 ? "default" : "outline"} className="w-10">
                    {page}
                  </Button>
                ))}
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
