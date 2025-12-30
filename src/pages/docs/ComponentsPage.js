import { defineComponent, h } from 'betal-fe';

export const ComponentsPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Components"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Components are the foundation of every Betal-FE application. This section will teach you how to think about components, build reusable ones, and compose them together to create complex user interfaces."
      ]),

      // What is a Component?
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["What is a Component?"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "A component is a self-contained piece of UI. It has its own structure (what it looks like), behavior (how it responds to interactions), and often its own data (state)."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Think about a typical web page - it might have a header, a sidebar, a main content area, and a footer. Each of these can be a component. The header might contain a logo component and a navigation component. Components can be nested inside other components, forming a tree structure."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["This approach has several benefits:"]),
      h("ol", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["1."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Reusability"]), " - Build a button component once, use it everywhere"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["2."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Organization"]), " - Each component is a separate, focused piece of code"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["3."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Maintainability"]), " - Changes to one component don't affect others"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["4."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Testability"]), " - Components can be tested in isolation"])
        ])
      ]),

      // Creating Components
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Creating Components"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Every component is created using ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["defineComponent"]),
        ":"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Greeting = defineComponent({
  render() {
    return h("p", {}, ["Hello, welcome to our site!"]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["render"]),
        " method is the only required part of a component. It tells Betal-FE what to display."
      ]),

      // Using Components
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Using Components"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Once you've defined a component, you can use it inside other components by passing it to ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["h()"]),
        ":"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const App = defineComponent({
  render() {
    return h("div", {}, [
      h(Greeting),
      h("p", {}, ["More content here..."])
    ]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Notice that instead of a string like \"div\" or \"p\", we pass the component itself (",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["Greeting"]),
        ") as the first argument to ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["h()"]),
        "."
      ]),

      // Props: Passing Data to Components
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Props: Passing Data to Components"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Components become truly powerful when you can pass data to them. This is done through ",
        h("strong", { class: "font-semibold text-white" }, ["props"]),
        " (short for properties)."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "When using a component, you pass props as the second argument to ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["h()"]),
        ":"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [`h(Greeting, { name: "Alice" })`])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Inside the component, you access props through ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.props"]),
        ":"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Greeting = defineComponent({
  render() {
    return h("p", {}, [\`Hello, \${this.props.name}!\`]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Now you can reuse this component with different names:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const App = defineComponent({
  render() {
    return h("div", {}, [
      h(Greeting, { name: "Alice" }),
      h(Greeting, { name: "Bob" }),
      h(Greeting, { name: "Charlie" })
    ]);
  }
});`
          ])
        ])
      ]),

      // Props are Read-Only
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Props are Read-Only"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "An important rule: ",
        h("strong", { class: "font-semibold text-white" }, ["never modify props directly"]),
        ". Props flow down from parent to child, and the child should treat them as read-only."
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// ❌ Never do this
this.props.name = "New Name";

// ✅ Props are for reading only
const name = this.props.name;`
          ])
        ])
      ]),

      // State: Data That Changes
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["State: Data That Changes"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "While props are passed from parent to child, ",
        h("strong", { class: "font-semibold text-white" }, ["state"]),
        " is data that a component manages internally. When state changes, Betal-FE automatically re-renders the component."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "To add state to a component, define a ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["state"]),
        " method that returns an object:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  render() {
    return h("div", {}, [
      h("p", {}, [\`Count: \${this.state.count}\`])
    ]);
  }
});`
          ])
        ])
      ]),

      // Initializing State from Props
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Initializing State from Props"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["state"]),
        " method receives props as its first parameter, allowing you to use props to set initial state:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Counter = defineComponent({
  state(props) {
    return {
      count: props.initialCount || 0
    };
  },
  // ...
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        h("strong", { class: "font-semibold text-white" }, ["Note:"]),
        " This only sets the ",
        h("em", { class: "italic" }, ["initial"]),
        " state. If the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["initialCount"]),
        " prop changes later, the state won't automatically update. Use the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["onPropsChange"]),
        " lifecycle hook if you need to respond to prop changes."
      ]),

      // Updating State
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Updating State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "To change state, call ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.updateState()"]),
        " with an object containing the properties you want to update:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Counter = defineComponent({
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
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "When you call ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["updateState"]),
        ", Betal-FE merges the new values into the current state, re-runs the render method, and updates only the parts of the DOM that changed."
      ]),

      // State Update Rules
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["State Update Rules"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Always use ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["updateState"]),
        " to modify state. Never mutate state directly:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// ❌ Wrong - Betal-FE won't know to re-render
this.state.count = 5;

// ✅ Correct - triggers a re-render
this.updateState({ count: 5 });`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["When updating arrays or objects in state, create new copies instead of mutating:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// ❌ Wrong - mutating the existing array
this.state.items.push(newItem);

// ✅ Correct - creating a new array
this.updateState({ 
  items: [...this.state.items, newItem] 
});`
          ])
        ])
      ]),

      // Props vs State
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Props vs State: When to Use Each"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["This is a common source of confusion for beginners. Here's a simple rule:"]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Props"]), " are for data that comes from a parent component"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["State"]), " is for data that the component manages itself"])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Ask yourself: \"Where does this data come from?\" If it's passed from above, it's a prop. If the component creates and manages it, it's state."
      ]),

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
