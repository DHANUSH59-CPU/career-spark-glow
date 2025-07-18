import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { JobCategories } from "@/components/job-categories"
import { FeaturedJobs } from "@/components/featured-jobs"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <JobCategories />
        <FeaturedJobs />
      </main>
    </div>
  );
};

export default Index;
