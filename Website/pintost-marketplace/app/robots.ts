import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/creator/"],
    },
    sitemap: "https://www.pintost.com/sitemap.xml",
  }
}
