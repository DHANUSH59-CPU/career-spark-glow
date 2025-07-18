import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown,
  MapPin, 
  Briefcase,
  DollarSign,
  BarChart3,
  Calculator,
  Search
} from "lucide-react"
import { InteractiveSpotlight } from "@/components/ui/interactive-spotlight"

const salaryData = [
  {
    role: "Software Engineer",
    experience: "0-2 years",
    averageSalary: "₹6L - ₹12L",
    cities: {
      "Bangalore": "₹8L - ₹14L",
      "Mumbai": "₹7L - ₹13L",
      "Delhi": "₹6L - ₹12L",
      "Hyderabad": "₹7L - ₹13L",
      "Pune": "₹6L - ₹11L"
    },
    trend: "up",
    trendPercentage: 12
  },
  {
    role: "Senior Software Engineer",
    experience: "3-5 years",
    averageSalary: "₹15L - ₹25L",
    cities: {
      "Bangalore": "₹18L - ₹28L",
      "Mumbai": "₹16L - ₹26L",
      "Delhi": "₹15L - ₹24L",
      "Hyderabad": "₹16L - ₹25L",
      "Pune": "₹14L - ₹23L"
    },
    trend: "up",
    trendPercentage: 8
  },
  {
    role: "Product Manager",
    experience: "4-7 years",
    averageSalary: "₹25L - ₹45L",
    cities: {
      "Bangalore": "₹30L - ₹50L",
      "Mumbai": "₹28L - ₹48L",
      "Delhi": "₹25L - ₹45L",
      "Hyderabad": "₹26L - ₹46L",
      "Pune": "₹24L - ₹42L"
    },
    trend: "up",
    trendPercentage: 15
  },
  {
    role: "Data Scientist",
    experience: "2-4 years",
    averageSalary: "₹12L - ₹22L",
    cities: {
      "Bangalore": "₹15L - ₹25L",
      "Mumbai": "₹13L - ₹23L",
      "Delhi": "₹12L - ₹22L",
      "Hyderabad": "₹13L - ₹23L",
      "Pune": "₹11L - ₹21L"
    },
    trend: "up",
    trendPercentage: 20
  },
  {
    role: "UI/UX Designer",
    experience: "2-5 years",
    averageSalary: "₹10L - ₹18L",
    cities: {
      "Bangalore": "₹12L - ₹20L",
      "Mumbai": "₹11L - ₹19L",
      "Delhi": "₹10L - ₹18L",
      "Hyderabad": "₹10L - ₹18L",
      "Pune": "₹9L - ₹17L"
    },
    trend: "up",
    trendPercentage: 10
  },
  {
    role: "DevOps Engineer",
    experience: "3-6 years",
    averageSalary: "₹16L - ₹28L",
    cities: {
      "Bangalore": "₹20L - ₹32L",
      "Mumbai": "₹18L - ₹30L",
      "Delhi": "₹16L - ₹28L",
      "Hyderabad": "₹17L - ₹29L",
      "Pune": "₹15L - ₹27L"
    },
    trend: "up",
    trendPercentage: 18
  }
]

const industryTrends = [
  { industry: "Technology", growth: "+22%", avgSalary: "₹18L" },
  { industry: "Fintech", growth: "+28%", avgSalary: "₹22L" },
  { industry: "E-commerce", growth: "+15%", avgSalary: "₹16L" },
  { industry: "Healthcare", growth: "+12%", avgSalary: "₹14L" },
  { industry: "Education", growth: "+8%", avgSalary: "₹12L" },
  { industry: "Gaming", growth: "+35%", avgSalary: "₹20L" }
]

export default function SalaryGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/10 overflow-hidden">
        <InteractiveSpotlight className="absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Salary Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get insights into salary ranges across different roles, experience levels, and cities in India
            </p>
            
            {/* Salary Calculator */}
            <div className="max-w-2xl mx-auto">
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calculator className="w-5 h-5 mr-2" />
                    Salary Calculator
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Role</label>
                      <Input placeholder="e.g. Software Engineer" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Experience</label>
                      <select className="w-full h-10 px-3 rounded-md border border-border bg-background">
                        <option>0-2 years</option>
                        <option>3-5 years</option>
                        <option>6-10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <select className="w-full h-10 px-3 rounded-md border border-border bg-background">
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full mt-4 shadow-glow">
                    Calculate Salary Range
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Data Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Industry Trends */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Industry Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryTrends.map((trend, index) => (
                <Card key={index} className="glass job-card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{trend.industry}</h3>
                      <Badge className="bg-success/20 text-success">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {trend.growth}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold gradient-text">
                      {trend.avgSalary}
                    </div>
                    <p className="text-sm text-muted-foreground">Average Salary</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Salary by Role */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Salary by Role</h2>
            <div className="space-y-6">
              {salaryData.map((data, index) => (
                <Card key={index} className="glass">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{data.role}</CardTitle>
                        <p className="text-muted-foreground">{data.experience}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">
                          {data.averageSalary}
                        </div>
                        <div className="flex items-center text-success text-sm">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          +{data.trendPercentage}% from last year
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Salary by City</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {Object.entries(data.cities).map(([city, salary]) => (
                        <div key={city} className="text-center p-3 rounded-lg bg-muted/20">
                          <div className="flex items-center justify-center mb-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="font-medium">{city}</span>
                          </div>
                          <div className="text-primary font-semibold">{salary}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cost of Living Comparison */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Cost of Living Index</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { city: "Mumbai", index: 100, rent: "₹35,000", food: "₹8,000" },
                { city: "Bangalore", index: 85, rent: "₹25,000", food: "₹6,500" },
                { city: "Delhi", index: 90, rent: "₹28,000", food: "₹7,000" },
                { city: "Hyderabad", index: 75, rent: "₹20,000", food: "₹5,500" },
                { city: "Pune", index: 80, rent: "₹22,000", food: "₹6,000" },
                { city: "Chennai", index: 70, rent: "₹18,000", food: "₹5,000" }
              ].map((city, index) => (
                <Card key={index} className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        {city.city}
                      </h3>
                      <Badge variant="outline">
                        Index: {city.index}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg. Rent (1BHK)</span>
                        <span className="font-medium">{city.rent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Food</span>
                        <span className="font-medium">{city.food}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}