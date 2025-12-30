import { defineComponent, h } from 'betal-fe';

export const EventsPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Handling Events"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Interactive applications respond to user actions - clicks, key presses, form submissions, and more. This section teaches you how to handle events in Betal-FE and how components communicate with each other."
      ]),

      // Event Basics
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Event Basics"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "In Betal-FE, you attach event handlers using the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["on"]),
        " property in your element's props:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h("button", {
  on: { click: () => console.log("Button clicked!") }
}, ["Click me"])`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["on"]),
        " property is an object where keys are event names and values are handler functions. Common events include:"
      ]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["click"]), " - User clicks an element"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["input"]), " - User types in an input field"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["change"]), " - Input value changes (fires on blur)"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["submit"]), " - Form is submitted"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["keydown"]), " / ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["keyup"]), " - Keyboard events"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["mouseenter"]), " / ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["mouseleave"]), " - Mouse hover events"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, [h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["focus"]), " / ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["blur"]), " - Element gains/loses focus"])
        ])
      ]),

      // Working with Event Objects
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Working with Event Objects"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Event handlers receive the native DOM event as their first argument:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h("input", {
  on: {
    input: (event) => {
      console.log(event.target.value);  // The input's current value
    }
  }
})`
          ])
        ])
      ]),

      // Handling Form Input
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Handling Form Input"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["A common pattern is to sync input values with component state:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const SearchBox = defineComponent({
  state() {
    return { query: "" };
  },

  render() {
    return h("input", {
      type: "text",
      value: this.state.query,
      placeholder: "Search...",
      on: {
        input: (e) => this.updateState({ query: e.target.value })
      }
    });
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This creates a \"controlled input\" - the input's value is controlled by state. When the user types, we update state, which causes a re-render, which updates the input to show the new value."
      ]),

      // Form Submission
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Form Submission"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["When handling forms, prevent the default submission behavior:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const ContactForm = defineComponent({
  state() {
    return { name: "", email: "", message: "" };
  },

  handleSubmit(event) {
    event.preventDefault();  // Prevents page reload

    // Access form data from state
    const { name, email, message } = this.state;

    // Send data to server, show confirmation, etc.
    console.log("Submitting:", { name, email, message });
  },

  render() {
    return h("form", { on: { submit: (e) => this.handleSubmit(e) } }, [
      h("input", {
        type: "text",
        value: this.state.name,
        placeholder: "Your name",
        on: { input: (e) => this.updateState({ name: e.target.value }) }
      }),
      h("input", {
        type: "email",
        value: this.state.email,
        placeholder: "Your email",
        on: { input: (e) => this.updateState({ email: e.target.value }) }
      }),
      h("textarea", {
        value: this.state.message,
        placeholder: "Your message",
        on: { input: (e) => this.updateState({ message: e.target.value }) }
      }),
      h("button", { type: "submit" }, ["Send"])
    ]);
  }
});`
          ])
        ])
      ]),

      // Using Component Methods
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Using Component Methods"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["For cleaner code, define event handlers as component methods:"]),
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
        "This keeps render clean and makes the logic easy to find."
      ]),

      // Child-to-Parent Communication
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Child-to-Parent Communication"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Props flow down from parent to child, but sometimes children need to communicate back up. Betal-FE provides the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["emit"]),
        " method for this."
      ]),

      // Emitting Events from Children
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Emitting Events from Children"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["A child component can emit custom events:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const TodoItem = defineComponent({
  handleDelete() {
    // Emit a "delete" event with the item's id
    this.emit('delete', this.props.id);
  },

  handleToggle() {
    // Emit a "toggle" event
    this.emit('toggle', this.props.id);
  },

  render() {
    return h("li", {}, [
      h("input", {
        type: "checkbox",
        checked: this.props.completed,
        on: { change: () => this.handleToggle() }
      }),
      h("span", {}, [this.props.text]),
      h("button", { on: { click: () => this.handleDelete() } }, ["Delete"])
    ]);
  }
});`
          ])
        ])
      ]),

      // Listening to Child Events
      h("h3", { class: "mt-8 text-xl font-semibold text-white" }, ["Listening to Child Events"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The parent listens using the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["on"]),
        " prop:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const TodoList = defineComponent({
  state() {
    return {
      todos: [
        { id: 1, text: "Learn Betal-FE", completed: false },
        { id: 2, text: "Build an app", completed: false }
      ]
    };
  },

  handleDelete(id) {
    this.updateState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  },

  handleToggle(id) {
    this.updateState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  },

  render() {
    return h("ul", {},
      this.state.todos.map(todo =>
        h(TodoItem, {
          key: todo.id,
          id: todo.id,
          text: todo.text,
          completed: todo.completed,
          on: {
            delete: (id) => this.handleDelete(id),
            toggle: (id) => this.handleToggle(id)
          }
        })
      )
    );
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This pattern keeps the parent in control of the data while letting children trigger actions."
      ]),

      // Passing Callbacks as Props
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Passing Callbacks as Props"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "An alternative to ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["emit"]),
        " is passing callback functions as props:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Parent
const Parent = defineComponent({
  state() {
    return { value: "" };
  },

  handleChange(newValue) {
    this.updateState({ value: newValue });
  },

  render() {
    return h("div", {}, [
      h("p", {}, [\`Current value: \${this.state.value}\`]),
      h(Input, { 
        value: this.state.value,
        onChange: (val) => this.handleChange(val) 
      })
    ]);
  }
});

// Child
const Input = defineComponent({
  render() {
    return h("input", {
      value: this.props.value,
      on: {
        input: (e) => this.props.onChange(e.target.value)
      }
    });
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Both approaches work. Use whichever feels clearer for your situation."
      ]),

      // Keyboard Events
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Keyboard Events"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Handle keyboard interactions:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const SearchBox = defineComponent({
  state() {
    return { query: "" };
  },

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.performSearch();
    }
  },

  performSearch() {
    console.log("Searching for:", this.state.query);
  },

  render() {
    return h("input", {
      type: "text",
      value: this.state.query,
      placeholder: "Press Enter to search",
      on: {
        input: (e) => this.updateState({ query: e.target.value }),
        keypress: (e) => this.handleKeyPress(e)
      }
    });
  }
});`
          ])
        ])
      ]),

      // Event Delegation
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Event Delegation"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["When rendering lists, you might want to handle events at the parent level:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const List = defineComponent({
  handleClick(event) {
    // Check what was clicked using data attributes
    const itemId = event.target.dataset.id;
    if (itemId) {
      console.log("Clicked item:", itemId);
    }
  },

  render() {
    const items = ["Apple", "Banana", "Cherry"];

    return h("ul", { on: { click: (e) => this.handleClick(e) } },
      items.map((item, index) =>
        h("li", { "data-id": index }, [item])
      )
    );
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This attaches one handler to the parent instead of many handlers to children, which can be more efficient for large lists."
      ]),

      // Conditional Event Handling
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Conditional Event Handling"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Sometimes you want to conditionally prevent certain actions:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Button = defineComponent({
  handleClick() {
    if (this.props.disabled) {
      return;  // Don't do anything if disabled
    }
    this.emit('click');
  },

  render() {
    return h("button", {
      class: this.props.disabled ? "disabled" : "",
      on: { click: () => this.handleClick() }
    }, [this.props.label]);
  }
});`
          ])
        ])
      ]),

      // Summary
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Summary"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["You've learned how to make your components interactive:"]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Attach event handlers using the ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["on"]), " property"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Access event data through the event object"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Create controlled form inputs"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Use ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["emit"]), " for child-to-parent communication"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Pass callback props as an alternative to emit"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Handle keyboard and other events"])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The key insight is that events trigger state changes, which trigger re-renders. This unidirectional data flow makes your application predictable and easy to debug."
      ]),

      // Navigation
      h("div", { class: "mt-10 flex gap-4" }, [
        h("a", {
          href: "#/docs/slots",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Slots →"])
      ])
    ]);
  }
});
