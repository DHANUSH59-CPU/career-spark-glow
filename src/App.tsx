
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useLenis } from "@/hooks/useLenis";
import SignInPage from "@/components/auth/sign-in";
import SignUpPage from "@/components/auth/sign-up";
import UserProfilePage from "@/components/auth/user-profile";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import SalaryGuide from "./pages/SalaryGuide";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* Protected Routes */}
      <Route
        path="/jobs"
        element={
          <>
            <SignedIn>
              <Jobs />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/companies"
        element={
          <>
            <SignedIn>
              <Companies />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/salary-guide"
        element={
          <>
            <SignedIn>
              <SalaryGuide />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/resources"
        element={
          <>
            <SignedIn>
              <Resources />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <SignedIn>
              <UserProfilePage />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>
          </>
        }
      />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
