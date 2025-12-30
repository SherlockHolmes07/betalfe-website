import { defineComponent, h } from 'betal-fe';

export const RoutingPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Routing"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Most applications have multiple pages - a home page, an about page, a settings page, and so on. Betal-FE includes a built-in hash router that lets you create multi-page applications without server configuration."
      ]),

      // What is Hash Routing?
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["What is Hash Routing?"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Hash routing uses the URL fragment (the part after ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["#"]),
        ") to determine which page to show:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-bash text-sm" }, [
`https://yourapp.com/#/          → Home page
https://yourapp.com/#/about     → About page
https://yourapp.com/#/users/123 → User profile page`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The browser doesn't send the hash to the server, so your entire app can be served from a single HTML file. This makes deployment simple - any static file host works."
      ]),

      // Setting Up the Router
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Setting Up the Router"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Import the router class and components:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { 
  createBetalApp, 
  defineComponent, 
  h,
  HashRouter,
  RouterLink,
  RouterOutlet
} from "betal-fe";`
          ])
        ])
      ]),

      // Creating Your App Component
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Creating Your App Component"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The main App component uses ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["RouterLink"]),
        " for navigation and ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["RouterOutlet"]),
        " to render the current page:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["RouterOutlet"]),
        " component automatically renders whichever component matches the current URL."
      ]),

      // Defining Page Components
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Defining Page Components"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Each page is just a regular component:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),

      // Navigation with RouterLink
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Navigation with RouterLink"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Use ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["RouterLink"]),
        " instead of regular anchor tags for navigation:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
            `h(RouterLink, { to: "/about" }, ["About Us"])`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["RouterLink"]),
        " renders as an ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["<a>"]),
        " tag but handles navigation without a full page reload. This keeps your application fast and preserves state."
      ]),

      // Dynamic Routes
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Dynamic Routes"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Many applications need URLs with variable parts, like user profiles (",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["/users/123"]),
        ") or product pages. Define these with parameters:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const routes = [
  { path: "/", component: HomePage },
  { path: "/users/:id", component: UserProfile },
  { path: "/posts/:slug", component: BlogPost }
];`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, [":id"]),
        " and ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, [":slug"]),
        " parts are parameters - they match any value and capture it."
      ]),

      // Accessing Route Parameters
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Accessing Route Parameters"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "In your component, access parameters through ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.appContext.router.params"]),
        ":"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "If the URL is ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["/#/users/42"]),
        ", then ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.appContext.router.params.id"]),
        " is ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["\"42\""]),
        "."
      ]),

      // Query Parameters
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Query Parameters"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Query strings (",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["?search=hello&page=2"]),
        ") are useful for optional filters:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),

      // Creating Links with Query Parameters
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Creating Links with Query Parameters"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
            `h(RouterLink, { to: "/search?q=javascript&page=1" }, ["Search Results"])`
          ])
        ])
      ]),

      // Anchor Fragments
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Anchor Fragments"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["You can link to specific sections on a page using anchor fragments:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Link to a section on another page
h(RouterLink, { to: "/about#team" }, ["Meet Our Team"])

// Link to a section on the current page
h(RouterLink, { to: "#features" }, ["Jump to Features"])`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "When navigating to a path with an anchor fragment, the router will scroll to the element with the matching ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["id"]),
        " attribute:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),

      // Scroll Behavior
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Scroll Behavior"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "By default, the router scrolls to the top of the page when navigating to a new route. You can customize this behavior:"
      ]),

      // Default (Scroll to Top)
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Default (Scroll to Top)"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const router = new HashRouter(routes);  // scrollBehavior defaults to 'top'
// or explicitly:
const router = new HashRouter(routes, { scrollBehavior: 'top' });`
          ])
        ])
      ]),

      // Disable Scroll
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Disable Scroll"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
            `const router = new HashRouter(routes, { scrollBehavior: false });`
          ])
        ])
      ]),

      // Custom Scroll Behavior
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Custom Scroll Behavior"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "For full control, provide a function that receives the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["from"]),
        " and ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["to"]),
        " routes:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Return ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["null"]),
        " or ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["undefined"]),
        " to prevent scrolling."
      ]),

      // Route Guards
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Route Guards"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Sometimes you need to prevent navigation - for example, requiring authentication:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["beforeEnter"]),
        " guard runs before the route is activated: return ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["true"]),
        " to allow navigation, a path string to redirect, or ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["false"]),
        " to cancel navigation."
      ]),

      // Handling 404
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Handling 404 (Not Found)"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Add a catch-all route at the end of your routes array:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["*"]),
        " path matches any URL that wasn't matched by previous routes."
      ]),

      // Programmatic Navigation
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Programmatic Navigation"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Sometimes you need to navigate from code, not from a link click. Every component has access to the router through ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.appContext.router"]),
        "."
      ]),

      // The navigateTo Method
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["The navigateTo Method"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Use ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.appContext.router.navigateTo(path)"]),
        " to navigate programmatically:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),

      // History Navigation
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["History Navigation"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["The router also provides methods to navigate through browser history:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Go back one page
this.appContext.router.back();

// Go forward one page
this.appContext.router.forward();`
          ])
        ])
      ]),

      // Summary
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Summary"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Betal-FE's router gives you everything you need for multi-page applications:"]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Hash-based URLs"]), " that work with any static host"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["RouterLink"]), " for navigation without page reloads"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Dynamic parameters"]), " for user profiles, product pages, etc."])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Query strings"]), " for search filters and optional data"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Anchor fragments"]), " for in-page navigation with smooth scrolling"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Scroll behavior"]), " with customizable scroll-to-top or custom positioning"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Route guards"]), " for authentication and authorization"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Catch-all routes"]), " for 404 pages"])
        ])
      ]),

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
