import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Video,
  FileText,
  Download,
  Clock,
  User,
  Star,
  Search,
  TrendingUp,
  Target,
  Brain,
  Award
} from "lucide-react"
import { InteractiveSpotlight } from "@/components/ui/interactive-spotlight"

const resourceCategories = [
  {
    id: 1,
    title: "Career Advice",
    icon: Target,
    description: "Expert guidance for career growth and transitions",
    articles: 45,
    color: "bg-blue-500/20 text-blue-500"
  },
  {
    id: 2,
    title: "Interview Prep",
    icon: Brain,
    description: "Comprehensive interview preparation materials",
    articles: 32,
    color: "bg-green-500/20 text-green-500"
  },
  {
    id: 3,
    title: "Resume Building",
    icon: FileText,
    description: "Templates and tips for crafting perfect resumes",
    articles: 28,
    color: "bg-purple-500/20 text-purple-500"
  },
  {
    id: 4,
    title: "Skill Development",
    icon: TrendingUp,
    description: "Latest trends and skills in demand",
    articles: 56,
    color: "bg-orange-500/20 text-orange-500"
  },
  {
    id: 5,
    title: "Industry Insights",
    icon: Award,
    description: "Deep dives into various industry sectors",
    articles: 38,
    color: "bg-pink-500/20 text-pink-500"
  },
  {
    id: 6,
    title: "Salary Negotiation",
    icon: TrendingUp,
    description: "Strategies for successful salary negotiations",
    articles: 22,
    color: "bg-cyan-500/20 text-cyan-500"
  }
]

const featuredArticles = [
  {
    id: 1,
    title: "The Complete Guide to Software Engineering Interviews in India",
    author: "Priya Sharma",
    readTime: "12 min",
    category: "Interview Prep",
    rating: 4.8,
    readers: "2.3k",
    description: "Everything you need to know about cracking technical interviews at top Indian tech companies.",
    tags: ["Technical Interview", "Software Engineering", "Coding"],
    featured: true
  },
  {
    id: 2,
    title: "Building a Standout Resume for the Indian Job Market",
    author: "Rajesh Kumar",
    readTime: "8 min",
    category: "Resume Building",
    rating: 4.7,
    readers: "1.8k",
    description: "Learn how to craft a resume that gets noticed by Indian recruiters and hiring managers.",
    tags: ["Resume", "Job Application", "Career Tips"],
    featured: true
  },
  {
    id: 3,
    title: "Transitioning from Service to Product Companies",
    author: "Anitha Reddy",
    readTime: "15 min",
    category: "Career Advice",
    rating: 4.9,
    readers: "3.1k",
    description: "A comprehensive guide for making the transition from service-based to product companies.",
    tags: ["Career Transition", "Product Companies", "Strategy"],
    featured: true
  },
  {
    id: 4,
    title: "Top 10 In-Demand Skills for 2024 in India",
    author: "Vikram Singh",
    readTime: "10 min",
    category: "Skill Development",
    rating: 4.6,
    readers: "2.7k",
    description: "Discover the most sought-after skills by employers in the Indian job market.",
    tags: ["Skills", "Technology", "2024 Trends"],
    featured: false
  },
  {
    id: 5,
    title: "Understanding Startup Culture vs Corporate Environment",
    author: "Meera Patel",
    readTime: "12 min",
    category: "Industry Insights",
    rating: 4.5,
    readers: "1.9k",
    description: "Key differences between startup and corporate work environments in India.",
    tags: ["Startup", "Corporate", "Work Culture"],
    featured: false
  },
  {
    id: 6,
    title: "Effective Salary Negotiation Strategies for Indian Professionals",
    author: "Amit Agarwal",
    readTime: "9 min",
    category: "Salary Negotiation",
    rating: 4.8,
    readers: "2.5k",
    description: "Proven techniques to negotiate better compensation packages in India.",
    tags: ["Salary", "Negotiation", "Career Growth"],
    featured: false
  }
]

const downloadableResources = [
  {
    id: 1,
    title: "Software Engineer Resume Template",
    type: "PDF Template",
    downloads: "12.5k",
    description: "ATS-friendly resume template for software engineers"
  },
  {
    id: 2,
    title: "Interview Questions Checklist",
    type: "PDF Guide",
    downloads: "8.9k",
    description: "Common interview questions for tech roles"
  },
  {
    id: 3,
    title: "Salary Negotiation Email Templates",
    type: "Document",
    downloads: "6.2k",
    description: "Professional email templates for salary discussions"
  },
  {
    id: 4,
    title: "Career Roadmap Planner",
    type: "Excel Template",
    downloads: "4.7k",
    description: "Plan your career progression step by step"
  }
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/10 overflow-hidden">
        <InteractiveSpotlight className="absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Career Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Expert advice, guides, and tools to accelerate your career growth in India
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4 glass p-6 rounded-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Search articles, guides, templates..."
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

      {/* Resource Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resourceCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.id} className="group job-card-hover glass">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        {category.articles} articles
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Explore →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
            <div className="space-y-6">
              {featuredArticles.map((article) => (
                <Card key={article.id} className={`group job-card-hover glass ${article.featured ? 'ring-2 ring-primary/30' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{article.category}</Badge>
                          {article.featured && (
                            <Badge className="bg-primary text-primary-foreground">
                              ⭐ Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {article.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            {article.rating}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {article.readers} readers
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button>
                          Read Article
                        </Button>
                        <Button variant="outline" size="icon">
                          <BookOpen className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Free Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloadableResources.map((resource) => (
                <Card key={resource.id} className="group job-card-hover glass">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{resource.type}</p>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {resource.downloads} downloads
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
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