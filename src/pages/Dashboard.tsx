
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";

// Dati fake per i grafici
const performanceData = [
  { month: "Jan", value: 4000, returns: 2400 },
  { month: "Feb", value: 3000, returns: 1398 },
  { month: "Mar", value: 2000, returns: 9800 },
  { month: "Apr", value: 2780, returns: 3908 },
  { month: "May", value: 1890, returns: 4800 },
  { month: "Jun", value: 2390, returns: 3800 },
];

const fundDistributionData = [
  { name: "Equity", value: 400 },
  { name: "Fixed Income", value: 300 },
  { name: "Real Estate", value: 300 },
  { name: "Alternative", value: 200 },
];

const analyticsData = [
  { name: "Fund A", performance: 20, risk: 15, size: 100 },
  { name: "Fund B", performance: 30, risk: 20, size: 150 },
  { name: "Fund C", performance: 25, risk: 10, size: 80 },
  { name: "Fund D", performance: 15, risk: 25, size: 200 },
  { name: "Fund E", performance: 35, risk: 18, size: 120 },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-heading font-bold text-aires-navy mb-8">
        Interactive Dashboard
      </h1>
      
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="comparison">Fund Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total AUM</CardTitle>
                <LineChart className="w-4 h-4 text-aires-navy" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12.4B</div>
                <p className="text-xs text-muted-foreground">+20.1% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Performance</CardTitle>
                <BarChart className="w-4 h-4 text-aires-emerald" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15.2%</div>
                <p className="text-xs text-muted-foreground">Annual return</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Fund Distribution</CardTitle>
                <PieChart className="w-4 h-4 text-aires-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Active funds</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Historical Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stackId="1"
                      stroke="#0f172a"
                      fill="#0f172a"
                      fillOpacity={0.3}
                      name="Fund Value"
                    />
                    <Area
                      type="monotone"
                      dataKey="returns"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.3}
                      name="Returns"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fund Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={analyticsData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="performance"
                      stroke="#0f172a"
                      fill="#0f172a"
                      fillOpacity={0.3}
                      name="Performance"
                    />
                    <Area
                      type="monotone"
                      dataKey="risk"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.3}
                      name="Risk"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fund Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={analyticsData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="performance" fill="#0f172a" name="Performance" />
                    <Bar dataKey="risk" fill="#10b981" name="Risk" />
                    <Bar dataKey="size" fill="#3b82f6" name="Fund Size" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
