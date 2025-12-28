import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const authorName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${authorName} - Author Profile - Pintost`,
    description: `Read articles by ${authorName} on Pintost Newsroom`,
  }
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const authorName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Author Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-muted flex-shrink-0" />
              <div>
                <h1 className="text-4xl font-bold mb-2">{authorName}</h1>
                <Badge className="mb-4">Publisher</Badge>
                <p className="text-muted-foreground max-w-2xl">
                  Content strategist and writer, helping creators and buyers navigate the world of digital content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author's Articles */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Articles by {authorName}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i}>
                <Link href={`/news/article-${i}`} className="group block space-y-4">
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={`/open-book-knowledge.png?key=iqxqy&height=400&width=600&query=article ${i}`}
                      alt={`Article ${i + 1}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">Tips & Guides</Badge>
                    <h3 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors">
                      Article Title {i + 1}
                    </h3>
                    <p className="text-muted-foreground">
                      A brief excerpt from the article that gives readers a preview of what to expect...
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
