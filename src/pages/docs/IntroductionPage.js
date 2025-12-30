import { defineComponent, h } from 'betal-fe';

export const IntroductionPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Introduction"]),
      
      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["What is Betal-FE?"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Betal-FE is a lightweight JavaScript framework for building user interfaces. If you've ever wanted to create interactive web applications without the complexity of larger frameworks, Betal-FE is designed for you."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "At its core, Betal-FE helps you build ",
        h("strong", { class: "font-semibold text-white" }, ["components"]),
        " - self-contained pieces of UI that manage their own state and can be composed together to create complex applications."
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["Why Betal-FE?"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Modern web applications need to update the screen dynamically based on user interactions, data changes, and more. Doing this with plain JavaScript becomes messy quickly - you end up with spaghetti code that's hard to maintain."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Betal-FE solves this by providing:"
      ]),

      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["A Virtual DOM"]),
            " that efficiently updates only what changed on the screen"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["Reactive state management"]),
            " that automatically re-renders your UI when data changes"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["A component model"]),
            " that helps you organize code into reusable pieces"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["Built-in routing"]),
            " for creating multi-page applications"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["An event system"]),
            " for components to communicate with each other"
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The framework is intentionally small and simple. You can learn the entire API in an afternoon and start building real applications immediately."
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["How This Documentation is Organized"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This documentation is designed to take you from knowing nothing about Betal-FE to being able to build complete applications:"
      ]),

      h("ol", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["1."]),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["Getting Started"]),
            " - Install Betal-FE and create your first application"
          ])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["2."]),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["Components"]),
            " - Learn how to build and compose UI components"
          ])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["3."]),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["Managing State"]),
            " - Understand how to handle data that changes over time"
          ])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["4."]),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["Handling Events"]),
            " - Make your application interactive"
          ])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["5."]),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["Routing"]),
            " - Create multi-page applications"
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Each section builds on the previous one, so we recommend reading them in order if you're new to the framework."
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["Prerequisites"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Before diving in, you should be comfortable with:"
      ]),

      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["HTML and CSS"]),
            " - You'll be creating web pages"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["JavaScript fundamentals"]),
            " - Variables, functions, arrays, objects"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["ES6 features"]),
            " - Arrow functions, destructuring, spread operator, classes"
          ])
        ])
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["A Quick Taste"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Here's what a simple Betal-FE component looks like:"
      ]),

      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { createBetalApp, defineComponent, h } from 'betal-fe';

const HelloWorld = defineComponent({
  render() {
    return h("h1", {}, ["Hello, World!"]);
  }
});

createBetalApp(HelloWorld).mount(document.getElementById('app'));`
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Don't worry if this looks unfamiliar - we'll explain every part of it in the coming sections. The important thing to notice is that the code is declarative: you describe ",
        h("em", { class: "italic" }, ["what"]),
        " you want to see on screen, and Betal-FE figures out ",
        h("em", { class: "italic" }, ["how"]),
        " to make it happen."
      ]),

      h("div", { class: "mt-8 flex gap-4" }, [
        h("a", {
          href: "#/docs/getting-started",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Get Started →"])
      ])
    ]);
  }
});
