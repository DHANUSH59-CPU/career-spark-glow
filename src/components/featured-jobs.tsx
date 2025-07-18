import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart,
  Bookmark,
  ExternalLink,
  Building,
  Calendar
} from "lucide-react"

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Infosys Ltd.",
    logo: "🚀",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    remote: true,
    salary: "₹18L - ₹28L",
    posted: "2 days ago",
    description: "Join our team to build cutting-edge web applications using React and TypeScript.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    featured: true
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Flipkart",
    logo: "🎨",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    remote: false,
    salary: "₹12L - ₹20L",
    posted: "1 day ago",
    description: "Create intuitive user experiences and beautiful interfaces for our e-commerce platform.",
    tags: ["Figma", "UI/UX", "Prototyping", "User Research"],
    featured: true
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Zerodha",
    logo: "☁️",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    remote: true,
    salary: "₹15L - ₹25L",
    posted: "3 days ago",
    description: "Manage our cloud infrastructure and implement CI/CD pipelines for fintech applications.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    featured: true
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Ola Cabs",
    logo: "🤖",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    remote: true,
    salary: "₹20L - ₹35L",
    posted: "1 day ago",
    description: "Develop machine learning models to optimize ride allocation and pricing strategies.",
    tags: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    featured: false
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Zomato",
    logo: "📈",
    location: "Delhi, Delhi",
    type: "Full-time",
    remote: true,
    salary: "₹10L - ₹18L",
    posted: "4 days ago",
    description: "Lead digital marketing campaigns and growth strategies for food delivery platform.",
    tags: ["Digital Marketing", "SEO", "Analytics", "Growth Hacking"],
    featured: false
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Paytm",
    logo: "⚡",
    location: "Pune, Maharashtra",
    type: "Full-time",
    remote: true,
    salary: "₹14L - ₹22L",
    posted: "2 days ago",
    description: "Build end-to-end payment solutions using modern web technologies.",
    tags: ["Node.js", "React", "PostgreSQL", "AWS"],
    featured: false
  }
]

export function FeaturedJobs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked positions from top companies actively hiring talented professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id} className={`group job-card-hover ${job.featured ? 'ring-2 ring-primary/30' : ''}`}>
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{job.logo}</div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Building className="w-4 h-4 mr-1" />
                        {job.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                    {job.remote && (
                      <Badge variant="secondary" className="ml-2 bg-success/20 text-success">
                        Remote
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {job.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {job.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{job.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Featured Badge */}
                {job.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="shadow-glow">
            View All Jobs
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}