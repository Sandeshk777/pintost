import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ImageIcon, DollarSign, AlertCircle } from "lucide-react"

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Users", value: "12,456", icon: Users, change: "+234 this month" },
    { title: "Total Creators", value: "1,234", icon: Users, change: "+45 this month" },
    { title: "Total Images", value: "156,789", icon: ImageIcon, change: "+2,345 this month" },
    { title: "Platform Revenue", value: "$456,789", icon: DollarSign, change: "+12.5% this month" },
  ]

  const pendingItems = [
    { type: "Creator Applications", count: 23, priority: "high" },
    { type: "Content Verification", count: 156, priority: "high" },
    { type: "Support Tickets", count: 12, priority: "medium" },
    { type: "Reported Content", count: 5, priority: "low" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Platform overview and pending actions.</p>
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
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingItems.map((item) => (
              <div key={item.type} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle
                    className={`h-5 w-5 ${
                      item.priority === "high"
                        ? "text-destructive"
                        : item.priority === "medium"
                          ? "text-yellow-600"
                          : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="font-medium">{item.type}</p>
                    <p className="text-sm text-muted-foreground">{item.count} items pending review</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    item.priority === "high"
                      ? "bg-destructive/10 text-destructive"
                      : item.priority === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.priority.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New creator application", user: "Maria Garcia", time: "5 minutes ago" },
              { action: "Content approved", user: "John Doe - Image #12345", time: "15 minutes ago" },
              { action: "User reported content", user: "Image #67890", time: "1 hour ago" },
              { action: "Creator application approved", user: "Sarah Johnson", time: "2 hours ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-muted-foreground">{activity.user}</p>
                </div>
                <p className="text-muted-foreground text-xs">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
