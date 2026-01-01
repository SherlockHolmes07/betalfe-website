import { defineComponent, h } from 'betal-fe';
import { Section, Para, Strong, Code, BulletList, NumberedList, ListItemWithBold, CodeBlock, Subsection } from '../../components/docs/DocElements.js';

export const StatePage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Managing State"]),
      Para(
        "State is the heart of any interactive application. It's the data that can change over time - user input, fetched data, UI toggles, form values, and more. This section will teach you how to work with state effectively in Betal-FE."
      ),

      // Understanding State
      Section("Understanding State"),
      Para(
        "State represents the \"memory\" of your component. When state changes, Betal-FE automatically updates the UI to reflect those changes. This is called ",
        Strong("reactivity"),
        " - the UI reacts to state changes."
      ),
      Para(
        "Consider a simple example: a light switch. The switch has one piece of state - whether it's on or off. When you flip the switch, the state changes, and the light responds accordingly. The same concept applies to UI components."
      ),

      // Declaring Initial State
      Section("Declaring Initial State"),
      Para(
        "Every component that needs to track changing data should define a ",
        Code("state"),
        " method:"
      ),
      CodeBlock(
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
      ),
      Para(
        "The ",
        Code("state"),
        " method runs once when the component is created. The object it returns becomes the initial state. You can read state values anywhere in your component using ",
        Code("this.state"),
        "."
      ),

      // Using Props to Initialize State
      Subsection("Using Props to Initialize State"),
      Para(
        "Sometimes you want to initialize state based on props. The ",
        Code("state"),
        " method receives props as a parameter:"
      ),
      CodeBlock(
`const Counter = defineComponent({
  state(props) {
    return {
      count: props.initialCount || 0
    };
  },
  // ...
});`
      ),
      Para(
        Strong("Note:"),
        " This sets the ",
        h("em", { class: "italic" }, ["initial"]),
        " state only. If ",
        Code("initialCount"),
        " prop changes later, the state won't automatically update. Use the ",
        Code("onPropsChange"),
        " lifecycle hook if you need to respond to prop changes."
      ),

      // Updating State
      Section("Updating State"),
      Para(
        "Whenever you need to change state, call ",
        Code("this.updateState()"),
        ":"
      ),
      CodeBlock(`this.updateState({ count: 5 });`),
      Para(
        "This method merges your changes into the current state, triggers a re-render of the component, and updates only the parts of the DOM that actually changed."
      ),
      Para("You don't need to include every state property - only the ones you're changing:"),
      CodeBlock(
`state() {
  return { name: "Alice", age: 25, city: "New York" };
}

// Later - only updating age
this.updateState({ age: 26 });
// State is now: { name: "Alice", age: 26, city: "New York" }`
      ),

      // The Golden Rule
      Section("The Golden Rule: Never Mutate State Directly"),
      Para(
        "This is crucial. Always use ",
        Code("updateState"),
        " to change state. Never modify ",
        Code("this.state"),
        " directly:"
      ),
      CodeBlock(
`// ❌ WRONG - Betal-FE won't detect this change
this.state.count = 5;

// ❌ WRONG - Pushing to an array mutates it
this.state.items.push(newItem);

// ❌ WRONG - Modifying a nested object
this.state.user.name = "Bob";`
      ),
      Para(
        "Why? Because Betal-FE tracks state changes through ",
        Code("updateState"),
        ". If you modify state directly, Betal-FE doesn't know anything changed, and your UI won't update."
      ),

      // Working with Different Data Types
      Section("Working with Different Data Types"),

      // Numbers and Strings
      Subsection("Numbers and Strings"),
      Para("Simple values are straightforward:"),
      CodeBlock(
`// Incrementing a number
this.updateState({ count: this.state.count + 1 });

// Updating a string
this.updateState({ message: "Hello, World!" });`
      ),

      // Booleans
      Subsection("Booleans (Toggles)"),
      Para("For toggling between true/false:"),
      CodeBlock(
`// Toggle a boolean
this.updateState({ isVisible: !this.state.isVisible });`
      ),

      // Arrays
      Subsection("Arrays"),
      Para("Arrays require creating a new array rather than modifying the existing one:"),
      CodeBlock(
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
      ),
      Para(
        "The spread operator (",
        Code("..."),
        ") creates a new array with all the existing items, allowing you to add, remove, or modify items immutably."
      ),

      // Objects
      Subsection("Objects"),
      Para("Similar to arrays, create new objects instead of mutating:"),
      CodeBlock(
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
      ),

      // Thinking About State
      Section("Thinking About State"),
      Para("Not everything needs to be in state. Before adding something to state, ask yourself:"),
      NumberedList(
        [Strong("Does it change over time?"), " If not, it's probably just a constant."],
        [Strong("Is it computed from other state?"), " If so, compute it in render instead."],
        [Strong("Does it affect what's rendered?"), " If not, maybe it doesn't need to be state."]
      ),

      // Derived Values
      Subsection("Derived Values"),
      Para("Don't store values that can be calculated from other state:"),
      CodeBlock(
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
      ),

      // Lifting State Up
      Subsection("Lifting State Up"),
      Para("When multiple components need the same state, move it to their closest common parent:"),
      CodeBlock(
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
      ),
      Para(
        "This pattern is called \"lifting state up.\" The parent becomes the \"source of truth\" for the shared data."
      ),

      // Common State Patterns
      Section("Common State Patterns"),

      // Loading States
      Subsection("Loading States"),
      Para("When fetching data, track loading and error states:"),
      CodeBlock(
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
      ),

      // Form State
      Subsection("Form State"),
      Para("Track form input values:"),
      CodeBlock(
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
      ),

      // Persisting State
      Subsection("Persisting State"),
      Para("Save state to localStorage so it survives page refreshes:"),
      CodeBlock(
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
      ),

      // Batching Updates
      Section("Batching Updates"),
      Para(
        "Betal-FE is smart about updates. Multiple ",
        Code("updateState"),
        " calls in the same event handler are batched together:"
      ),
      CodeBlock(
`handleClick() {
  this.updateState({ a: 1 });
  this.updateState({ b: 2 });
  this.updateState({ c: 3 });
  // Only ONE re-render happens, not three
}`
      ),
      Para(
        "This means you don't need to worry about performance when making multiple state updates in a row."
      ),

      // Summary
      Section("Summary"),
      Para("Key takeaways for working with state:"),
      NumberedList(
        [Strong("Initialize state"), " in the ", Code("state()"), " method"],
        [Strong("Always use updateState()"), " to change state - never mutate directly"],
        [Strong("Create new objects and arrays"), " instead of modifying existing ones"],
        [Strong("Only store what's necessary"), " - compute derived values in render"],
        [Strong("Lift state up"), " when multiple components need the same data"],
        [Strong("Use lifecycle hooks"), " like ", Code("onStateChange"), " for side effects"]
      ),

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
