import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newsroom - Pintost",
  description:
    "Latest news, updates, and stories from the Pintost community. Featured artists, industry insights, and platform updates.",
}

const articles = [
  {
    id: "how-to-choose-the-perfect-illustration",
    title: "How to Choose the Perfect Illustration for Your Brand",
    excerpt:
      "Learn the key principles of selecting illustrations that align with your brand identity and resonate with your target audience.",
    author: "Sarah Johnson",
    authorRole: "Publisher",
    date: "2025-09-28",
    category: "Tips & Guides",
    featured: false,
  },
  {
    id: "featured-artist-spotlight-maria-gonzales",
    title: "Featured Artist Spotlight: Maria Gonzales",
    excerpt:
      "Meet Maria Gonzales, one of our top-performing creators specializing in vibrant lifestyle photography and authentic human connections.",
    author: "John Doe",
    authorRole: "Creator",
    date: "2025-10-01",
    category: "Artist Spotlight",
    featured: false,
  },
  {
    id: "the-future-of-verified-digital-content",
    title: "The Future of Verified Digital Content",
    excerpt:
      "Exploring how blockchain and AI are revolutionizing content verification and authenticity in the digital marketplace.",
    author: "Admin Team",
    authorRole: "Admin",
    date: "2025-10-02",
    category: "Industry News",
    featured: true,
  },
]

export default function NewsroomPage() {
  const featuredArticle = articles.find((a) => a.featured) || articles[0]
  const regularArticles = articles.filter((a) => !a.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsroom</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest news, featured artists, and insights from the Pintost community.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Article */}
          <article className="mb-16">
            <Link href={`/news/${featuredArticle.id}`} className="group grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src="/placeholder.svg?key=iqxqy"
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <Badge>{featuredArticle.category}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold group-hover:text-muted-foreground transition-colors text-balance">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>
                      {featuredArticle.author} ({featuredArticle.authorRole})
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={featuredArticle.date}>
                      {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          {/* Article Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id}>
                  <Link href={`/news/${article.id}`} className="group block space-y-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                      <img
                        src={`/.jpg?key=iqxqy&height=400&width=600&query=${article.category}`}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <h3 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors text-balance">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>
                            {article.author} ({article.authorRole})
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <time dateTime={article.date}>
                            {new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Artist Spotlight", "Tips & Guides", "Industry News", "Platform Updates"].map((category) => (
                <Link
                  key={category}
                  href={`/news?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-6 border border-border rounded-lg hover:border-foreground transition-colors text-center"
                >
                  <h3 className="font-semibold">{category}</h3>
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
