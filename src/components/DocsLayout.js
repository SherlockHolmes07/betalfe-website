import { defineComponent, h, hSlot, RouterLink } from 'betal-fe';

export const DocsLayout = defineComponent({
  state() {
    return {
      mobileMenuOpen: false
    };
  },

  toggleMobileMenu() {
    this.updateState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  },

  render() {
    const { mobileMenuOpen } = this.state;
    const currentPath = this.appContext?.router?.matchedRoute?.path || '/docs';

    return h("div", { class: "min-h-screen" }, [
      // Mobile menu button
      h("div", { class: "sticky top-0 z-40 flex items-center gap-4 border-b border-neutral-900 bg-black px-4 py-3 lg:hidden" }, [
        h("button", {
          class: "rounded-md border border-neutral-800 p-2 text-white hover:bg-neutral-900",
          on: {
            click: () => this.toggleMobileMenu()
          }
        }, [
          h("i", { class: "fa-solid fa-bars" })
        ]),
        h(RouterLink, { to: "/", class: "flex items-center" }, [
          h("img", { 
            src: "/BetalFe1.png",
            alt: "Betal-FE",
            class: "h-8"
          })
        ])
      ]),

      h("div", { class: "lg:flex" }, [
        // Sidebar
        h("aside", {
          class: `fixed top-0 bottom-0 h-full left-0 z-50 w-64 h-[calc(100vh-3.5rem)] transform border-r border-neutral-900 bg-black transition-transform lg:top-0 lg:h-screen lg:translate-x-0 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`
        }, [
          h("div", { class: "flex h-full flex-col overflow-hidden" }, [
            // Logo
            h("div", { class: "hidden border-b border-neutral-900 px-6 py-4 lg:block flex-shrink-0" }, [
              h(RouterLink, { to: "/", class: "flex items-center" }, [
                h("img", { 
                  src: "/BetalFe1.png",
                  alt: "Betal-FE",
                  class: "h-10"
                })
              ])
            ]),

            // Navigation
            h("nav", { class: "flex-1 overflow-y-auto px-4 py-6" }, [
              h("div", { class: "space-y-6" }, [
                // Getting Started
                h("div", {}, [
                  h("h3", { class: "mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500" }, ["Getting Started"]),
                  h("ul", { class: "space-y-1" }, [
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs",
                        class: 'block px-2 py-1.5 text-sm hover:text-white'
                      }, ["Introduction"])
                    ]),
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs/getting-started' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs/getting-started",
                        class: 'block px-2 py-1.5 text-sm hover:text-white'
                      }, ["Installation"])
                    ])
                  ])
                ]),

                // Core Concepts
                h("div", {}, [
                  h("h3", { class: "mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500" }, ["Core Concepts"]),
                  h("ul", { class: "space-y-1" }, [
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs/components' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs/components",
                        class: 'block px-2 py-1.5 text-sm hover:text-white'
                      }, ["Components"])
                    ]),
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs/state' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs/state",
                        class: `block px-2 py-1.5 text-sm hover:text-white`
                      }, ["Managing State"])
                    ]),
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs/events' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs/events",
                        class: `block px-2 py-1.5 text-sm hover:text-white`
                      }, ["Handling Events"])
                    ]),
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs/slots' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs/slots",
                        class: `block px-2 py-1.5 text-sm hover:text-white`
                      }, ["Slots"])
                    ])
                  ])
                ]),

                // Advanced
                h("div", {}, [
                  h("h3", { class: "mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500" }, ["Advanced"]),
                  h("ul", { class: "space-y-1" }, [
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs/routing' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs/routing",
                        class: `block px-2 py-1.5 text-sm hover:text-white`
                      }, ["Routing"])
                    ]),
                    h("li", {
                      class: `block rounded-md ${
                        currentPath === '/docs/api-reference' ? 'bg-neutral-900 text-primary font-semibold pl-1' : ''
                      }`
                    }, [
                      h(RouterLink, {
                        to: "/docs/api-reference",
                        class: `block px-2 py-1.5 text-sm hover:text-white`
                      }, ["API Reference"])
                    ])
                  ])
                ])
              ])
            ]),

            // Footer
            h("div", { class: "border-t border-neutral-900 px-6 py-4 flex-shrink-0" }, [
              h("div", { class: "flex items-center gap-4 text-xs text-neutral-500" }, [
                h("a", {
                  href: "https://github.com/SherlockHolmes07/betal-fe",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: "hover:text-neutral-300"
                }, ["GitHub"]),
                h("a", {
                  href: "https://www.npmjs.com/package/betal-fe",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: "hover:text-neutral-300"
                }, ["npm"])
              ])
            ])
          ])
        ]),

        // Overlay for mobile
        mobileMenuOpen ? h("div", {
          class: "fixed inset-0 z-30 bg-black/50 lg:hidden",
          on: {
            click: () => this.toggleMobileMenu()
          }
        }) : null,

        // Main content
        h("main", { class: "flex-1 lg:ml-64" }, [
          h("div", { class: "mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12" }, [
            // Content slot
            hSlot()
          ])
        ])
      ])
    ]);
  }
});
