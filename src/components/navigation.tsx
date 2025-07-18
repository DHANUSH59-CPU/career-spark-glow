import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  Menu,
  Heart,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 glass backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold gradient-text">
              JobPortal
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Button
              asChild
              variant="ghost"
              className={`hover:bg-accent ${
                isActive("/jobs") ? "bg-accent text-primary" : ""
              }`}
            >
              <Link to="/jobs">Find Jobs</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={`hover:bg-accent ${
                isActive("/companies") ? "bg-accent text-primary" : ""
              }`}
            >
              <Link to="/companies">Companies</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={`hover:bg-accent ${
                isActive("/salary-guide") ? "bg-accent text-primary" : ""
              }`}
            >
              <Link to="/salary-guide">Salary Guide</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={`hover:bg-accent ${
                isActive("/resources") ? "bg-accent text-primary" : ""
              }`}
            >
              <Link to="/resources">Resources</Link>
            </Button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search jobs..."
                className="pl-10 w-64 bg-background/50"
              />
            </div>
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                3
              </Badge>
            </Button>
            {/* User Menu */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button asChild variant="default">
                <Link to="/sign-in">Sign In</Link>
              </Button>
            </SignedOut>{" "}
            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
