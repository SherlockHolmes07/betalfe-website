import { defineComponent, h } from 'betal-fe';

export const LandingPage = defineComponent({
  onMounted() {
    // Apply Prism syntax highlighting after component mounts
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  },

  render() {
    return h("div", {}, [
      // Hero
      h("section", { class: "border-b border-neutral-900" }, [
        h("div", {
          class: "mx-auto grid min-w-0 max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24"
        }, [
          // Left: text
          h("div", { class: "min-w-0 w-full" }, [
            h("div", { class: "mb-4 flex flex-wrap items-center gap-2 sm:gap-3" }, [
              h("span", {
                class: "inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              }, ["Beta • Experimental"]),
              h("span", { class: "text-xs text-neutral-500" }, [
                "Built for you to break and rebuild."
              ])
            ]),

            h("h1", {
              class: "mb-4 break-words text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            }, [
              "A tiny frontend framework ",
              h("span", {
                class: "block break-words bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
              }, ["for experiments that matter."])
            ]),

            h("p", { class: "mb-5 max-w-xl text-xs leading-relaxed text-neutral-300 sm:mb-6 sm:text-sm md:text-base" }, [
              h("span", { class: "font-semibold" }, ["Betal-FE"]),
              " is your personal playground for building UIs: minimal runtime, clear mental model, and no enterprise fluff. Ship ideas fast, understand every layer."
            ]),

            // Install snippet
            h("div", {
              class: "mb-4 inline-flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-[10px] text-neutral-300 sm:mb-5 sm:px-3 sm:text-[11px]"
            }, [
              h("span", {
                class: "rounded-full bg-neutral-900 px-2 py-[2px] font-mono text-[10px]"
              }, ["npm"]),
              h("span", { class: "font-mono text-xs" }, ["npm i betal-fe"])
            ]),

            h("div", { class: "flex w-full flex-wrap items-center gap-3 sm:gap-4" }, [
              h("a", {
                href: "#/docs",
                class: "flex-1 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark sm:flex-none sm:px-6 sm:py-3"
              }, ["Read the docs"]),
              h("a", {
                href: "https://github.com/SherlockHolmes07/betal-fe",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "flex-1 rounded-full border border-neutral-800 px-5 py-2.5 text-center text-sm font-semibold text-neutral-200 hover:border-neutral-600 hover:bg-neutral-950 sm:flex-none sm:px-6 sm:py-3"
              }, ["View on GitHub"])
            ]),

            h("p", { class: "mt-5 text-xs text-neutral-500" }, [
              "APIs will move. Internals will change. Your understanding will grow with it."
            ])
          ]),

          // Right: code block
          h("div", { class: "relative min-w-0 w-full" }, [
            h("div", {
              class: "pointer-events-none absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/25 via-primary-dark/10 to-transparent blur-2xl sm:-inset-6 lg:-inset-10 sm:blur-3xl"
            }),

            h("div", {
              class: "min-w-0 w-full overflow-hidden rounded-xl border border-neutral-900 bg-black/80 shadow-2xl shadow-black sm:rounded-2xl"
            }, [
              // Code header
              h("div", {
                class: "flex items-center justify-between border-b border-neutral-900 bg-neutral-950 px-3 py-2 sm:px-4"
              }, [
                h("div", { class: "flex items-center gap-1.5 sm:gap-2" }, [
                  h("span", { class: "h-2 w-2 rounded-full bg-red-500/80 sm:h-2.5 sm:w-2.5" }),
                  h("span", { class: "h-2 w-2 rounded-full bg-yellow-500/80 sm:h-2.5 sm:w-2.5" }),
                  h("span", { class: "h-2 w-2 rounded-full bg-emerald-500/80 sm:h-2.5 sm:w-2.5" })
                ]),
                h("div", {
                  class: "rounded-full border border-neutral-800 px-2 py-0.5 text-[10px] text-neutral-300 sm:px-3 sm:py-1 sm:text-[11px]"
                }, ["counter.js"])
              ]),

              // Code
              h("pre", {
                class: "min-w-0 w-full overflow-x-auto bg-gradient-to-br from-black to-neutral-950 p-2.5 text-[10px] leading-relaxed text-neutral-100 sm:p-3 sm:text-[11px] md:p-4 md:text-xs"
              }, [
                h("code", { class: "language-javascript font-mono" }, [
`// Counter in Betal-FE
import { createBetalApp, defineComponent, h } from 'betal-fe';

const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  increment() {
    this.updateState({ 
      count: this.state.count + 1 
    });
  },

  render() {
    return h("button", {
      class: "px-4 py-2 rounded-lg bg-primary text-black font-medium",
      on: { click: () => this.increment() }
    }, [\`Count: \${this.state.count}\`]);
  }
});

createBetalApp(Counter).mount(document.getElementById('app'));`
                ])
              ])
            ]),

            h("div", { class: "mt-3 text-right text-[11px] text-neutral-500" }, [
              "Framework + lab for your own ideas."
            ])
          ])
        ])
      ]),

      // Features
      h("section", { id: "features", class: "border-b border-neutral-900" }, [
        h("div", { class: "mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-14" }, [
          h("div", {
            class: "mb-6 flex flex-col gap-2 sm:mb-8 md:flex-row md:items-end md:justify-between"
          }, [
            h("div", { class: "w-full" }, [
              h("h2", { class: "text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl" }, [
                "Built for tinkering, not committees."
              ]),
              h("p", { class: "mt-2 max-w-xl text-sm leading-relaxed text-neutral-300" }, [
                "Betal-FE is your experimental lab: minimal surface area, predictable behavior, and enough power to test wild ideas without a 200-page RFC."
              ])
            ])
          ]),

          h("div", { class: "grid w-full gap-4 sm:gap-6 md:grid-cols-3" }, [
            h("div", {
              class: "w-full rounded-xl border border-neutral-900 bg-neutral-950 p-5 sm:rounded-2xl sm:p-6"
            }, [
              h("div", {
                class: "mb-4 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-300"
              }, ["01 • Tiny core"]),
              h("h3", { class: "mb-2 text-base font-semibold text-white" }, [
                "Keep it in your head"
              ]),
              h("p", { class: "text-sm text-neutral-300" }, [
                "A small, opinionated core with Virtual DOM, components, and reactive state. Read the source, understand it, and bend it to your will."
              ])
            ]),

            h("div", {
              class: "w-full rounded-xl border border-neutral-900 bg-neutral-950 p-5 sm:rounded-2xl sm:p-6"
            }, [
              h("div", {
                class: "mb-4 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-300"
              }, ["02 • Reactivity"]),
              h("h3", { class: "mb-2 text-base font-semibold text-white" }, [
                "State without drama"
              ]),
              h("p", { class: "text-sm text-neutral-300" }, [
                "Simple state management with ",
                h("span", { class: "font-mono" }, ["updateState()"]),
                " and lifecycle hooks. No giant runtime, no magic just predictable updates."
              ])
            ]),

            h("div", {
              class: "w-full rounded-xl border border-neutral-900 bg-neutral-950 p-5 sm:rounded-2xl sm:p-6"
            }, [
              h("div", {
                class: "mb-4 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-300"
              }, ["03 • Framework as notebook"]),
              h("h3", { class: "mb-2 text-base font-semibold text-white" }, [
                "Breaks are a feature"
              ]),
              h("p", { class: "text-sm text-neutral-300" }, [
                "Betal-FE is meant to evolve. APIs may break; your intuition about frontends gets sharper every time you fix them."
              ])
            ])
          ])
        ])
      ]),

      // Why section
      h("section", { id: "why", class: "border-b border-neutral-900" }, [
        h("div", { class: "mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-14" }, [
          h("div", { class: "grid w-full gap-6 sm:gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:gap-10" }, [
            h("div", { class: "w-full" }, [
              h("h2", { class: "text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl" }, [
                "Why another frontend framework?"
              ]),
              h("p", { class: "mt-3 text-sm leading-relaxed text-neutral-300" }, [
                "Betal-FE is a lightweight framework that prioritizes simplicity and understanding over complexity. It's designed for developers who want to truly understand how their tools work, not just use them."
              ]),

              h("ul", { class: "mt-6 space-y-3 text-sm text-neutral-300" }, [
                h("li", { class: "flex gap-2 sm:gap-3" }, [
                  h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
                  h("span", { class: "break-words" }, [
                    h("span", { class: "font-semibold" }, ["Virtual DOM for efficient updates."]),
                    " Betal-FE uses a Virtual DOM that efficiently updates only what changed on the screen, keeping your apps fast."
                  ])
                ]),
                h("li", { class: "flex gap-2 sm:gap-3" }, [
                  h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
                  h("span", { class: "break-words" }, [
                    h("span", { class: "font-semibold" }, ["Component-based architecture."]),
                    " Build self-contained, reusable components with their own state, props, and lifecycle hooks that compose naturally."
                  ])
                ]),
                h("li", { class: "flex gap-2 sm:gap-3" }, [
                  h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
                  h("span", { class: "break-words" }, [
                    h("span", { class: "font-semibold" }, ["Complete feature set."]),
                    " Includes reactive state management, built-in routing, event system, and slots everything you need in one small package."
                  ])
                ])
              ])
            ]),

            // Philosophy card
            h("div", {
              class: "w-full rounded-xl border border-neutral-900 bg-neutral-950 p-5 sm:rounded-2xl sm:p-6"
            }, [
              h("h3", { class: "text-sm font-semibold text-white" }, [
                "Philosophy in one sentence"
              ]),
              h("p", { class: "mt-3 break-words text-sm text-neutral-300" }, [
                h("span", { class: "font-semibold text-primary" }, ["Betal-FE"]),
                " is intentionally small and simple. You can learn the entire API in an afternoon and start building real applications immediately. No magic, no hidden complexity."
              ]),
              h("p", { class: "mt-4 break-words text-xs text-neutral-500" }, [
                "Use it to understand how frontends actually work. If something explodes, open the file and fix it. That's the point."
              ])
            ])
          ])
        ])
      ]),

      // Docs section
      h("section", { id: "docs", class: "border-b border-neutral-900" }, [
        h("div", { class: "mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-14" }, [
          h("div", {
            class: "flex flex-col items-start justify-between gap-5 sm:gap-6 lg:flex-row lg:items-center"
          }, [
            h("div", { class: "w-full lg:w-auto" }, [
              h("h2", { class: "text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl" }, [
                "Documentation that respects you."
              ]),
              h("p", { class: "mt-3 max-w-xl break-words text-sm leading-relaxed text-neutral-300" }, [
                "The docs focus on internals: how components, state, routing, and rendering actually work. Less marketing, more understanding."
              ])
            ]),

            h("div", { class: "flex w-full flex-wrap gap-3 lg:w-auto" }, [
              h("a", {
                href: "#/docs",
                class: "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark sm:px-5 sm:py-2.5"
              }, ["Open docs"]),
              h("a", {
                href: "https://github.com/SherlockHolmes07/betal-fe/tree/main/examples",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "rounded-full border border-neutral-800 px-4 py-2 text-sm font-semibold text-neutral-200 hover:border-neutral-600 hover:bg-neutral-950 sm:px-5 sm:py-2.5"
              }, ["Explore examples"])
            ])
          ])
        ])
      ]),

      // GitHub / CTA strip
      h("section", { class: "border-b border-neutral-900" }, [
        h("div", { class: "mx-auto max-w-6xl px-4 py-8 sm:py-10" }, [
          h("div", {
            class: "flex flex-col items-start justify-between gap-4 rounded-xl border border-neutral-900 bg-gradient-to-r from-black via-neutral-950 to-black px-5 py-5 sm:rounded-2xl sm:px-6 sm:py-6 md:flex-row md:items-center"
          }, [
            h("div", { class: "w-full lg:w-auto" }, [
              h("h3", { class: "text-sm font-semibold text-white sm:text-base" }, [
                "Dive in, explore, and contribute."
              ]),
              h("p", { class: "mt-2 break-words text-sm leading-relaxed text-neutral-300" }, [
                "Open the repo, read the source, and bend Betal-FE into whatever shape you want."
              ])
            ]),
            h("div", { class: "flex w-full flex-wrap gap-3 lg:w-auto" }, [
              h("a", {
                href: "https://github.com/SherlockHolmes07/betal-fe",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-black hover:bg-white sm:flex-none sm:px-5"
              }, [
                h("span", {}, ["GitHub"]),
                h("span", { class: "text-lg" }, ["↗"])
              ]),
              h("a", {
                href: "https://www.npmjs.com/package/betal-fe",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-semibold text-neutral-100 hover:border-neutral-500 hover:bg-neutral-900 sm:flex-none sm:px-5"
              }, [
                h("span", {}, ["npm"]),
                h("span", { class: "text-lg" }, ["↗"])
              ])
            ])
          ])
        ])
      ])
    ]);
  }
});
