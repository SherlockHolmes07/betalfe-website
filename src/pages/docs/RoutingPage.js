import { defineComponent, h } from 'betal-fe';
import { Section, Subsection, Para, Code, CodeBlock, BulletList, Strong } from '../../components/docs/DocElements.js';

export const RoutingPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Routing"]),
      Para(
        "Most applications have multiple pages - a home page, an about page, a settings page, and so on. Betal-FE includes a built-in hash router that lets you create multi-page applications without server configuration."
      ),

      // What is Hash Routing?
      Section("What is Hash Routing?"),
      Para(
        "Hash routing uses the URL fragment (the part after ",
        Code("#"),
        ") to determine which page to show:"
      ),
      CodeBlock(
`https://yourapp.com/#/          → Home page
https://yourapp.com/#/about     → About page
https://yourapp.com/#/users/123 → User profile page`,
        "bash"
      ),
      Para(
        "The browser doesn't send the hash to the server, so your entire app can be served from a single HTML file. This makes deployment simple - any static file host works."
      ),

      // Setting Up the Router
      Section("Setting Up the Router"),
      Para("Import the router class and components:"),
      CodeBlock(
`import { 
  createBetalApp, 
  defineComponent, 
  h,
  HashRouter,
  RouterLink,
  RouterOutlet
} from "betal-fe";`
      ),

      // Creating Your App Component
      Subsection("Creating Your App Component"),
      Para(
        "The main App component uses ",
        Code("RouterLink"),
        " for navigation and ",
        Code("RouterOutlet"),
        " to render the current page:"
      ),
      CodeBlock(
`const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage }
];

const App = defineComponent({
  render() {
    return h("div", {}, [
      h("nav", {}, [
        h(RouterLink, { to: "/" }, ["Home"]),
        h(RouterLink, { to: "/about" }, ["About"]),
        h(RouterLink, { to: "/contact" }, ["Contact"])
      ]),
      h("main", {}, [
        h(RouterOutlet)
      ])
    ]);
  }
});

// Create the router with routes and options
const router = new HashRouter(routes, {
  scrollBehavior: 'top'  // Optional: 'top', false, or custom function
});

// Mount the app with router
createBetalApp(App, {}, { router }).mount(document.getElementById("app"));`
      ),
      Para(
        "The ",
        Code("RouterOutlet"),
        " component automatically renders whichever component matches the current URL."
      ),

      // Defining Page Components
      Subsection("Defining Page Components"),
      Para("Each page is just a regular component:"),
      CodeBlock(
`const HomePage = defineComponent({
  render() {
    return h("div", {}, [
      h("h1", {}, ["Welcome Home"]),
      h("p", {}, ["This is the home page."])
    ]);
  }
});

const AboutPage = defineComponent({
  render() {
    return h("div", {}, [
      h("h1", {}, ["About Us"]),
      h("p", {}, ["We make great software."])
    ]);
  }
});`
      ),

      // Navigation with RouterLink
      Section("Navigation with RouterLink"),
      Para(
        "Use ",
        Code("RouterLink"),
        " instead of regular anchor tags for navigation:"
      ),
      CodeBlock(
        `h(RouterLink, { to: "/about" }, ["About Us"])`
      ),
      Para(
        Code("RouterLink"),
        " renders as an ",
        Code("<a>"),
        " tag but handles navigation without a full page reload. This keeps your application fast and preserves state."
      ),

      // Dynamic Routes
      Section("Dynamic Routes"),
      Para(
        "Many applications need URLs with variable parts, like user profiles (",
        Code("/users/123"),
        ") or product pages. Define these with parameters:"
      ),
      CodeBlock(
`const routes = [
  { path: "/", component: HomePage },
  { path: "/users/:id", component: UserProfile },
  { path: "/posts/:slug", component: BlogPost }
];`
      ),
      Para(
        "The ",
        Code(":id"),
        " and ",
        Code(":slug"),
        " parts are parameters - they match any value and capture it."
      ),

      // Accessing Route Parameters
      Subsection("Accessing Route Parameters"),
      Para(
        "In your component, access parameters through ",
        Code("this.appContext.router.params"),
        ":"
      ),
      CodeBlock(
`const UserProfile = defineComponent({
  onMounted() {
    // Get the user ID from the URL
    const userId = this.appContext.router.params.id;
    console.log("Loading user:", userId);
    // Fetch user data...
  },

  render() {
    return h("div", {}, [
      h("h1", {}, [\`User \${this.appContext.router.params.id}\`]),
      // Render user details...
    ]);
  }
});`
      ),
      Para(
        "If the URL is ",
        Code("/#/users/42"),
        ", then ",
        Code("this.appContext.router.params.id"),
        " is ",
        Code("\"42\""),
        "."
      ),

      // Query Parameters
      Section("Query Parameters"),
      Para(
        "Query strings (",
        Code("?search=hello&page=2"),
        ") are useful for optional filters:"
      ),
      CodeBlock(
`const SearchResults = defineComponent({
  render() {
    // Access query parameters
    const query = this.appContext.router.query.search || "";
    const page = this.appContext.router.query.page || "1";

    return h("div", {}, [
      h("h1", {}, [\`Results for "\${query}"\`]),
      h("p", {}, [\`Page \${page}\`])
    ]);
  }
});`
      ),

      // Creating Links with Query Parameters
      Subsection("Creating Links with Query Parameters"),
      CodeBlock(
        `h(RouterLink, { to: "/search?q=javascript&page=1" }, ["Search Results"])`
      ),

      // Anchor Fragments
      Section("Anchor Fragments"),
      Para("You can link to specific sections on a page using anchor fragments:"),
      CodeBlock(
`// Link to a section on another page
h(RouterLink, { to: "/about#team" }, ["Meet Our Team"])

// Link to a section on the current page
h(RouterLink, { to: "#features" }, ["Jump to Features"])`
      ),
      Para(
        "When navigating to a path with an anchor fragment, the router will scroll to the element with the matching ",
        Code("id"),
        " attribute:"
      ),
      CodeBlock(
`const AboutPage = defineComponent({
  render() {
    return h("div", {}, [
      h("h1", {}, ["About Us"]),
      h("section", { id: "team" }, [
        h("h2", {}, ["Our Team"])  // RouterLink to "/about#team" scrolls here
      ])
    ]);
  }
});`
      ),

      // Scroll Behavior
      Section("Scroll Behavior"),
      Para(
        "By default, the router scrolls to the top of the page when navigating to a new route. You can customize this behavior:"
      ),

      // Default (Scroll to Top)
      Subsection("Default (Scroll to Top)"),
      CodeBlock(
`const router = new HashRouter(routes);  // scrollBehavior defaults to 'top'
// or explicitly:
const router = new HashRouter(routes, { scrollBehavior: 'top' });`
      ),

      // Disable Scroll
      Subsection("Disable Scroll"),
      CodeBlock(
        `const router = new HashRouter(routes, { scrollBehavior: false });`
      ),

      // Custom Scroll Behavior
      Subsection("Custom Scroll Behavior"),
      Para(
        "For full control, provide a function that receives the ",
        Code("from"),
        " and ",
        Code("to"),
        " routes:"
      ),
      CodeBlock(
`const router = new HashRouter(routes, {
  scrollBehavior: (from, to) => {
    // Don't scroll when navigating within the same section
    if (from?.path?.startsWith('/docs') && to?.path?.startsWith('/docs')) {
      return null;  // Prevent scrolling
    }
    
    // Instant scroll for specific routes
    if (to?.path === '/top') {
      return { x: 0, y: 0, behavior: 'auto' };
    }
    
    // Default smooth scroll to top
    return { x: 0, y: 0, behavior: 'smooth' };
  }
});`
      ),
      Para(
        "Return ",
        Code("null"),
        " or ",
        Code("undefined"),
        " to prevent scrolling."
      ),

      // Route Guards
      Section("Route Guards"),
      Para("Sometimes you need to prevent navigation - for example, requiring authentication:"),
      CodeBlock(
`const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { 
    path: "/dashboard", 
    component: Dashboard,
    beforeEnter: () => {
      if (!isUserLoggedIn()) {
        return "/login";  // Redirect to login
      }
      return true;  // Allow navigation
    }
  }
];`
      ),
      Para(
        "The ",
        Code("beforeEnter"),
        " guard runs before the route is activated: return ",
        Code("true"),
        " to allow navigation, a path string to redirect, or ",
        Code("false"),
        " to cancel navigation."
      ),

      // Handling 404
      Section("Handling 404 (Not Found)"),
      Para("Add a catch-all route at the end of your routes array:"),
      CodeBlock(
`const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "*", component: NotFoundPage }  // Catches everything else
];

const NotFoundPage = defineComponent({
  render() {
    return h("div", {}, [
      h("h1", {}, ["404 - Page Not Found"]),
      h("p", {}, ["The page you're looking for doesn't exist."]),
      h(RouterLink, { to: "/" }, ["Go Home"])
    ]);
  }
});`
      ),
      Para(
        "The ",
        Code("*"),
        " path matches any URL that wasn't matched by previous routes."
      ),

      // Programmatic Navigation
      Section("Programmatic Navigation"),
      Para(
        "Sometimes you need to navigate from code, not from a link click. Every component has access to the router through ",
        Code("this.appContext.router"),
        "."
      ),

      // The navigateTo Method
      Subsection("The navigateTo Method"),
      Para(
        "Use ",
        Code("this.appContext.router.navigateTo(path)"),
        " to navigate programmatically:"
      ),
      CodeBlock(
`const LoginForm = defineComponent({
  state() {
    return { email: "", password: "" };
  },

  async handleSubmit(e) {
    e.preventDefault();
    
    const success = await login(this.state.email, this.state.password);
    
    if (success) {
      // Navigate programmatically using the router
      this.appContext.router.navigateTo("/dashboard");
    }
  },

  render() {
    return h("form", { on: { submit: (e) => this.handleSubmit(e) } }, [
      // form fields...
      h("button", { type: "submit" }, ["Login"])
    ]);
  }
});`
      ),

      // History Navigation
      Subsection("History Navigation"),
      Para("The router also provides methods to navigate through browser history:"),
      CodeBlock(
`// Go back one page
this.appContext.router.back();

// Go forward one page
this.appContext.router.forward();`
      ),

      // Summary
      Section("Summary"),
      Para("Betal-FE's router gives you everything you need for multi-page applications:"),
      BulletList(
        [Strong("Hash-based URLs"), " that work with any static host"],
        [Strong("RouterLink"), " for navigation without page reloads"],
        [Strong("Dynamic parameters"), " for user profiles, product pages, etc."],
        [Strong("Query strings"), " for search filters and optional data"],
        [Strong("Anchor fragments"), " for in-page navigation with smooth scrolling"],
        [Strong("Scroll behavior"), " with customizable scroll-to-top or custom positioning"],
        [Strong("Route guards"), " for authentication and authorization"],
        [Strong("Catch-all routes"), " for 404 pages"]
      ),

      // Navigation
      h("div", { class: "mt-10 flex gap-4" }, [
        h("a", {
          href: "#/docs/api-reference",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["API Reference →"])
      ])
    ]);
  }
});
