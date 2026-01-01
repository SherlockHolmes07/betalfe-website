import { defineComponent, h } from 'betal-fe';
import { Section, Para, Strong, Code, BulletList, NumberedList, ListItemWithBold, CodeBlock, Subsection } from '../../components/docs/DocElements.js';

export const ComponentsPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Components"]),
      Para("Components are the foundation of every Betal-FE application. This section will teach you how to think about components, build reusable ones, and compose them together to create complex user interfaces."),

      Section("What is a Component?"),
      Para("A component is a self-contained piece of UI. It has its own structure (what it looks like), behavior (how it responds to interactions), and often its own data (state)."),
      Para("Think about a typical web page - it might have a header, a sidebar, a main content area, and a footer. Each of these can be a component. The header might contain a logo component and a navigation component. Components can be nested inside other components, forming a tree structure."),
      Para("This approach has several benefits:"),
      NumberedList(
        ListItemWithBold("Reusability", "Build a button component once, use it everywhere"),
        ListItemWithBold("Organization", "Each component is a separate, focused piece of code"),
        ListItemWithBold("Maintainability", "Changes to one component don't affect others"),
        ListItemWithBold("Testability", "Components can be tested in isolation")
      ),

      Section("Creating Components"),
      Para("Every component is created using ", Code("defineComponent"), ":"),
      CodeBlock(`const Greeting = defineComponent({
  render() {
    return h("p", {}, ["Hello, welcome to our site!"]);
  }
});`),
      Para("The ", Code("render"), " method is the only required part of a component. It tells Betal-FE what to display."),

      Section("Using Components"),
      Para("Once you've defined a component, you can use it inside other components by passing it to ", Code("h()"), ":"),
      CodeBlock(`const App = defineComponent({
  render() {
    return h("div", {}, [
      h(Greeting),
      h("p", {}, ["More content here..."])
    ]);
  }
});`),
      Para("Notice that instead of a string like \"div\" or \"p\", we pass the component itself (", Code("Greeting"), ") as the first argument to ", Code("h()"), "."),

      Section("Props: Passing Data to Components"),
      Para("Components become truly powerful when you can pass data to them. This is done through ", Strong("props"), " (short for properties)."),
      Para("When using a component, you pass props as the second argument to ", Code("h()"), ":"),
      CodeBlock(`h(Greeting, { name: "Alice" })`),
      Para("Inside the component, you access props through ", Code("this.props"), ":"),
      CodeBlock(`const Greeting = defineComponent({
  render() {
    return h("p", {}, [\`Hello, \${this.props.name}!\`]);
  }
});`),
      Para("Now you can reuse this component with different names:"),
      CodeBlock(`const App = defineComponent({
  render() {
    return h("div", {}, [
      h(Greeting, { name: "Alice" }),
      h(Greeting, { name: "Bob" }),
      h(Greeting, { name: "Charlie" })
    ]);
  }
});`),

      Subsection("Props are Read-Only"),
      Para("An important rule: ", Strong("never modify props directly"), ". Props flow down from parent to child, and the child should treat them as read-only."),
      CodeBlock(`// ❌ Never do this
this.props.name = "New Name";

// ✅ Props are for reading only
const name = this.props.name;`),

      Section("State: Data That Changes"),
      Para("While props are passed from parent to child, ", Strong("state"), " is data that a component manages internally. When state changes, Betal-FE automatically re-renders the component."),
      Para("To add state to a component, define a ", Code("state"), " method that returns an object:"),
      CodeBlock(`const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  render() {
    return h("div", {}, [
      h("p", {}, [\`Count: \${this.state.count}\`])
    ]);
  }
});`),

      Subsection("Initializing State from Props"),
      Para("The ", Code("state"), " method receives props as its first parameter, allowing you to use props to set initial state:"),
      CodeBlock(`const Counter = defineComponent({
  state(props) {
    return {
      count: props.initialCount || 0
    };
  },
  // ...
});`),
      Para(Strong("Note:"), " This only sets the ", h("em", { class: "italic" }, ["initial"]), " state. If the ", Code("initialCount"), " prop changes later, the state won't automatically update. Use the ", Code("onPropsChange"), " lifecycle hook if you need to respond to prop changes."),

      Subsection("Updating State"),
      Para("To change state, call ", Code("this.updateState()"), " with an object containing the properties you want to update:"),
      CodeBlock(`const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  render() {
    return h("div", {}, [
      h("p", {}, [\`Count: \${this.state.count}\`]),
      h("button", {
        on: { click: () => this.updateState({ count: this.state.count + 1 }) }
      }, ["Increment"])
    ]);
  }
});`),
      Para("When you call ", Code("updateState"), ", Betal-FE merges the new values into the current state, re-runs the render method, and updates only the parts of the DOM that changed."),

      Subsection("State Update Rules"),
      Para("Always use ", Code("updateState"), " to modify state. Never mutate state directly:"),
      CodeBlock(`// ❌ Wrong - Betal-FE won't know to re-render
this.state.count = 5;

// ✅ Correct - triggers a re-render
this.updateState({ count: 5 });`),
      Para("When updating arrays or objects in state, create new copies instead of mutating:"),
      CodeBlock(`// ❌ Wrong - mutating the existing array
this.state.items.push(newItem);

// ✅ Correct - creating a new array
this.updateState({ 
  items: [...this.state.items, newItem] 
});`),

      Section("Props vs State: When to Use Each"),
      Para("This is a common source of confusion for beginners. Here's a simple rule:"),
      BulletList(
        [Strong("Props"), " are for data that comes from a parent component"],
        [Strong("State"), " is for data that the component manages itself"]
      ),
      Para("Ask yourself: \"Where does this data come from?\" If it's passed from above, it's a prop. If the component creates and manages it, it's state."),

      // Defining Methods
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Defining Methods"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Components can have custom methods. These are useful for organizing your logic:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  increment() {
    this.updateState({ count: this.state.count + 1 });
  },

  decrement() {
    this.updateState({ count: this.state.count - 1 });
  },

  render() {
    return h("div", {}, [
      h("button", { on: { click: () => this.decrement() } }, ["-"]),
      h("span", {}, [\` \${this.state.count} \`]),
      h("button", { on: { click: () => this.increment() } }, ["+"])
    ]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Methods help keep your ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["render"]),
        " function clean and make your logic reusable within the component."
      ]),

      // Lifecycle Hooks
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Lifecycle Hooks"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Components go through a lifecycle: they're created, mounted to the DOM, updated when state/props change, and eventually unmounted (removed). Betal-FE lets you hook into these moments."
      ]),

      // onMounted
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["onMounted"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Called once after the component is added to the DOM:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const UserProfile = defineComponent({
  state() {
    return { user: null, loading: true };
  },

  onMounted() {
    // Perfect place to fetch data
    fetch('/api/user')
      .then(response => response.json())
      .then(user => {
        this.updateState({ user, loading: false });
      });
  },

  render() {
    if (this.state.loading) {
      return h("p", {}, ["Loading..."]);
    }
    return h("div", {}, [
      h("h2", {}, [this.state.user.name]),
      h("p", {}, [this.state.user.email])
    ]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Use ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["onMounted"]),
        " for fetching data, setting up subscriptions, starting timers, or anything that needs access to the DOM."
      ]),

      // onUnmounted
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["onUnmounted"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Called just before the component is removed from the DOM:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Timer = defineComponent({
  state() {
    return { seconds: 0 };
  },

  onMounted() {
    this.timerId = setInterval(() => {
      this.updateState({ seconds: this.state.seconds + 1 });
    }, 1000);
  },

  onUnmounted() {
    // Clean up to prevent memory leaks
    clearInterval(this.timerId);
  },

  render() {
    return h("p", {}, [\`Elapsed: \${this.state.seconds} seconds\`]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Use ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["onUnmounted"]),
        " for clearing timers, canceling network requests, removing event listeners, and cleaning up subscriptions."
      ]),

      // onStateChange
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["onStateChange"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Called after state changes:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const TodoList = defineComponent({
  state() {
    return { todos: [] };
  },

  onStateChange() {
    // Save to localStorage whenever state changes
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  },

  // ... rest of the component
});`
          ])
        ])
      ]),

      // onPropsChange
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["onPropsChange"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Called when the parent passes new props:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const UserProfile = defineComponent({
  state() {
    return { user: null };
  },

  onMounted() {
    this.loadUser(this.props.userId);
  },

  onPropsChange(newProps, oldProps) {
    // If the userId prop changed, load the new user
    if (newProps.userId !== oldProps.userId) {
      this.loadUser(newProps.userId);
    }
  },

  loadUser(id) {
    fetch(\`/api/users/\${id}\`)
      .then(res => res.json())
      .then(user => this.updateState({ user }));
  },

  render() {
    // ...
  }
});`
          ])
        ])
      ]),

      // Composing Components
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Composing Components"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Real applications are built by composing many components together:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Header = defineComponent({
  render() {
    return h("header", {}, [
      h("h1", {}, [this.props.title]),
      h(Navigation)
    ]);
  }
});

const Navigation = defineComponent({
  render() {
    return h("nav", {}, [
      h("a", { href: "#home" }, ["Home"]),
      h("a", { href: "#about" }, ["About"])
    ]);
  }
});

const App = defineComponent({
  render() {
    return h("div", { class: "app" }, [
      h(Header, { title: "My Website" }),
      h(MainContent),
      h(Footer)
    ]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Each component is small and focused. The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["App"]),
        " component orchestrates them all. This makes the code easier to understand, modify, and reuse."
      ]),

      // Summary
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Summary"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["You've learned the essentials of components in Betal-FE:"]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Components are self-contained pieces of UI"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["render"]), " describes what to display"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Props"]), " pass data from parent to child (read-only)"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["State"]), " is data managed by the component (use ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["updateState"]), " to change it)"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Lifecycle hooks"]), " let you run code at specific moments"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Components can be composed together to build complex UIs"])
        ])
      ]),

      // Navigation
      h("div", { class: "mt-10 flex gap-4" }, [
        h("a", {
          href: "#/docs/state",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Managing State →"])
      ])
    ]);
  }
});
