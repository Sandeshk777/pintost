"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ExternalLink, Check, X } from "lucide-react"

export default function CreatorAuthorizationPage() {
  const applications = [
    {
      id: 1,
      name: "Maria Garcia",
      email: "maria@example.com",
      portfolio: "https://portfolio.example.com",
      appliedDate: "2025-10-01",
      status: "pending",
    },
    {
      id: 2,
      name: "David Chen",
      email: "david@example.com",
      portfolio: "https://behance.net/davidchen",
      appliedDate: "2025-10-02",
      status: "pending",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma@example.com",
      portfolio: "https://instagram.com/emmawilson",
      appliedDate: "2025-10-03",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Creator Authorization Queue</h1>
        <p className="text-muted-foreground">Review and approve creator applications.</p>
      </div>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Applications ({applications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Portfolio</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell className="text-muted-foreground">{app.email}</TableCell>
                  <TableCell>
                    <a
                      href={app.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      View Portfolio
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{app.appliedDate}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending Review</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="default">
                        <Check className="mr-1 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="mr-1 h-4 w-4" />
                        Reject
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
