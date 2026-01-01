import { defineComponent, h } from 'betal-fe';
import { Section, Subsection, Para, Code, CodeBlock, BulletList } from '../../components/docs/DocElements.js';

// Additional DocElements for this page
const Title = (text) => h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, [text]);
const SubSubsection = (content) => h("h4", { class: "mt-4 text-lg font-semibold text-white" }, [content]);
const Divider = () => h("hr", { class: "my-10 border-neutral-800" });
const Table = (headers, rows) => h("div", { class: "mt-4 overflow-x-auto" }, [
  h("table", { class: "min-w-full text-sm" }, [
    h("thead", {}, [
      h("tr", { class: "border-b border-neutral-800" }, 
        headers.map(header => h("th", { class: "py-2 pr-4 text-left font-semibold text-white" }, [header]))
      )
    ]),
    h("tbody", {}, 
      rows.map(row => h("tr", { class: "border-b border-neutral-800/50" }, 
        row.map((cell, i) => h("td", { 
          class: i === 0 ? "py-2 pr-4 font-mono text-primary" : 
                 (i === 1 && row.length === 3) ? "py-2 pr-4 text-neutral-400" : 
                 (i === 1 && row.length === 2) ? "py-2 text-neutral-300" :
                 (i === 2 && row.length === 4) ? "py-2 pr-4 text-neutral-400" :
                 "py-2 text-neutral-300" 
        }, [cell]))
      ))
    )
  ])
]);

export const ApiReferencePage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      Title("API Reference"),
      Para("This is a complete reference of all functions and components exported by Betal-FE."),

      // createBetalApp
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["createBetalApp"])),
      Para("Creates and returns an application instance."),
      CodeBlock(`import { createBetalApp } from "betal-fe";

const app = createBetalApp(RootComponent);`),

      Subsection("Parameters"),
      Table(
        ["Parameter", "Type", "Description"],
        [
          ["RootComponent", "Component", "The root component to render"],
          ["props", "object", "Props to pass to root component (optional)"],
          ["options", "object", "Options like router configuration (optional)"]
        ]
      ),

      Subsection("Returns"),
      Para("An app instance with the following methods:"),

      SubSubsection(Code("app.mount(container)")),
      Para("Mounts the application to a DOM element."),
      CodeBlock(`const app = createBetalApp(App);
app.mount(document.getElementById("app"));`),

      SubSubsection(Code("app.unmount()")),
      Para("Unmounts the application and cleans up resources."),

      Divider(),

      // defineComponent
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["defineComponent"])),
      Para("Defines a component with lifecycle, state, and render logic."),
      CodeBlock(`import { defineComponent } from "betal-fe";

const MyComponent = defineComponent({
  // Component definition
});`),

      Subsection("Component Definition Object"),
      Table(
        ["Property", "Type", "Description"],
        [
          ["state", "function", "Returns initial local state object"],
          ["render", "function", "Returns virtual DOM tree"],
          ["onMounted", "function", "Called after component is added to DOM"],
          ["onUnmounted", "function", "Called before component is removed"],
          ["onStateChange", "function", "Called after local state updates"],
          ["onPropsChange", "function", "Called when props change"]
        ]
      ),

      Subsection("Instance Properties"),
      Para("Available via ", Code("this"), " inside component methods:"),
      Table(
        ["Property", "Type", "Description"],
        [
          ["this.props", "object", "Props passed by parent"],
          ["this.state", "object", "Current local state"],
          ["this.appContext", "object", "Application context (contains router)"]
        ]
      ),

      Subsection("Instance Methods"),
      Table(
        ["Method", "Description"],
        [
          ["this.updateState(newState)", "Merges new state and triggers re-render"],
          ["this.emit(eventName, payload)", "Emits custom event to parent"]
        ]
      ),

      Subsection("Example"),
      CodeBlock(`const Counter = defineComponent({
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
});`),

      Divider(),

      // h function
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["h"])),
      Para("Creates a virtual DOM node (element, component, or text)."),
      CodeBlock(`import { h } from "betal-fe";`),

      Subsection("Signature"),
      CodeBlock(`h(tag, props, children)`),
      Table(
        ["Parameter", "Type", "Description"],
        [
          ["tag", "string | Component", "HTML tag name or component"],
          ["props", "object", "Attributes, event handlers, etc."],
          ["children", "array", "Child nodes"]
        ]
      ),

      Subsection("Props Object"),
      Table(
        ["Property", "Type", "Description"],
        [
          ["class", "string", "CSS class(es)"],
          ["id", "string", "Element ID"],
          ["style", "object", "Inline styles"],
          ["on", "object", "Event handlers"],
          ["key", "string | number", "Unique key for lists"]
        ]
      ),

      Subsection("Creating Elements"),
      CodeBlock(`// Simple element
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
}, ["Click me"])`),

      Subsection("Creating Component Instances"),
      CodeBlock(`// Component with props
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
})`),

      Divider(),

      // hFragment
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["hFragment"])),
      Para("Creates a fragment - a wrapper that renders children without an extra DOM element."),
      CodeBlock(`import { hFragment } from "betal-fe";

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
// Renders: <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>`),

      Divider(),

      // hString
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["hString"])),
      Para("Creates a text node from a string. Usually you don't need this since strings in children arrays are automatically converted."),
      CodeBlock(`import { hString } from "betal-fe";

// These are equivalent:
h("p", {}, ["Hello"])
h("p", {}, [hString("Hello")])`),

      Divider(),

      // hSlot
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["hSlot"])),
      Para("Renders slotted content passed as children to a component."),
      CodeBlock(`import { hSlot } from "betal-fe";

hSlot()           // Renders children passed to component
hSlot([fallback]) // With fallback content if no children provided`),
      
      Subsection("Example"),
      CodeBlock(`const Card = defineComponent({
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
h(Card)`),

      Divider(),

      // HashRouter
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["HashRouter"])),
      Para(
        "Class that provides hash-based routing. Create an instance and pass it to ",
        Code("createBetalApp"),
        " via the ",
        Code("options"),
        " parameter."
      ),
      CodeBlock(`import { HashRouter, createBetalApp } from "betal-fe";

const router = new HashRouter(routes);
const app = createBetalApp(App, {}, { router });
app.mount(document.getElementById("app"));`),

      Subsection("Constructor"),
      CodeBlock(`new HashRouter(routes, options)`),
      Table(
        ["Parameter", "Type", "Description"],
        [
          ["routes", "array", "Array of route definitions"],
          ["options", "object", "Router options (optional)"]
        ]
      ),

      Subsection("Options"),
      Table(
        ["Property", "Type", "Default", "Description"],
        [
          ["scrollBehavior", "string | boolean | function", "'top'", "Controls scroll behavior on navigation"]
        ]
      ),

      Subsection("Route Definition"),
      Table(
        ["Property", "Type", "Description"],
        [
          ["path", "string", "URL path pattern"],
          ["component", "Component", "Component to render"],
          ["beforeEnter", "function", "Route-specific guard (optional)"],
          ["redirect", "string", "Redirect path (optional)"]
        ]
      ),

      Subsection("Path Patterns"),
      BulletList(
        [Code("/"), " - Exact match"],
        [Code("/users/:id"), " - Dynamic parameter"],
        [Code("/posts/:year/:month"), " - Multiple parameters"],
        [Code("*"), " - Catch-all (404)"]
      ),

      Subsection("Methods"),
      Table(
        ["Method", "Description"],
        [
          ["navigateTo(path)", "Navigate to a specific path"],
          ["back()", "Go back in browser history"],
          ["forward()", "Go forward in browser history"]
        ]
      ),

      Subsection("Properties"),
      Table(
        ["Property", "Type", "Description"],
        [
          ["matchedRoute", "object", "Currently matched route"],
          ["params", "object", "Current route parameters"],
          ["query", "object", "Current query string parameters"]
        ]
      ),

      Divider(),

      // RouterLink
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["RouterLink"])),
      Para(
        "Component for navigation links. Renders an ",
        Code("<a>"),
        " element that prevents default navigation and uses the router's ",
        Code("navigateTo"),
        " method."
      ),

      Subsection("Props"),
      Table(
        ["Prop", "Type", "Description"],
        [
          ["to", "string", "Target path (can include anchor fragments)"],
          ["class", "string", "CSS classes to apply"],
          ["...rest", "any", "Any other attributes passed to anchor"]
        ]
      ),

      Subsection("Example"),
      CodeBlock(`h(RouterLink, { to: "/about" }, ["About Us"])
h(RouterLink, { to: "/users/123" }, ["User Profile"])
h(RouterLink, { to: "/search?q=hello" }, ["Search"])

// With anchor fragments
h(RouterLink, { to: "/about#team" }, ["Meet the Team"])
h(RouterLink, { to: "#features" }, ["Jump to Features"])

// With custom styling
h(RouterLink, { 
  to: "/about", 
  class: "nav-link active"
}, ["About"])`),

      Divider(),

      // RouterOutlet
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["RouterOutlet"])),
      Para(
        "Component that renders the matched route's component. Must be used with a HashRouter passed to ",
        Code("createBetalApp"),
        " options."
      ),
      CodeBlock(`const App = defineComponent({
  render() {
    return h("div", {}, [
      h("header", {}, ["My App"]),
      h(RouterOutlet),  // Matched component renders here
      h("footer", {}, ["© 2024"])
    ]);
  }
});`),

      Divider(),

      // nextTick
      Section(h("code", { class: "rounded bg-neutral-900 px-2 py-1 text-lg font-mono text-primary" }, ["nextTick"])),
      Para("Schedules code to run after the next DOM update. Returns a Promise that resolves after updates are flushed."),
      CodeBlock(`import { nextTick } from "betal-fe";

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
});`),

      Divider(),

      // Complete Import
      Section("Complete Import"),
      Para("All exports from Betal-FE:"),
      CodeBlock(`import {
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
} from "betal-fe";`)
    ]);
  }
});
