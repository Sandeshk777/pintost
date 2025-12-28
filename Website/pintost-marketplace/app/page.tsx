"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  ShieldCheck,
  Tag,
  Award,
  UserCheck,
  ArrowRight,
  Palette,
  Camera,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
          {/* Abstract background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-foreground blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-foreground blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-foreground blur-3xl" />
          </div>

          {/* Centered overlay content */}
          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Authentic Visuals. Verified. Uniquely Yours.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
                Discover a curated collection of high-quality digital art and images you can trust.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search millions of verified images..."
                    className="w-full pl-12 pr-32 h-14 text-lg bg-background border-border shadow-lg"
                    aria-label="Search images"
                  />
                  <Button type="submit" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2">
                    Start Your Search
                  </Button>
                </form>
              </div>

              <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                <span>Popular:</span>
                <Link href="/explore?q=business" className="hover:text-foreground transition-colors">
                  Business
                </Link>
                <span>•</span>
                <Link href="/explore?q=nature" className="hover:text-foreground transition-colors">
                  Nature
                </Link>
                <span>•</span>
                <Link href="/explore?q=technology" className="hover:text-foreground transition-colors">
                  Technology
                </Link>
                <span>•</span>
                <Link href="/explore?q=abstract" className="hover:text-foreground transition-colors">
                  Abstract
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Pintost Difference Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Column - Text Content (60%) */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">The Pintost Difference</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As the trusted marketplace for authentic digital content, Pintost connects you with verified creators
                  and unique visuals that resonate with your audience, at transparent prices. We've got all that—and
                  more.
                </p>
              </div>

              {/* Differentiators */}
              <div className="space-y-6">
                {/* Differentiator 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Verified Authentic Content</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every image is rigorously checked by our 'Trust Engine'—including automated scans and manual
                      review of source files—ensuring originality and legal compliance. No AI-generated content, only
                      human-made excellence.
                    </p>
                    <Link
                      href="/about/verification"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors group"
                    >
                      Learn about our verification process
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Differentiator 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <Tag className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Transparent & Fair Pricing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Value and premium-quality—never sacrifice one for the other. Explore flexible standard licenses or
                      secure exclusive buyouts.
                    </p>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors group"
                    >
                      View our pricing plans
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Differentiator 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Curated & High-Quality Library</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A carefully curated collection means no endless scrolling through generic content. Find unique,
                      inspiring visuals crafted by talented, vetted artists.
                    </p>
                    <Link
                      href="/explore"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors group"
                    >
                      Explore our collections
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Differentiator 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <UserCheck className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Creator-First Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We empower artists with fair commission rates and tools to succeed. Support creators directly
                      while getting exceptional content.
                    </p>
                    <Link
                      href="/apply"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors group"
                    >
                      Become a contributor
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Collage (40%) */}
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative background dots */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-foreground blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-foreground blur-3xl" />
                </div>

                {/* Image Grid Collage */}
                <div className="relative grid grid-cols-2 gap-4 p-8">
                  {/* Top Left - Large */}
                  <div className="col-span-1 row-span-2 relative overflow-hidden rounded-lg bg-muted watermarked-image">
                    <img
                      src="/professional-business-meeting.png"
                      alt="Professional business meeting"
                      className="h-full w-full object-cover protected-image"
                    />
                  </div>

                  {/* Top Right - Small */}
                  <div className="col-span-1 relative overflow-hidden rounded-lg bg-muted watermarked-image">
                    <img
                      src="/professional-photography.png"
                      alt="Abstract art design"
                      className="h-full w-full object-cover protected-image"
                    />
                  </div>

                  {/* Middle Right - Small */}
                  <div className="col-span-1 relative overflow-hidden rounded-lg bg-muted watermarked-image">
                    <img
                      src="/modern-business-meeting.png"
                      alt="Nature landscape"
                      className="h-full w-full object-cover protected-image"
                    />
                  </div>

                  {/* Bottom - Wide */}
                  <div className="col-span-2 relative overflow-hidden rounded-lg bg-muted watermarked-image">
                    <img
                      src="/professional-team.png"
                      alt="Creative workspace"
                      className="h-full w-full object-cover protected-image"
                    />
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-foreground/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-foreground/10 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              How Our Trust Engine Verifies Every Image
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our multi-layered verification process combines cutting-edge technology with expert human review to ensure
              every image on Pintost is authentic, original, and legally compliant.
            </p>
          </div>

          {/* Process Steps in Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Step 1 */}
            <Card className="relative overflow-hidden border-2 hover:border-foreground/20 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-foreground/50 to-foreground" />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <ShieldCheck className="w-8 h-8 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                </div>
                <h3 className="text-xl font-bold">Automated Scan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced AI algorithms detect duplicates, analyze metadata, and flag potential issues before human
                  review.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative overflow-hidden border-2 hover:border-foreground/20 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-foreground/50 to-foreground" />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <Search className="w-8 h-8 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                </div>
                <h3 className="text-xl font-bold">Source File Review</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creators submit original source files (RAW, PSD, AI) which our team examines to verify authenticity
                  and ownership.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative overflow-hidden border-2 hover:border-foreground/20 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-foreground/50 to-foreground" />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <Users className="w-8 h-8 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                </div>
                <h3 className="text-xl font-bold">Expert Manual Review</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trained specialists evaluate artistic quality, legal compliance, and ensure content meets our strict
                  standards.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="relative overflow-hidden border-2 hover:border-foreground/20 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-foreground/50 to-foreground" />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <Award className="w-8 h-8 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                </div>
                <h3 className="text-xl font-bold">Verified & Published</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Approved images receive our verification badge and are published with watermark protection for the
                  marketplace.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Showcase with Stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Showcase */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />

                {/* Main verification image */}
                <div className="relative h-full p-8">
                  <div className="h-full rounded-lg overflow-hidden watermarked-image shadow-2xl">
                    <img
                      src="/digital-content-verification.jpg"
                      alt="Trust Engine verification process"
                      className="h-full w-full object-cover protected-image"
                    />
                  </div>

                  {/* Floating verification badge */}
                  <div className="absolute -bottom-4 -right-4 bg-background border-4 border-background rounded-2xl shadow-xl p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Status</div>
                        <div className="text-lg font-bold">Verified</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-foreground/10 rounded-full" />
                <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-foreground/10 rounded-full" />
              </div>
            </div>

            {/* Right: Stats and Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Built on Trust, Powered by Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our proprietary Trust Engine combines reverse image search, AI detection algorithms, metadata
                  analysis, and human expertise to maintain the highest standards of content authenticity.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">99.8%</div>
                  <div className="text-sm text-muted-foreground">Verification Accuracy Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">24hrs</div>
                  <div className="text-sm text-muted-foreground">Average Review Time</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">0%</div>
                  <div className="text-sm text-muted-foreground">AI-Generated Content</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Human-Made Originals</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/about/verification">
                    Learn More About Our Process
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Discover Unmatched Quality & Originality
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore stunning visuals from our curated collection of verified creators
              </p>
            </div>

            {/* Asymmetrical Grid Layout inspired by iStock */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Large dominant image - spans 2 rows and 2 columns on desktop */}
              <Link
                href="/image/featured-1"
                className="col-span-2 row-span-2 group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src="/professional-business-meeting.png"
                  alt="Featured professional photography"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Vertical image 1 */}
              <Link
                href="/image/featured-2"
                className="col-span-1 row-span-2 group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src="/professional-photographer-portrait.png"
                  alt="Portrait photography"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Small square 1 */}
              <Link
                href="/image/featured-3"
                className="col-span-1 group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src="/professional-photography.png"
                  alt="Abstract design"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Small square 2 */}
              <Link
                href="/image/featured-4"
                className="col-span-1 group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src="/modern-business-meeting.png"
                  alt="Business meeting"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Wide horizontal image */}
              <Link
                href="/image/featured-5"
                className="col-span-2 group relative aspect-[2/1] overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src="/professional-team.png"
                  alt="Team collaboration"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Small square 3 */}
              <Link
                href="/image/featured-6"
                className="col-span-1 group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src="/popular-photography-.jpg"
                  alt="Popular photography"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Small square 4 */}
              <Link
                href="/image/featured-7"
                className="col-span-1 group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src="/recent-photography-.jpg"
                  alt="Recent photography"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/explore">Explore All Content</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Explore Featured Collections & Styles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your perfect visual from our specialized content categories
            </p>
          </div>

          {/* Decorative background pattern */}
          <div className="relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-10 left-20 w-40 h-40 rounded-full bg-foreground blur-3xl" />
              <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-foreground blur-3xl" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category Card 1 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-foreground/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">AI-Free Illustrations</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    100% human-crafted illustrations with authentic artistic style and originality. No AI-generated
                    content.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-foreground group-hover:text-background transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="/category/illustrations">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Category Card 2 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-foreground/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <Camera className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Authentic Indian Photography</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Genuine cultural moments and landscapes captured by local photographers across India.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-foreground group-hover:text-background transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="/category/indian-photography">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Category Card 3 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-foreground/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Minimalist Vector Art</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Clean, scalable vector designs perfect for modern branding and digital projects.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-foreground group-hover:text-background transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="/category/vectors">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Category Card 4 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-foreground/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Premium Business Content</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional corporate imagery for presentations, marketing, and brand communications.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-foreground group-hover:text-background transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="/category/business">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Category Card 5 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-foreground/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Trending Lifestyle</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Contemporary lifestyle photography capturing modern living, wellness, and culture.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-foreground group-hover:text-background transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="/category/lifestyle">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Category Card 6 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-foreground/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Diverse Portraits</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Authentic portraits celebrating diversity, inclusion, and genuine human connections.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-foreground group-hover:text-background transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="/category/portraits">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Latest Insights from The Pintost Newsroom
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with industry trends, creator stories, and platform news
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Article Card 1 */}
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden watermarked-image">
                  <img
                    src="/digital-content-verification.jpg"
                    alt="Digital content verification"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Sarah Johnson</span>
                    <span>•</span>
                    <time dateTime="2024-01-15">Jan 15, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-muted-foreground transition-colors">
                    <Link href="/news/trust-engine-explained">How Our Trust Engine Verifies Every Image</Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Discover the technology and human expertise behind Pintost's rigorous verification process that
                    ensures authenticity.
                  </p>
                  <Link
                    href="/news/trust-engine-explained"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Article Card 2 */}
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden watermarked-image">
                  <img
                    src="/professional-photographer-portrait.png"
                    alt="Creator success story"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Michael Chen</span>
                    <span>•</span>
                    <time dateTime="2024-01-12">Jan 12, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-muted-foreground transition-colors">
                    <Link href="/news/creator-success-story">From Hobby to Career: A Creator's Journey</Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Meet Priya, who turned her passion for photography into a thriving business on Pintost with over
                    10,000 sales.
                  </p>
                  <Link
                    href="/news/creator-success-story"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Article Card 3 */}
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden watermarked-image">
                  <img
                    src="/open-book-knowledge.png"
                    alt="Licensing guide"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 protected-image"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Emma Williams</span>
                    <span>•</span>
                    <time dateTime="2024-01-10">Jan 10, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-muted-foreground transition-colors">
                    <Link href="/news/licensing-guide">Understanding Image Licensing: A Complete Guide</Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn the difference between standard and exclusive licenses, and choose the right option for your
                    project needs.
                  </p>
                  <Link
                    href="/news/licensing-guide"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/news">Visit Newsroom</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-background blur-3xl" />
              <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-background blur-3xl" />
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background text-balance">
                Ready to Share Your Masterpiece?
              </h2>
              <p className="text-lg md:text-xl text-background/80 text-balance leading-relaxed">
                Become a verified Pintost Creator and get your original work seen by millions. Join our community of
                talented artists earning from their creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                  <Link href="/apply">Apply to Be a Creator</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 bg-transparent text-background border-background/30 hover:bg-background/10 hover:text-background"
                >
                  <Link href="/creator/benefits">Learn About Benefits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
