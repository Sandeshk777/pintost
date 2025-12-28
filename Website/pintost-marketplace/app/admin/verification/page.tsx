"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Check, X, Eye } from "lucide-react"

export default function ContentVerificationPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const submissions = [
    {
      id: 1,
      title: "Professional Business Meeting",
      creator: "John Doe",
      submittedDate: "2025-10-01",
      category: "Business & Finance",
      status: "pending",
    },
    {
      id: 2,
      title: "Mountain Landscape Sunset",
      creator: "Maria Garcia",
      submittedDate: "2025-10-02",
      category: "Nature & Wildlife",
      status: "pending",
    },
    {
      id: 3,
      title: "Modern Tech Workspace",
      creator: "David Chen",
      submittedDate: "2025-10-03",
      category: "Technology & Innovation",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Content Verification Queue</h1>
        <p className="text-muted-foreground">Review and verify submitted content for authenticity.</p>
      </div>

      {/* Submissions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Verification ({submissions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Creator</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                        <img
                          src={`/.jpg?key=w9eaf&height=100&width=100&query=${submission.title}`}
                          alt={submission.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{submission.title}</p>
                        <p className="text-sm text-muted-foreground">ID: {submission.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{submission.creator}</TableCell>
                  <TableCell className="text-muted-foreground">{submission.category}</TableCell>
                  <TableCell className="text-muted-foreground">{submission.submittedDate}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending Review</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline" onClick={() => setSelectedImage(submission.id)}>
                      <Eye className="mr-1 h-4 w-4" />
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Review Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Content Verification Review</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Image Preview */}
            <div>
              <h3 className="font-semibold mb-3">Submitted Image</h3>
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted watermarked-image">
                <img
                  src="/placeholder.svg?key=q0smz"
                  alt="Review image"
                  className="h-full w-full object-cover protected-image"
                />
              </div>
            </div>

            <Separator />

            {/* Source File */}
            <div>
              <h3 className="font-semibold mb-3">Source File</h3>
              <div className="p-4 border border-border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">business-meeting-source.psd</p>
                  <p className="text-sm text-muted-foreground">Adobe Photoshop Document • 145 MB</p>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Download Source
                </Button>
              </div>
            </div>

            <Separator />

            {/* Reverse Image Search */}
            <div>
              <h3 className="font-semibold mb-3">Reverse Image Search Results</h3>
              <div className="p-4 border border-border rounded-lg bg-muted/30">
                <p className="text-sm text-muted-foreground mb-2">
                  Automated reverse image search completed. No matches found on major stock photo sites.
                </p>
                <Badge variant="default">Original Content</Badge>
              </div>
            </div>

            <Separator />

            {/* Image Details */}
            <div>
              <h3 className="font-semibold mb-3">Submission Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Title</p>
                  <p className="font-medium">Professional Business Meeting</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Creator</p>
                  <p className="font-medium">John Doe</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Category</p>
                  <p className="font-medium">Business & Finance</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Submitted</p>
                  <p className="font-medium">2025-10-01</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setSelectedImage(null)}>
                Cancel
              </Button>
              <Button variant="destructive">
                <X className="mr-2 h-4 w-4" />
                Reject Content
              </Button>
              <Button>
                <Check className="mr-2 h-4 w-4" />
                Approve Content
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
