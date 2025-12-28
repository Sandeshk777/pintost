"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Heart, Share2, Download, ShoppingCart, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function ImageDetailPage({ params }: { params: { id: string } }) {
  // Prevent right-click and keyboard shortcuts
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener("contextmenu", preventContextMenu)
    document.addEventListener("keydown", preventKeyboardShortcuts)

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu)
      document.removeEventListener("keydown", preventKeyboardShortcuts)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            {/* Left Column - Image Preview */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted watermarked-image">
                <img
                  src="/professional-business-meeting.png"
                  alt="Professional Business Meeting"
                  className="h-full w-full object-cover protected-image"
                  draggable="false"
                />
              </div>

              {/* Image Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">Professional Business Meeting</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Image ID: {params.id}</span>
                      <span>•</span>
                      <span>1,234 downloads</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" aria-label="Add to favorites">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Creator Info */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Link href="/creator/john-doe" className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                          <img src="/professional-photographer-portrait.png" alt="John Doe" className="w-full h-full object-cover" />
                        </div>
                      </Link>
                      <div className="flex-1">
                        <Link
                          href="/creator/john-doe"
                          className="font-semibold text-lg hover:text-muted-foreground transition-colors"
                        >
                          John Doe
                        </Link>
                        <p className="text-sm text-muted-foreground">Professional Photographer</p>
                        <p className="text-sm text-muted-foreground">2,345 images</p>
                      </div>
                      <Button variant="outline" asChild>
                        <Link href="/creator/john-doe">View Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional business meeting in modern office setting. Team of diverse professionals collaborating
                    on project, discussing strategy and sharing ideas. Perfect for corporate presentations, business
                    websites, and marketing materials.
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h2 className="text-xl font-semibold mb-3">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {["business", "meeting", "corporate", "teamwork", "office", "professional", "collaboration"].map(
                      (tag) => (
                        <Link key={tag} href={`/explore?q=${tag}`}>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-accent">
                            {tag}
                          </Badge>
                        </Link>
                      ),
                    )}
                  </div>
                </div>

                {/* Image Details */}
                <div>
                  <h2 className="text-xl font-semibold mb-3">Image Details</h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Dimensions</p>
                      <p className="font-medium">6000 × 4000 px</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">File Size</p>
                      <p className="font-medium">12.5 MB</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">File Type</p>
                      <p className="font-medium">JPEG</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Category</p>
                      <p className="font-medium">Business & Finance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Pricing & Purchase */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">License Options</h2>

                    {/* Standard License */}
                    <div className="border border-border rounded-lg p-4 mb-4 hover:border-foreground transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">Standard License</h3>
                          <p className="text-sm text-muted-foreground">For digital and print use</p>
                        </div>
                        <p className="text-2xl font-bold">$29</p>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• Use in websites, social media, blogs</li>
                        <li>• Print up to 500,000 copies</li>
                        <li>• Digital advertising allowed</li>
                        <li>• Non-exclusive rights</li>
                      </ul>
                      <Button className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>

                    {/* Exclusive License */}
                    <div className="border-2 border-foreground rounded-lg p-4 bg-muted/30">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">Exclusive Buyout</h3>
                          <p className="text-sm text-muted-foreground">Full exclusive rights</p>
                        </div>
                        <p className="text-2xl font-bold">$499</p>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• Exclusive ownership rights</li>
                        <li>• Image removed from marketplace</li>
                        <li>• Unlimited use and distribution</li>
                        <li>• Commercial use without restrictions</li>
                      </ul>
                      <Button className="w-full" variant="default">
                        <Download className="mr-2 h-4 w-4" />
                        Purchase Exclusive
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Verification Badge */}
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold mb-1">Verified Content</p>
                      <p className="text-muted-foreground">
                        This image has been verified for authenticity and quality by our team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Similar Images */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Link
                  key={i}
                  href={`/image/similar-${i}`}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
                >
                  <img
                    src={`/modern-business-meeting.png?height=300&width=300&query=business ${i}`}
                    alt={`Similar image ${i + 1}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 protected-image"
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* More from Creator */}
          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">More from John Doe</h2>
              <Button variant="outline" asChild>
                <Link href="/creator/john-doe">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Link
                  key={i}
                  href={`/image/creator-${i}`}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
                >
                  <img
                    src={`/professional-photography.png?height=300&width=300&query=professional photography ${i}`}
                    alt={`Creator image ${i + 1}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 protected-image"
                  />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
