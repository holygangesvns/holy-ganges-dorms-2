import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";

// Each page now loads as its own small file, only when a visitor
// actually goes to that page — instead of one big file everyone
// downloads up front.
const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Book = lazy(() => import("./pages/Book"));
const Blogs = lazy(() => import("./pages/Blogs"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Router() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-muted-foreground">Loading…</div>
          </div>
        }
      >
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/gallery"} component={Gallery} />
          <Route path={"/blogs"} component={Blogs} />
          <Route path={"/book"} component={Book} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
