import { defineComponent, h } from 'betal-fe';

export const ApiReferencePage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["API Reference"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This is a complete reference of all functions and components exported by Betal-FE."
      ]),

      // createBetalApp
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["createBetalApp"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Creates and returns an application instance."]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { createBetalApp } from "betal-fe";

const app = createBetalApp(RootComponent);`
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Parameters"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Parameter"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["RootComponent"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["Component"]),
              h("td", { class: "py-2 text-neutral-300" }, ["The root component to render"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["props"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Props to pass to root component (optional)"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["options"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Options like router configuration (optional)"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Returns"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["An app instance with the following methods:"]),

      h("h4", { class: "mt-4 text-lg font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-base font-mono text-primary" }, ["app.mount(container)"])
      ]),
      h("p", { class: "mt-2 leading-7 text-neutral-300" }, ["Mounts the application to a DOM element."]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const app = createBetalApp(App);
app.mount(document.getElementById("app"));`
          ])
        ])
      ]),

      h("h4", { class: "mt-4 text-lg font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-base font-mono text-primary" }, ["app.unmount()"])
      ]),
      h("p", { class: "mt-2 leading-7 text-neutral-300" }, ["Unmounts the application and cleans up resources."]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // defineComponent
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["defineComponent"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Defines a component with lifecycle, state, and render logic."]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { defineComponent } from "betal-fe";

const MyComponent = defineComponent({
  // Component definition
});`
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Component Definition Object"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Property"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["state"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["function"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Returns initial local state object"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["render"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["function"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Returns virtual DOM tree"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["onMounted"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["function"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Called after component is added to DOM"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["onUnmounted"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["function"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Called before component is removed"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["onStateChange"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["function"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Called after local state updates"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["onPropsChange"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["function"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Called when props change"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Instance Properties"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Available via ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this"]),
        " inside component methods:"
      ]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Property"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["this.props"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Props passed by parent"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["this.state"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Current local state"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["this.appContext"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Application context (contains router)"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Instance Methods"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Method"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["this.updateState(newState)"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Merges new state and triggers re-render"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["this.emit(eventName, payload)"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Emits custom event to parent"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Example"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  onMounted() {
    console.log("Counter mounted");
  },

  onUnmounted() {
    console.log("Counter will unmount");
  },

  onStateChange() {
    console.log("Count changed to:", this.state.count);
  },

  increment() {
    this.updateState({ count: this.state.count + 1 });
  },

  render() {
    return h("div", {}, [
      h("p", {}, [\`Count: \${this.state.count}\`]),
      h("button", { on: { click: () => this.increment() } }, ["+"])
    ]);
  }
});`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // h function
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["h"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Creates a virtual DOM node (element, component, or text)."]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [`import { h } from "betal-fe";`])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Signature"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [`h(tag, props, children)`])
        ])
      ]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Parameter"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["tag"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string | Component"]),
              h("td", { class: "py-2 text-neutral-300" }, ["HTML tag name or component"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["props"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Attributes, event handlers, etc."])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["children"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["array"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Child nodes"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Props Object"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Property"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["class"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string"]),
              h("td", { class: "py-2 text-neutral-300" }, ["CSS class(es)"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["id"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Element ID"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["style"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Inline styles"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["on"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Event handlers"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["key"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string | number"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Unique key for lists"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Creating Elements"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Simple element
h("div", {}, ["Hello"])

// With attributes
h("input", { type: "text", placeholder: "Enter name" })

// With class and style
h("div", { 
  class: "container active",
  style: { padding: "20px", color: "blue" }
}, [
  "Styled content"
])

// With events
h("button", {
  on: { click: () => console.log("Clicked!") }
}, ["Click me"])`
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Creating Component Instances"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Component with props
h(MyComponent, { title: "Hello", count: 5 })

// Component with children (for slots)
h(Card, {}, [
  h("h2", {}, ["Title"]),
  h("p", {}, ["Content"])
])

// Component with event listeners
h(TodoItem, {
  text: "Buy groceries",
  on: { delete: (id) => handleDelete(id) }
})`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // hFragment
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["hFragment"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Creates a fragment - a wrapper that renders children without an extra DOM element."
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { hFragment } from "betal-fe";

const ListItems = defineComponent({
  render() {
    // Renders li elements without a wrapper
    return hFragment([
      h("li", {}, ["Item 1"]),
      h("li", {}, ["Item 2"]),
      h("li", {}, ["Item 3"])
    ]);
  }
});

// Use inside a ul
h("ul", {}, [
  h(ListItems)
])
// Renders: <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // hString
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["hString"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Creates a text node from a string. Usually you don't need this since strings in children arrays are automatically converted."
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { hString } from "betal-fe";

// These are equivalent:
h("p", {}, ["Hello"])
h("p", {}, [hString("Hello")])`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // hSlot
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["hSlot"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Renders slotted content passed as children to a component."]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { hSlot } from "betal-fe";

hSlot()           // Renders children passed to component
hSlot([fallback]) // With fallback content if no children provided`
          ])
        ])
      ]),
      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Example"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Card = defineComponent({
  render() {
    return h("div", { class: "card" }, [
      h("div", { class: "card-body" }, [
        hSlot([  // Fallback content
          h("p", {}, ["No content provided."])
        ])
      ])
    ]);
  }
});

// Usage with content
h(Card, {}, [
  h("h2", {}, ["Title"]),
  h("p", {}, ["Card content here."])
])

// Usage without content (shows fallback)
h(Card)`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // HashRouter
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["HashRouter"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Class that provides hash-based routing. Create an instance and pass it to ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["createBetalApp"]),
        " via the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["options"]),
        " parameter."
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { HashRouter, createBetalApp } from "betal-fe";

const router = new HashRouter(routes);
const app = createBetalApp(App, {}, { router });
app.mount(document.getElementById("app"));`
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Constructor"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [`new HashRouter(routes, options)`])
        ])
      ]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Parameter"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["routes"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["array"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Array of route definitions"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["options"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Router options (optional)"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Options"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Property"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Default"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["scrollBehavior"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string | boolean | function"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["'top'"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Controls scroll behavior on navigation"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Route Definition"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Property"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["path"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string"]),
              h("td", { class: "py-2 text-neutral-300" }, ["URL path pattern"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["component"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["Component"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Component to render"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["beforeEnter"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["function"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Route-specific guard (optional)"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["redirect"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Redirect path (optional)"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Path Patterns"]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["/"]), " - Exact match"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["/users/:id"]), " - Dynamic parameter"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["/posts/:year/:month"]), " - Multiple parameters"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["*"]), " - Catch-all (404)"])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Methods"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Method"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["navigateTo(path)"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Navigate to a specific path"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["back()"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Go back in browser history"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["forward()"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Go forward in browser history"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Properties"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Property"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["matchedRoute"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Currently matched route"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["params"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Current route parameters"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["query"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["object"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Current query string parameters"])
            ])
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // RouterLink
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["RouterLink"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Component for navigation links. Renders an ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["<a>"]),
        " element that prevents default navigation and uses the router's ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["navigateTo"]),
        " method."
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Props"]),
      h("div", { class: "mt-4 overflow-x-auto" }, [
        h("table", { class: "min-w-full text-sm" }, [
          h("thead", {}, [
            h("tr", { class: "border-b border-neutral-800" }, [
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Prop"]),
              h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, ["Type"]),
              h("th", { class: "py-2 text-left font-semibold text-white" }, ["Description"])
            ])
          ]),
          h("tbody", {}, [
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["to"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Target path (can include anchor fragments)"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["class"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["string"]),
              h("td", { class: "py-2 text-neutral-300" }, ["CSS classes to apply"])
            ]),
            h("tr", { class: "border-b border-neutral-800/50" }, [
              h("td", { class: "py-2 pr-4 font-mono text-primary" }, ["...rest"]),
              h("td", { class: "py-2 pr-4 text-neutral-400" }, ["any"]),
              h("td", { class: "py-2 text-neutral-300" }, ["Any other attributes passed to anchor"])
            ])
          ])
        ])
      ]),

      h("h3", { class: "mt-6 text-xl font-semibold text-white" }, ["Example"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h(RouterLink, { to: "/about" }, ["About Us"])
h(RouterLink, { to: "/users/123" }, ["User Profile"])
h(RouterLink, { to: "/search?q=hello" }, ["Search"])

// With anchor fragments
h(RouterLink, { to: "/about#team" }, ["Meet the Team"])
h(RouterLink, { to: "#features" }, ["Jump to Features"])

// With custom styling
h(RouterLink, { 
  to: "/about", 
  class: "nav-link active"
}, ["About"])`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // RouterOutlet
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["RouterOutlet"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Component that renders the matched route's component. Must be used with a HashRouter passed to ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["createBetalApp"]),
        " options."
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const App = defineComponent({
  render() {
    return h("div", {}, [
      h("header", {}, ["My App"]),
      h(RouterOutlet),  // Matched component renders here
      h("footer", {}, ["© 2024"])
    ]);
  }
});`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // nextTick
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [
        h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["nextTick"])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Schedules code to run after the next DOM update. Returns a Promise that resolves after updates are flushed."
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { nextTick } from "betal-fe";

const InputWithFocus = defineComponent({
  state() {
    return { showInput: false };
  },

  async showAndFocus() {
    this.updateState({ showInput: true });
    
    // Wait for DOM to update
    await nextTick();
    
    // Now the input exists in the DOM
    document.getElementById("my-input").focus();
  },

  render() {
    return h("div", {}, [
      this.state.showInput
        ? h("input", { id: "my-input" })
        : h("button", { on: { click: () => this.showAndFocus() } }, ["Show Input"])
    ]);
  }
});`
          ])
        ])
      ]),

      h("hr", { class: "my-10 border-neutral-800" }),

      // Complete Import
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Complete Import"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["All exports from Betal-FE:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import {
  createBetalApp,
  defineComponent,
  h,
  hFragment,
  hString,
  hSlot,
  HashRouter,
  RouterLink,
  RouterOutlet,
  nextTick
} from "betal-fe";`
          ])
        ])
      ])
    ]);
  }
});
