import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

const categories = {
  "business-finance": {
    title: "Business & Finance",
    description: "Professional business imagery, corporate settings, and financial concepts",
  },
  "nature-wildlife": {
    title: "Nature & Wildlife",
    description: "Stunning natural landscapes, wildlife photography, and outdoor scenes",
  },
  "technology-innovation": {
    title: "Technology & Innovation",
    description: "Modern technology, digital innovation, and futuristic concepts",
  },
  "art-design": {
    title: "Art & Design",
    description: "Creative artwork, design elements, and artistic compositions",
  },
  "people-lifestyle": {
    title: "People & Lifestyle",
    description: "Authentic lifestyle photography, portraits, and human connections",
  },
  lifestyle: {
    title: "Trending Lifestyle",
    description: "Contemporary lifestyle photography capturing modern living, wellness, and culture",
  },
  illustrations: {
    title: "AI-Free Illustrations",
    description: "100% human-crafted illustrations with authentic artistic style and originality",
  },
  "indian-photography": {
    title: "Authentic Indian Photography",
    description: "Genuine cultural moments and landscapes captured by local photographers across India",
  },
  vectors: {
    title: "Minimalist Vector Art",
    description: "Clean, scalable vector designs perfect for modern branding and digital projects",
  },
  business: {
    title: "Premium Business Content",
    description: "Professional corporate imagery for presentations, marketing, and brand communications",
  },
  portraits: {
    title: "Diverse Portraits",
    description: "Authentic portraits celebrating diversity, inclusion, and genuine human connections",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  if (!category) {
    return {
      title: "Category Not Found - Pintost",
    }
  }

  return {
    title: `${category.title} - Pintost`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Category Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{category.description}</p>
          </div>
        </section>

        {/* Category Images */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <Link
                key={i}
                href={`/image/sample-${i}`}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted watermarked-image"
              >
                <img
                  src={`/.jpg?height=400&width=400&query=${category.title} ${i}`}
                  alt={`${category.title} image ${i + 1}`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105 protected-image"
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
