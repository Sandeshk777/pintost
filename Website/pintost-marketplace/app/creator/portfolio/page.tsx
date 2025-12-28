"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function CreatorPortfolioPage() {
  const images = [
    {
      id: 1,
      title: "Professional Business Meeting",
      status: "approved",
      views: 1234,
      downloads: 89,
      earnings: "$2,581",
      uploadDate: "2025-09-15",
    },
    {
      id: 2,
      title: "Modern Office Space",
      status: "approved",
      views: 856,
      downloads: 45,
      earnings: "$1,305",
      uploadDate: "2025-09-20",
    },
    {
      id: 3,
      title: "Team Collaboration",
      status: "pending",
      views: 0,
      downloads: 0,
      earnings: "$0",
      uploadDate: "2025-10-01",
    },
    {
      id: 4,
      title: "Corporate Workspace",
      status: "approved",
      views: 2341,
      downloads: 156,
      earnings: "$4,524",
      uploadDate: "2025-08-10",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Portfolio Management</h1>
          <p className="text-muted-foreground">Manage your uploaded images and track their performance.</p>
        </div>
        <Button asChild>
          <Link href="/creator/upload">Upload New Image</Link>
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search your portfolio..." className="pl-10" />
      </div>

      {/* Portfolio Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Downloads</TableHead>
              <TableHead>Earnings</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {images.map((image) => (
              <TableRow key={image.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                      <img
                        src={`/.jpg?key=w9eaf&height=100&width=100&query=${image.title}`}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{image.title}</p>
                      <p className="text-sm text-muted-foreground">ID: {image.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={image.status === "approved" ? "default" : "secondary"}>
                    {image.status === "approved" ? "Approved" : "Pending Review"}
                  </Badge>
                </TableCell>
                <TableCell>{image.views.toLocaleString()}</TableCell>
                <TableCell>{image.downloads}</TableCell>
                <TableCell className="font-semibold">{image.earnings}</TableCell>
                <TableCell className="text-muted-foreground">{image.uploadDate}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Info
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Request Deletion
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
