"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function NewsroomManagementPage() {
  const articles = [
    {
      id: 1,
      title: "How to Choose the Perfect Illustration",
      author: "Sarah Johnson",
      authorRole: "Publisher",
      category: "Tips & Guides",
      status: "published",
      publishedDate: "2025-09-28",
    },
    {
      id: 2,
      title: "Featured Artist Spotlight: Maria Gonzales",
      author: "John Doe",
      authorRole: "Creator",
      category: "Artist Spotlight",
      status: "published",
      publishedDate: "2025-10-01",
    },
    {
      id: 3,
      title: "The Future of Verified Digital Content",
      author: "Admin Team",
      authorRole: "Admin",
      category: "Industry News",
      status: "draft",
      publishedDate: null,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Newsroom Management</h1>
          <p className="text-muted-foreground">Create and manage newsroom articles.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </div>

      {/* Articles Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{article.author}</p>
                      <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{article.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={article.status === "published" ? "default" : "secondary"}>
                      {article.status === "published" ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{article.publishedDate || "Not published"}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
