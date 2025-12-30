import { defineComponent, h } from 'betal-fe';

export const StatePage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Managing State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "State is the heart of any interactive application. It's the data that can change over time - user input, fetched data, UI toggles, form values, and more. This section will teach you how to work with state effectively in Betal-FE."
      ]),

      // Understanding State
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Understanding State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "State represents the \"memory\" of your component. When state changes, Betal-FE automatically updates the UI to reflect those changes. This is called ",
        h("strong", { class: "font-semibold text-white" }, ["reactivity"]),
        " - the UI reacts to state changes."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Consider a simple example: a light switch. The switch has one piece of state - whether it's on or off. When you flip the switch, the state changes, and the light responds accordingly. The same concept applies to UI components."
      ]),

      // Declaring Initial State
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Declaring Initial State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Every component that needs to track changing data should define a ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["state"]),
        " method:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Profile = defineComponent({
  state() {
    return {
      name: "Anonymous",
      isEditing: false,
      followers: 0
    };
  },
  // ...
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["state"]),
        " method runs once when the component is created. The object it returns becomes the initial state. You can read state values anywhere in your component using ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.state"]),
        "."
      ]),

      // Using Props to Initialize State
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Using Props to Initialize State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Sometimes you want to initialize state based on props. The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["state"]),
        " method receives props as a parameter:"
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
        " This sets the ",
        h("em", { class: "italic" }, ["initial"]),
        " state only. If ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["initialCount"]),
        " prop changes later, the state won't automatically update. Use the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["onPropsChange"]),
        " lifecycle hook if you need to respond to prop changes."
      ]),

      // Updating State
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Updating State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Whenever you need to change state, call ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.updateState()"]),
        ":"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [`this.updateState({ count: 5 });`])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This method merges your changes into the current state, triggers a re-render of the component, and updates only the parts of the DOM that actually changed."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["You don't need to include every state property - only the ones you're changing:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`state() {
  return { name: "Alice", age: 25, city: "New York" };
}

// Later - only updating age
this.updateState({ age: 26 });
// State is now: { name: "Alice", age: 26, city: "New York" }`
          ])
        ])
      ]),

      // The Golden Rule
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["The Golden Rule: Never Mutate State Directly"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This is crucial. Always use ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["updateState"]),
        " to change state. Never modify ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["this.state"]),
        " directly:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// ❌ WRONG - Betal-FE won't detect this change
this.state.count = 5;

// ❌ WRONG - Pushing to an array mutates it
this.state.items.push(newItem);

// ❌ WRONG - Modifying a nested object
this.state.user.name = "Bob";`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Why? Because Betal-FE tracks state changes through ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["updateState"]),
        ". If you modify state directly, Betal-FE doesn't know anything changed, and your UI won't update."
      ]),

      // Working with Different Data Types
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Working with Different Data Types"]),

      // Numbers and Strings
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Numbers and Strings"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Simple values are straightforward:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Incrementing a number
this.updateState({ count: this.state.count + 1 });

// Updating a string
this.updateState({ message: "Hello, World!" });`
          ])
        ])
      ]),

      // Booleans
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Booleans (Toggles)"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["For toggling between true/false:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Toggle a boolean
this.updateState({ isVisible: !this.state.isVisible });`
          ])
        ])
      ]),

      // Arrays
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Arrays"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Arrays require creating a new array rather than modifying the existing one:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Adding an item
this.updateState({
  items: [...this.state.items, newItem]
});

// Removing an item
this.updateState({
  items: this.state.items.filter(item => item.id !== idToRemove)
});

// Updating an item
this.updateState({
  items: this.state.items.map(item =>
    item.id === idToUpdate ? { ...item, completed: true } : item
  )
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The spread operator (",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["..."]),
        ") creates a new array with all the existing items, allowing you to add, remove, or modify items immutably."
      ]),

      // Objects
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Objects"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Similar to arrays, create new objects instead of mutating:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Updating one property
this.updateState({
  user: { ...this.state.user, name: "New Name" }
});

// Updating nested properties
this.updateState({
  settings: {
    ...this.state.settings,
    notifications: {
      ...this.state.settings.notifications,
      email: true
    }
  }
});`
          ])
        ])
      ]),

      // Thinking About State
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Thinking About State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Not everything needs to be in state. Before adding something to state, ask yourself:"]),
      h("ol", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["1."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Does it change over time?"]), " If not, it's probably just a constant."])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["2."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Is it computed from other state?"]), " If so, compute it in render instead."])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["3."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Does it affect what's rendered?"]), " If not, maybe it doesn't need to be state."])
        ])
      ]),

      // Derived Values
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Derived Values"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Don't store values that can be calculated from other state:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// ❌ Bad - storing derived data
state() {
  return {
    items: [],
    itemCount: 0  // This is just items.length!
  };
}

// ✅ Good - compute in render
state() {
  return { items: [] };
}

render() {
  const itemCount = this.state.items.length;  // Computed fresh each render
  return h("p", {}, [\`You have \${itemCount} items\`]);
}`
          ])
        ])
      ]),

      // Lifting State Up
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Lifting State Up"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["When multiple components need the same state, move it to their closest common parent:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Parent manages the shared state
const Parent = defineComponent({
  state() {
    return { count: 0 };
  },

  increment() {
    this.updateState({ count: this.state.count + 1 });
  },

  render() {
    return h("div", {}, [
      // Pass state and updater to children
      h(Display, { count: this.state.count }),
      h(Controls, { onIncrement: () => this.increment() })
    ]);
  }
});

// Children receive state as props
const Display = defineComponent({
  render() {
    return h("p", {}, [\`Count: \${this.props.count}\`]);
  }
});

const Controls = defineComponent({
  render() {
    return h("button", {
      on: { click: () => this.props.onIncrement() }
    }, ["Increment"]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This pattern is called \"lifting state up.\" The parent becomes the \"source of truth\" for the shared data."
      ]),

      // Common State Patterns
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Common State Patterns"]),

      // Loading States
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Loading States"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["When fetching data, track loading and error states:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const DataFetcher = defineComponent({
  state() {
    return {
      data: null,
      loading: true,
      error: null
    };
  },

  onMounted() {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        this.updateState({ data, loading: false });
      })
      .catch(error => {
        this.updateState({ error: error.message, loading: false });
      });
  },

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return h("p", {}, ["Loading..."]);
    }

    if (error) {
      return h("p", { class: "error" }, [\`Error: \${error}\`]);
    }

    return h("div", {}, [
      // Render your data
    ]);
  }
});`
          ])
        ])
      ]),

      // Form State
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Form State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Track form input values:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const LoginForm = defineComponent({
  state() {
    return {
      email: "",
      password: "",
      errors: {}
    };
  },

  handleSubmit() {
    // Validate
    const errors = {};
    if (!this.state.email) errors.email = "Email is required";
    if (!this.state.password) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
      this.updateState({ errors });
      return;
    }

    // Submit form...
  },

  render() {
    return h("form", { on: { submit: (e) => { e.preventDefault(); this.handleSubmit(); } } }, [
      h("input", {
        type: "email",
        value: this.state.email,
        on: { input: (e) => this.updateState({ email: e.target.value }) }
      }),
      this.state.errors.email && h("span", { class: "error" }, [this.state.errors.email]),

      h("input", {
        type: "password",
        value: this.state.password,
        on: { input: (e) => this.updateState({ password: e.target.value }) }
      }),
      this.state.errors.password && h("span", { class: "error" }, [this.state.errors.password]),

      h("button", { type: "submit" }, ["Login"])
    ]);
  }
});`
          ])
        ])
      ]),

      // Persisting State
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Persisting State"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Save state to localStorage so it survives page refreshes:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const TodoList = defineComponent({
  state() {
    // Load from localStorage on init
    const saved = localStorage.getItem('todos');
    return {
      todos: saved ? JSON.parse(saved) : []
    };
  },

  onStateChange() {
    // Save to localStorage whenever state changes
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  },

  // ... rest of component
});`
          ])
        ])
      ]),

      // Batching Updates
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Batching Updates"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Betal-FE is smart about updates. Multiple ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["updateState"]),
        " calls in the same event handler are batched together:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`handleClick() {
  this.updateState({ a: 1 });
  this.updateState({ b: 2 });
  this.updateState({ c: 3 });
  // Only ONE re-render happens, not three
}`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This means you don't need to worry about performance when making multiple state updates in a row."
      ]),

      // Summary
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Summary"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Key takeaways for working with state:"]),
      h("ol", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["1."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Initialize state"]), " in the ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["state()"]), " method"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["2."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Always use updateState()"]), " to change state - never mutate directly"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["3."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Create new objects and arrays"]), " instead of modifying existing ones"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["4."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Only store what's necessary"]), " - compute derived values in render"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["5."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Lift state up"]), " when multiple components need the same data"])
        ]),
        h("li", { class: "flex gap-3" }, [
          h("span", { class: "font-semibold text-primary" }, ["6."]),
          h("span", {}, [h("strong", { class: "font-semibold text-white" }, ["Use lifecycle hooks"]), " like ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["onStateChange"]), " for side effects"])
        ])
      ]),

      // Navigation
      h("div", { class: "mt-10 flex gap-4" }, [
        h("a", {
          href: "#/docs/events",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Handling Events →"])
      ])
    ]);
  }
});
