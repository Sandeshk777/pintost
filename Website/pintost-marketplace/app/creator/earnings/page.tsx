import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, TrendingUp, Download } from "lucide-react"

export default function CreatorEarningsPage() {
  const salesHistory = [
    {
      id: 1,
      date: "2025-10-03",
      image: "Professional Business Meeting",
      license: "Standard",
      amount: "$29.00",
      yourEarnings: "$20.30",
    },
    {
      id: 2,
      date: "2025-10-02",
      image: "Modern Office Space",
      license: "Exclusive",
      amount: "$499.00",
      yourEarnings: "$349.30",
    },
    {
      id: 3,
      date: "2025-10-02",
      image: "Team Collaboration",
      license: "Standard",
      amount: "$29.00",
      yourEarnings: "$20.30",
    },
    {
      id: 4,
      date: "2025-10-01",
      image: "Corporate Workspace",
      license: "Standard",
      amount: "$29.00",
      yourEarnings: "$20.30",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Earnings & Payouts</h1>
        <p className="text-muted-foreground">Track your sales and manage payout settings.</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450.00</div>
            <p className="text-xs text-muted-foreground mt-1">Lifetime earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245.00</div>
            <p className="text-xs text-muted-foreground mt-1">Ready for payout</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$890.00</div>
            <p className="text-xs text-muted-foreground mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Payout Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Payout Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">PayPal</p>
              <p className="text-sm text-muted-foreground">creator@example.com</p>
            </div>
            <Button variant="outline">Update</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Minimum Payout</p>
              <p className="text-sm text-muted-foreground">$100.00</p>
            </div>
            <Button>Request Payout</Button>
          </div>
        </CardContent>
      </Card>

      {/* Sales History */}
      <Card>
        <CardHeader>
          <CardTitle>Sales History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Sale Amount</TableHead>
                <TableHead>Your Earnings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesHistory.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="text-muted-foreground">{sale.date}</TableCell>
                  <TableCell className="font-medium">{sale.image}</TableCell>
                  <TableCell>{sale.license}</TableCell>
                  <TableCell>{sale.amount}</TableCell>
                  <TableCell className="font-semibold">{sale.yourEarnings}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
