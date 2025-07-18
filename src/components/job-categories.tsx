import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveSpotlight } from "@/components/ui/interactive-spotlight"
import { 
  Code, 
  Palette, 
  BarChart, 
  Users, 
  Shield, 
  Wrench,
  Heart,
  GraduationCap,
  TrendingUp,
  Camera,
  Music,
  Zap
} from "lucide-react"

const categories = [
  {
    icon: Code,
    title: "Technology",
    count: "2,847",
    description: "Software Development, AI, Data Science",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Palette,
    title: "Design",
    count: "1,432",
    description: "UI/UX, Graphic Design, Product Design",
    gradient: "from-info to-primary"
  },
  {
    icon: BarChart,
    title: "Marketing",
    count: "1,876",
    description: "Digital Marketing, SEO, Content Strategy",
    gradient: "from-warning to-info"
  },
  {
    icon: Users,
    title: "Sales",
    count: "1,234",
    description: "Account Management, Business Development",
    gradient: "from-success to-warning"
  },
  {
    icon: Shield,
    title: "Finance",
    count: "987",
    description: "Investment Banking, Financial Analysis",
    gradient: "from-primary to-success"
  },
  {
    icon: Wrench,
    title: "Engineering",
    count: "756",
    description: "Mechanical, Civil, Electrical Engineering",
    gradient: "from-info to-warning"
  },
  {
    icon: Heart,
    title: "Healthcare",
    count: "1,543",
    description: "Nursing, Medical Research, Therapy",
    gradient: "from-success to-info"
  },
  {
    icon: GraduationCap,
    title: "Education",
    count: "892",
    description: "Teaching, Training, Academic Research",
    gradient: "from-primary to-warning"
  }
]

export function JobCategories() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Explore Job Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities across diverse industries and find the perfect role that matches your expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="group relative overflow-hidden job-card-hover cursor-pointer">
                <InteractiveSpotlight size={300} />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} shadow-glow`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                      {category.count} jobs
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Card className="inline-block glass">
            <CardContent className="p-6 flex items-center space-x-4">
              <TrendingUp className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold">View All Categories</h3>
                <p className="text-sm text-muted-foreground">Explore 50+ job categories</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}