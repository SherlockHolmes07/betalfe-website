import { createBetalApp, defineComponent, h, HashRouter, RouterOutlet, RouterLink } from 'betal-fe';
import './style.css';
import { LandingPage } from './components/LandingPage.js';
import { DocsLayout } from './components/DocsLayout.js';
import { IntroductionPage } from './pages/docs/IntroductionPage.js';
import { GettingStartedPage } from './pages/docs/GettingStartedPage.js';
import { ComponentsPage } from './pages/docs/ComponentsPage.js';
import { StatePage } from './pages/docs/StatePage.js';
import { EventsPage } from './pages/docs/EventsPage.js';
import { SlotsPage } from './pages/docs/SlotsPage.js';
import { RoutingPage } from './pages/docs/RoutingPage.js';
import { ApiReferencePage } from './pages/docs/ApiReferencePage.js';

// Wrap doc pages in DocsLayout
const wrapWithLayout = (PageComponent) => {
  return defineComponent({
    render() {
      return h(DocsLayout, {}, [
        h(PageComponent)
      ]);
    }
  });
};

const routes = [
  { path: "/", component: LandingPage },
  { path: "/docs", component: wrapWithLayout(IntroductionPage) },
  { path: "/docs/getting-started", component: wrapWithLayout(GettingStartedPage) },
  { path: "/docs/components", component: wrapWithLayout(ComponentsPage) },
  { path: "/docs/state", component: wrapWithLayout(StatePage) },
  { path: "/docs/events", component: wrapWithLayout(EventsPage) },
  { path: "/docs/slots", component: wrapWithLayout(SlotsPage) },
  { path: "/docs/routing", component: wrapWithLayout(RoutingPage) },
  { path: "/docs/api-reference", component: wrapWithLayout(ApiReferencePage) }
];

const router = new HashRouter(routes, {
  scrollBehavior: 'top'
});

// Navbar component
const Navbar = defineComponent({
  state() {
    return {
      currentPath: '/'
    };
  },

  onMounted() {
    // Subscribe to router changes
    if (this.appContext?.router) {
      this.routerHandler = () => {
        this.updateState({ currentPath: this.appContext.router.matchedRoute?.path || '/' });
      };
      this.appContext.router.subscribe(this.routerHandler);
      // Set initial path
      this.updateState({ currentPath: this.appContext.router.matchedRoute?.path || '/' });
    }
  },

  onUnmounted() {
    // Cleanup subscription
    if (this.appContext?.router && this.routerHandler) {
      this.appContext.router.unsubscribe(this.routerHandler);
    }
  },

  render() {
    const currentPath = this.state.currentPath;
    const isDocsPage = currentPath.startsWith('/docs');
    
    return h("header", { 
      class: "sticky top-0 z-40 border-b border-neutral-900 bg-black/90 backdrop-blur" 
    }, [
      h("div", { 
        class: "mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:py-3" 
      }, [
        // Logo + Brand
        h(RouterLink, { 
          to: "/",
          class: `flex items-center gap-3 ${isDocsPage ? 'hidden' : ''}`
        }, [
          h("img", { 
            src: "/BetalFe1.png",
            alt: "Betal-FE",
            class: "h-8 sm:h-10"
          })
        ]),
        
        // Desktop nav
        h("nav", { 
          class: "hidden items-center gap-7 ml-auto mr-auto text-sm text-neutral-400 md:flex" 
        }, [
          h(RouterLink, { to: "/", class: `hover:text-white ${currentPath === '/' ? 'text-primary font-semibold' : ''}` }, ["Home"]),
          h(RouterLink, { to: "/#features", class: "hover:text-white" }, ["Features"]),
          h(RouterLink, { to: "/#why", class: "hover:text-white" }, ["Why?"]),
          h(RouterLink, { to: "/docs", class: `hover:text-white ${isDocsPage ? 'text-primary font-semibold' : ''}` }, ["Docs"]),
          h("a", { href: "https://github.com/SherlockHolmes07/betal-fe", target: "_blank", rel: "noopener noreferrer", class: "hover:text-white" }, ["GitHub"])
        ]),
        
        // CTA
        h(RouterLink, {
          to: "/docs",
          class: "hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark md:inline-block"
        }, ["Get Started"])
      ])
    ]);
  }
});

// Footer component
const Footer = defineComponent({
  render() {
    return h("footer", { class: "border-t border-neutral-900" }, [
      h("div", {
        class: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-neutral-500 sm:gap-4 sm:py-6 md:flex-row"
      }, [
        h("p", {}, [
          "© ",
          h("span", {}, [new Date().getFullYear().toString()]),
          " Betal-FE. Built as an experiment."
        ]),
        h("div", { class: "flex gap-4" }, [
          h("a", { href: "https://github.com/SherlockHolmes07/betal-fe/blob/main/LICENSE", target: "_blank", rel: "noopener noreferrer", class: "hover:text-neutral-200" }, ["License"])
        ])
      ])
    ]);
  }
});

const App = defineComponent({
  render() {
    return h("div", { class: "overflow-x-hidden" }, [
      h(Navbar),
      h(RouterOutlet),
      h(Footer)
    ]);
  }
});

// Mount app with router in options
createBetalApp(App, {}, { router }).mount(document.getElementById('app'));
