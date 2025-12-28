import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, ImageIcon, Search } from "lucide-react"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${params.slug.replace(/-/g, " ")} - Creator Profile - Pintost`,
    description: `View the portfolio and images from ${params.slug.replace(/-/g, " ")} on Pintost`,
  }
}

export default function CreatorProfilePage({ params }: { params: { slug: string } }) {
  const creatorName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Creator Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full bg-muted overflow-hidden flex-shrink-0">
                <img src="/professional-photographer-portrait.png" alt={creatorName} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{creatorName}</h1>
                <p className="text-lg text-muted-foreground mb-4">Professional Photographer & Visual Artist</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>New York, USA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Member since 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ImageIcon className="h-4 w-4" />
                    <span>2,345 images</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
                  Award-winning photographer specializing in business, lifestyle, and corporate imagery. With over 10
                  years of experience, I create authentic visuals that tell compelling stories. My work has been
                  featured in major publications and used by Fortune 500 companies worldwide.
                </p>

                <Button>Follow Creator</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <TabsList>
                <TabsTrigger value="all">All Images (2,345)</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
              </TabsList>

              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search creator's portfolio..."
                  className="pl-10"
                  aria-label="Search portfolio"
                />
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 24 }).map((_, i) => {
                  const aspectRatios = ["aspect-square", "aspect-video", "aspect-[3/4]"]
                  const aspectRatio = aspectRatios[i % 3]

                  return (
                    <Link
                      key={i}
                      href={`/image/creator-${params.slug}-${i}`}
                      className="group relative overflow-hidden rounded-lg bg-muted watermarked-image"
                    >
                      <div className={aspectRatio}>
                        <img
                          src={`/professional-photography.png?height=400&width=400&query=professional photography ${i}`}
                          alt={`Portfolio image ${i + 1}`}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 protected-image"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <p className="text-white text-sm font-medium">Portfolio Image {i + 1}</p>
                        <p className="text-white/80 text-xs">{Math.floor(Math.random() * 1000) + 100} downloads</p>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Load More Images
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Link
                    key={i}
                    href={`/image/popular-${i}`}
                    className="group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
                  >
                    <img
                      src={`/popular-photography-.jpg?height=400&width=400&query=popular photography ${i}`}
                      alt={`Popular image ${i + 1}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105 protected-image"
                    />
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Link
                    key={i}
                    href={`/image/recent-${i}`}
                    className="group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
                  >
                    <img
                      src={`/recent-photography-.jpg?height=400&width=400&query=recent photography ${i}`}
                      alt={`Recent image ${i + 1}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105 protected-image"
                    />
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  )
}
