import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  MapPin, 
  Users, 
  Star,
  Building,
  ExternalLink,
  Heart,
  Briefcase
} from "lucide-react"
import { InteractiveSpotlight } from "@/components/ui/interactive-spotlight"

const featuredCompanies = [
  {
    id: 1,
    name: "Tata Consultancy Services",
    logo: "🏢",
    industry: "IT Services",
    location: "Mumbai, Maharashtra",
    employees: "500,000+",
    rating: 4.2,
    openJobs: 1245,
    description: "Leading global IT services, consulting and business solutions organization.",
    benefits: ["Health Insurance", "Flexible Hours", "Learning Budget", "Stock Options"],
    featured: true
  },
  {
    id: 2,
    name: "Infosys Limited",
    logo: "💡",
    industry: "Technology",
    location: "Bangalore, Karnataka",
    employees: "250,000+",
    rating: 4.1,
    openJobs: 892,
    description: "Global leader in next-generation digital services and consulting.",
    benefits: ["Medical Coverage", "Work From Home", "Training Programs", "Cafeteria"],
    featured: true
  },
  {
    id: 3,
    name: "Flipkart",
    logo: "🛒",
    industry: "E-commerce",
    location: "Bangalore, Karnataka",
    employees: "50,000+",
    rating: 4.3,
    openJobs: 456,
    description: "India's leading e-commerce marketplace transforming commerce through technology.",
    benefits: ["Stock Options", "Unlimited PTO", "Gym Membership", "Food Allowance"],
    featured: true
  },
  {
    id: 4,
    name: "Zomato",
    logo: "🍔",
    industry: "Food & Delivery",
    location: "Gurgaon, Haryana",
    employees: "5,000+",
    rating: 4.0,
    openJobs: 234,
    description: "Food delivery and restaurant discovery platform serving millions of users.",
    benefits: ["Health Insurance", "Meal Credits", "Flexible Timing", "Team Outings"],
    featured: false
  },
  {
    id: 5,
    name: "Paytm",
    logo: "💳",
    industry: "Fintech",
    location: "Noida, Uttar Pradesh",
    employees: "10,000+",
    rating: 3.9,
    openJobs: 345,
    description: "Leading digital payments and financial services company in India.",
    benefits: ["Performance Bonus", "Insurance", "Learning Budget", "Sabbatical Leave"],
    featured: false
  },
  {
    id: 6,
    name: "Swiggy",
    logo: "🚚",
    industry: "Food Delivery",
    location: "Bangalore, Karnataka",
    employees: "3,000+",
    rating: 4.2,
    openJobs: 178,
    description: "On-demand delivery platform connecting consumers to restaurants and stores.",
    benefits: ["Health Coverage", "Stock Options", "Free Meals", "Wellness Programs"],
    featured: false
  }
]

const industries = ["Technology", "E-commerce", "Fintech", "Healthcare", "Education", "Logistics"]
const companySizes = ["1-50", "51-200", "201-1000", "1000+"]

export default function Companies() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/10 overflow-hidden">
        <InteractiveSpotlight className="absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Discover Top Companies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore career opportunities at India's most innovative and fastest-growing companies
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 glass p-6 rounded-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Search companies..."
                    className="pl-10 h-12"
                  />
                </div>
                <Button size="lg" className="shadow-glow">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Featured Companies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCompanies.filter(company => company.featured).map((company) => (
                <Card key={company.id} className="group job-card-hover glass relative">
                  {company.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{company.logo}</div>
                      <div>
                        <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                          {company.name}
                        </h3>
                        <p className="text-muted-foreground">{company.industry}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {company.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {company.employees}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {company.rating}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {company.openJobs} jobs
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {company.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {company.benefits.slice(0, 3).map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button className="flex-1">
                          View Jobs
                        </Button>
                        <Button variant="outline" size="icon">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Companies */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">All Companies</h2>
              <div className="flex space-x-4">
                <select className="bg-background border border-border rounded-md px-3 py-2">
                  <option>All Industries</option>
                  {industries.map(industry => (
                    <option key={industry}>{industry}</option>
                  ))}
                </select>
                <select className="bg-background border border-border rounded-md px-3 py-2">
                  <option>Company Size</option>
                  {companySizes.map(size => (
                    <option key={size}>{size} employees</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCompanies.map((company) => (
                <Card key={company.id} className="group job-card-hover glass">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{company.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {company.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">{company.industry}</p>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {company.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {company.employees}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {company.rating}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {company.openJobs} jobs
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {company.description}
                        </p>

                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            View Jobs ({company.openJobs})
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
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