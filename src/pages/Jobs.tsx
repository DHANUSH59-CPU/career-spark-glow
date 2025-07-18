import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Search, 
  MapPin, 
  Filter,
  Heart,
  Bookmark,
  Building,
  Calendar,
  DollarSign,
  ExternalLink,
  SlidersHorizontal
} from "lucide-react"
import { InteractiveSpotlight } from "@/components/ui/interactive-spotlight"

const allJobs = [
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
    experience: "3-5 years"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "TCS",
    logo: "⚙️",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    remote: false,
    salary: "₹12L - ₹18L",
    posted: "1 day ago",
    description: "Develop scalable backend services using Node.js and microservices architecture.",
    tags: ["Node.js", "MongoDB", "AWS", "Docker"],
    experience: "2-4 years"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Swiggy",
    logo: "🍔",
    location: "Gurgaon, Haryana",
    type: "Full-time",
    remote: true,
    salary: "₹25L - ₹40L",
    posted: "3 days ago",
    description: "Lead product strategy and development for our food delivery platform.",
    tags: ["Product Strategy", "Analytics", "User Research", "Agile"],
    experience: "4-7 years"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "PhonePe",
    logo: "💳",
    location: "Pune, Maharashtra",
    type: "Full-time",
    remote: true,
    salary: "₹15L - ₹25L",
    posted: "1 day ago",
    description: "Design intuitive user interfaces for our fintech mobile application.",
    tags: ["Figma", "Sketch", "Prototyping", "Mobile Design"],
    experience: "2-5 years"
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Byju's",
    logo: "📊",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    remote: false,
    salary: "₹8L - ₹15L",
    posted: "5 days ago",
    description: "Analyze educational data to improve learning outcomes and user engagement.",
    tags: ["SQL", "Python", "Tableau", "Excel"],
    experience: "1-3 years"
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "Myntra",
    logo: "👗",
    location: "Jaipur, Rajasthan",
    type: "Full-time",
    remote: true,
    salary: "₹16L - ₹24L",
    posted: "2 days ago",
    description: "Develop and maintain our fashion e-commerce mobile applications.",
    tags: ["React Native", "iOS", "Android", "Firebase"],
    experience: "3-6 years"
  }
]

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"]
const locations = ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune", "Kolkata", "Gurgaon"]
const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Executive"]

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/10 overflow-hidden">
        <InteractiveSpotlight className="absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore thousands of job opportunities from top companies across India
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 glass p-6 rounded-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Job title, company, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="City, state, or remote"
                    className="pl-10 h-12"
                  />
                </div>
                <Button size="lg" className="shadow-glow">
                  <Search className="w-5 h-5 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80">
              <div className="lg:hidden mb-4">
                <Button 
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="w-full"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              
              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <Card className="glass">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Job Type</h3>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox 
                            id={type}
                            checked={selectedJobTypes.includes(type)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedJobTypes([...selectedJobTypes, type])
                              } else {
                                setSelectedJobTypes(selectedJobTypes.filter(t => t !== type))
                              }
                            }}
                          />
                          <label htmlFor={type} className="text-sm">{type}</label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Location</h3>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <div key={location} className="flex items-center space-x-2">
                          <Checkbox 
                            id={location}
                            checked={selectedLocations.includes(location)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedLocations([...selectedLocations, location])
                              } else {
                                setSelectedLocations(selectedLocations.filter(l => l !== location))
                              }
                            }}
                          />
                          <label htmlFor={location} className="text-sm">{location}</label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Experience Level</h3>
                    <div className="space-y-2">
                      {experienceLevels.map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={level} />
                          <label htmlFor={level} className="text-sm">{level}</label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">{filteredJobs.length} Jobs Found</h2>
                <select className="bg-background border border-border rounded-md px-3 py-2">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Highest Salary</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="group job-card-hover glass">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{job.logo}</div>
                          <div>
                            <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex items-center text-muted-foreground">
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

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.posted}
                        </div>
                        <div>
                          {job.experience}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                        {job.remote && (
                          <Badge className="bg-success/20 text-success">
                            Remote
                          </Badge>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Button className="flex-1">
                          Apply Now
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline">Previous</Button>
                  <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}