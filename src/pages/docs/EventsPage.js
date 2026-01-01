import { defineComponent, h } from 'betal-fe';
import { Section, Para, Strong, Code, BulletList, NumberedList, ListItemWithBold, CodeBlock, Subsection } from '../../components/docs/DocElements.js';

export const EventsPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Handling Events"]),
      Para(
        "Interactive applications respond to user actions - clicks, key presses, form submissions, and more. This section teaches you how to handle events in Betal-FE and how components communicate with each other."
      ),

      // Event Basics
      Section("Event Basics"),
      Para(
        "In Betal-FE, you attach event handlers using the ",
        Code("on"),
        " property in your element's props:"
      ),
      CodeBlock(
`h("button", {
  on: { click: () => console.log("Button clicked!") }
}, ["Click me"])`
      ),
      Para(
        "The ",
        Code("on"),
        " property is an object where keys are event names and values are handler functions. Common events include:"
      ),
      BulletList(
        [Code("click"), " - User clicks an element"],
        [Code("input"), " - User types in an input field"],
        [Code("change"), " - Input value changes (fires on blur)"],
        [Code("submit"), " - Form is submitted"],
        [Code("keydown"), " / ", Code("keyup"), " - Keyboard events"],
        [Code("mouseenter"), " / ", Code("mouseleave"), " - Mouse hover events"],
        [Code("focus"), " / ", Code("blur"), " - Element gains/loses focus"]
      ),

      // Working with Event Objects
      Section("Working with Event Objects"),
      Para(
        "Event handlers receive the native DOM event as their first argument:"
      ),
      CodeBlock(
`h("input", {
  on: {
    input: (event) => {
      console.log(event.target.value);  // The input's current value
    }
  }
})`
      ),

      // Handling Form Input
      Section("Handling Form Input"),
      Para("A common pattern is to sync input values with component state:"),
      CodeBlock(
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
      ),
      Para(
        "This creates a \"controlled input\" - the input's value is controlled by state. When the user types, we update state, which causes a re-render, which updates the input to show the new value."
      ),

      // Form Submission
      Section("Form Submission"),
      Para("When handling forms, prevent the default submission behavior:"),
      CodeBlock(
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
      ),

      // Using Component Methods
      Section("Using Component Methods"),
      Para("For cleaner code, define event handlers as component methods:"),
      CodeBlock(
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
      ),
      Para(
        "This keeps render clean and makes the logic easy to find."
      ),

      // Child-to-Parent Communication
      Section("Child-to-Parent Communication"),
      Para(
        "Props flow down from parent to child, but sometimes children need to communicate back up. Betal-FE provides the ",
        Code("emit"),
        " method for this."
      ),

      // Emitting Events from Children
      Subsection("Emitting Events from Children"),
      Para("A child component can emit custom events:"),
      CodeBlock(
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
      ),

      // Listening to Child Events
      Subsection("Listening to Child Events"),
      Para(
        "The parent listens using the ",
        Code("on"),
        " prop:"
      ),
      CodeBlock(
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
      ),
      Para(
        "This pattern keeps the parent in control of the data while letting children trigger actions."
      ),

      // Passing Callbacks as Props
      Section("Passing Callbacks as Props"),
      Para(
        "An alternative to ",
        Code("emit"),
        " is passing callback functions as props:"
      ),
      CodeBlock(
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
      ),
      Para(
        "Both approaches work. Use whichever feels clearer for your situation."
      ),

      // Keyboard Events
      Section("Keyboard Events"),
      Para("Handle keyboard interactions:"),
      CodeBlock(
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
      ),

      // Event Delegation
      Section("Event Delegation"),
      Para("When rendering lists, you might want to handle events at the parent level:"),
      CodeBlock(
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
      ),
      Para(
        "This attaches one handler to the parent instead of many handlers to children, which can be more efficient for large lists."
      ),

      // Conditional Event Handling
      Section("Conditional Event Handling"),
      Para("Sometimes you want to conditionally prevent certain actions:"),
      CodeBlock(
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
      ),

      // Summary
      Section("Summary"),
      Para("You've learned how to make your components interactive:"),
      BulletList(
        ["Attach event handlers using the ", Code("on"), " property"],
        "Access event data through the event object",
        "Create controlled form inputs",
        ["Use ", Code("emit"), " for child-to-parent communication"],
        "Pass callback props as an alternative to emit",
        "Handle keyboard and other events"
      ),
      Para(
        "The key insight is that events trigger state changes, which trigger re-renders. This unidirectional data flow makes your application predictable and easy to debug."
      ),

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
