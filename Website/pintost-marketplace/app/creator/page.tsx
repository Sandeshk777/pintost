import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Download, Eye, ImageIcon } from "lucide-react"

export default function CreatorDashboardPage() {
  const stats = [
    { title: "Total Earnings", value: "$12,450", icon: DollarSign, change: "+12.5%" },
    { title: "Total Sales", value: "1,234", icon: Download, change: "+8.2%" },
    { title: "Portfolio Views", value: "45,678", icon: Eye, change: "+15.3%" },
    { title: "Active Images", value: "156", icon: ImageIcon, change: "+3" },
  ]

  const recentSales = [
    { id: 1, image: "Professional Business Meeting", license: "Standard", amount: "$29", date: "2025-10-03" },
    { id: 2, image: "Modern Office Space", license: "Exclusive", amount: "$499", date: "2025-10-02" },
    { id: 3, image: "Team Collaboration", license: "Standard", amount: "$29", date: "2025-10-02" },
    { id: 4, image: "Corporate Workspace", license: "Standard", amount: "$29", date: "2025-10-01" },
    { id: 5, image: "Business Strategy", license: "Standard", amount: "$29", date: "2025-10-01" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your creator account.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Sales */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded" />
                  <div>
                    <p className="font-medium">{sale.image}</p>
                    <p className="text-sm text-muted-foreground">{sale.license} License</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{sale.amount}</p>
                  <p className="text-sm text-muted-foreground">{sale.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
