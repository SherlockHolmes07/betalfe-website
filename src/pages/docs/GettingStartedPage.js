import { defineComponent, h } from 'betal-fe';

export const GettingStartedPage = defineComponent({
  onMounted() {
    // Apply Prism syntax highlighting after component mounts
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Getting Started"]),
      
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This guide will walk you through setting up Betal-FE and creating your first application. By the end, you'll understand the basic structure of a Betal-FE app and be ready to build more complex interfaces."
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["Installation"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Betal-FE is distributed through npm. Open your terminal and run:"
      ]),

      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-bash text-sm" }, ["npm install betal-fe"])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "That's it! Betal-FE has minimal dependencies and installs quickly."
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["Setting Up Your Project"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Let's create a simple project from scratch. First, create a new folder and initialize it:"
      ]),

      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-bash text-sm" }, [
`mkdir my-first-app
cd my-first-app
npm init -y
npm install betal-fe`
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Now create two files in your project folder:"
      ]),

      h("p", { class: "mt-6 text-sm font-semibold text-white" }, ["index.html"]),
      h("div", { class: "mt-2 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-html text-sm" }, [
`<!DOCTYPE html>
<html>
<head>
  <title>My First Betal-FE App</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./app.js"></script>
</body>
</html>`
          ])
        ])
      ]),

      h("p", { class: "mt-6 text-sm font-semibold text-white" }, ["app.js"]),
      h("div", { class: "mt-2 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { createBetalApp, defineComponent, h } from 'betal-fe';

const App = defineComponent({
  render() {
    return h("h1", {}, ["Hello from Betal-FE!"]);
  }
});

createBetalApp(App).mount(document.getElementById("app"));`
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "To see your app, you'll need a development server. We recommend Vite for its simplicity:"
      ]),

      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-bash text-sm" }, [
`npm install -D vite
npx vite`
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Open your browser to the URL shown in the terminal (usually ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["http://localhost:5173"]),
        "), and you should see \"Hello from Betal-FE!\" on the screen."
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["Understanding Your First App"]),
      
      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["The Import Statement"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
            "import { createBetalApp, defineComponent, h } from 'betal-fe';"
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This brings in three essential functions from Betal-FE:"
      ]),

      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-mono text-sm font-semibold text-white" }, ["defineComponent"]),
            " - Creates a new component"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-mono text-sm font-semibold text-white" }, ["h"]),
            " - Creates virtual DOM elements (the \"h\" stands for \"hyperscript\")"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-mono text-sm font-semibold text-white" }, ["createBetalApp"]),
            " - Initializes your application"
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["The h() Function"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["h"]),
        " function is how you describe UI elements. It takes three arguments:"
      ]),

      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
            "h(tag, props, children)"
          ])
        ])
      ]),

      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["tag"]),
            " - What HTML element to create (like \"div\", \"h1\", \"button\")"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["props"]),
            " - An object of attributes and event handlers"
          ])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [
            h("strong", { class: "font-semibold text-white" }, ["children"]),
            " - An array of child elements or text"
          ])
        ])
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["Adding Interactivity"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "A static \"Hello World\" is nice, but let's make something interactive. Let's create a button that counts how many times it's been clicked."
      ]),

      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { createBetalApp, defineComponent, h } from 'betal-fe';

const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  render() {
    return h("div", {}, [
      h("p", {}, [\`You clicked \${this.state.count} times\`]),
      h("button", {
        on: { click: () => this.updateState({ count: this.state.count + 1 }) }
      }, ["Click me"])
    ]);
  }
});

createBetalApp(Counter).mount(document.getElementById("app"));`
          ])
        ])
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Save and look at your browser - you now have a working counter! Click the button and watch the number increase."
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["What's New Here?"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        h("strong", { class: "font-semibold text-white" }, ["State"]),
        " - We added a ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["state"]),
        " method that returns an object with our initial data. State is data that can change over time and affects what we display."
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        h("strong", { class: "font-semibold text-white" }, ["Accessing State"]),
        " - Inside ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["render"]),
        ", we use ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.state.count"]),
        " to read the current value."
      ]),

      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        h("strong", { class: "font-semibold text-white" }, ["Updating State"]),
        " - When the button is clicked, we call ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.updateState()"]),
        " with the new value. This tells Betal-FE that something changed, and it automatically re-renders the component."
      ]),

      h("h2", { class: "mt-8 text-2xl font-semibold text-white" }, ["What's Next?"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "You now understand the basics of Betal-FE. In the next section, we'll dive deeper into Components - learning how to break your UI into reusable pieces, pass data between components, and use lifecycle hooks."
      ]),

      h("div", { class: "mt-8 flex gap-4" }, [
        h("a", {
          href: "#/docs/components",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Components →"])
      ])
    ]);
  }
});
