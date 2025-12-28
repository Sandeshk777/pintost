import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, User, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const articles: Record<
  string,
  {
    title: string
    author: string
    authorRole: string
    date: string
    category: string
    content: string
  }
> = {
  "how-to-choose-the-perfect-illustration": {
    title: "How to Choose the Perfect Illustration for Your Brand",
    author: "Sarah Johnson",
    authorRole: "Publisher",
    date: "2025-09-28",
    category: "Tips & Guides",
    content: `
      <p>Choosing the right illustration for your brand is a critical decision that can significantly impact how your audience perceives your business. In this comprehensive guide, we'll explore the key principles and considerations for selecting illustrations that truly resonate.</p>

      <h2>Understanding Your Brand Identity</h2>
      <p>Before diving into illustration selection, it's essential to have a clear understanding of your brand identity. Consider your brand values, target audience, and the emotions you want to evoke. Are you aiming for a professional, corporate feel, or something more playful and creative?</p>

      <h2>Style Consistency</h2>
      <p>Consistency is key when building a recognizable brand. Whether you choose flat design, hand-drawn illustrations, or 3D renders, maintaining a consistent style across all your visual content helps create a cohesive brand experience.</p>

      <h2>Color Psychology</h2>
      <p>Colors play a powerful role in how illustrations are perceived. Different colors evoke different emotions and associations. Blue conveys trust and professionalism, while yellow suggests optimism and creativity. Choose colors that align with your brand message.</p>

      <h2>Authenticity Matters</h2>
      <p>In today's market, authenticity is more important than ever. Verified, original illustrations from talented creators help your brand stand out and avoid the generic stock photo look that many audiences have grown tired of.</p>

      <h2>Conclusion</h2>
      <p>Selecting the perfect illustration requires thoughtful consideration of your brand identity, audience preferences, and visual consistency. By following these principles and choosing verified content from platforms like Pintost, you can ensure your visual content truly represents your brand.</p>
    `,
  },
  "featured-artist-spotlight-maria-gonzales": {
    title: "Featured Artist Spotlight: Maria Gonzales",
    author: "John Doe",
    authorRole: "Creator",
    date: "2025-10-01",
    category: "Artist Spotlight",
    content: `
      <p>This month, we're thrilled to spotlight Maria Gonzales, one of our most talented and prolific creators on Pintost. With over 1,500 images in her portfolio and thousands of satisfied customers, Maria has become a cornerstone of our creative community.</p>

      <h2>The Journey</h2>
      <p>Maria's journey into photography began over a decade ago when she received her first camera as a gift. What started as a hobby quickly evolved into a passion, and eventually, a full-time career. "I never imagined that capturing moments would become my life's work," Maria shares.</p>

      <h2>Signature Style</h2>
      <p>Maria's work is characterized by its authentic, candid approach to lifestyle photography. She specializes in capturing genuine human connections and emotions, creating images that feel natural and relatable. Her use of natural lighting and minimal post-processing gives her work a timeless quality.</p>

      <h2>Impact on Pintost</h2>
      <p>Since joining Pintost in 2023, Maria has contributed significantly to our platform's growth. Her images have been downloaded over 50,000 times and used by brands ranging from small startups to Fortune 500 companies. "Pintost's verification process gives buyers confidence in the authenticity of my work," she explains.</p>

      <h2>Advice for Aspiring Creators</h2>
      <p>"Stay true to your vision and don't try to copy what's trending," Maria advises. "The market needs authentic voices and unique perspectives. Focus on creating work that you're proud of, and the right audience will find you."</p>

      <h2>What's Next</h2>
      <p>Maria is currently working on a new series focusing on sustainable living and environmental consciousness. "I want my work to not only be beautiful but also meaningful," she says. We can't wait to see what she creates next.</p>
    `,
  },
  "the-future-of-verified-digital-content": {
    title: "The Future of Verified Digital Content",
    author: "Admin Team",
    authorRole: "Admin",
    date: "2025-10-02",
    category: "Industry News",
    content: `
      <p>The digital content landscape is undergoing a revolutionary transformation. As AI-generated content becomes increasingly sophisticated and widespread, the need for verified, authentic digital assets has never been more critical.</p>

      <h2>The Authenticity Crisis</h2>
      <p>With the rise of AI image generation tools, the internet is flooded with synthetic content. While these tools have their place, they've created a crisis of authenticity. Buyers and brands are increasingly seeking verified, human-created content that they can trust.</p>

      <h2>Blockchain and Content Verification</h2>
      <p>Blockchain technology is emerging as a powerful solution for content verification. By creating immutable records of content creation and ownership, blockchain can provide indisputable proof of authenticity. At Pintost, we're exploring how to integrate these technologies into our verification process.</p>

      <h2>AI as a Tool, Not a Replacement</h2>
      <p>While AI can generate images, it cannot replace the human creativity, emotion, and perspective that make truly compelling visual content. The future lies in using AI as a tool to enhance human creativity, not replace it.</p>

      <h2>The Role of Verification Platforms</h2>
      <p>Platforms like Pintost play a crucial role in this new landscape. By manually verifying content and requiring source files, we ensure that every image on our platform is authentic and original. This verification process protects both creators and buyers.</p>

      <h2>Looking Ahead</h2>
      <p>The future of digital content will be defined by transparency, authenticity, and trust. As technology continues to evolve, platforms that prioritize verification and support human creators will become increasingly valuable. We're committed to leading this charge and building a marketplace where authenticity is guaranteed.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]

  if (!article) {
    return {
      title: "Article Not Found - Pintost",
    }
  }

  return {
    title: `${article.title} - Pintost Newsroom`,
    description: article.content.substring(0, 160),
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Newsroom
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-12 space-y-6">
            <Badge>{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <Link
                  href={`/author/${article.author.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {article.author} ({article.authorRole})
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <Separator />
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted mb-12">
            <img
              src={`/.jpg?key=iqxqy&height=600&width=1200&query=${article.category}`}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">{article.author}</h3>
                <p className="text-sm text-muted-foreground mb-2">{article.authorRole}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.authorRole === "Creator"
                    ? "Professional photographer and content creator on Pintost, sharing insights from years of experience in the industry."
                    : article.authorRole === "Publisher"
                      ? "Content strategist and writer, helping creators and buyers navigate the world of digital content."
                      : "Part of the Pintost team, dedicated to building the best platform for verified digital content."}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-muted/30 py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(articles)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 3)
                .map(([slug, relatedArticle]) => (
                  <article key={slug}>
                    <Link href={`/news/${slug}`} className="group block space-y-4">
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                        <img
                          src={`/.jpg?key=iqxqy&height=300&width=500&query=${relatedArticle.category}`}
                          alt={relatedArticle.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary">{relatedArticle.category}</Badge>
                        <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors text-balance">
                          {relatedArticle.title}
                        </h3>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
