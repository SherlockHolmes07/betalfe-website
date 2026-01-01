import { defineComponent, h } from 'betal-fe';
import { Section, Para, Code, CodeBlock, BulletList, Strong } from '../../components/docs/DocElements.js';

export const SlotsPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Slots"]),
      Para(
        "Slots allow you to pass content into components, making them flexible and reusable. Instead of just passing data via props, you can pass entire chunks of UI."
      ),

      // The Problem Slots Solve
      Section("The Problem Slots Solve"),
      Para(
        "Imagine building a Card component. You want a consistent card style, but different content inside each card:"
      ),
      CodeBlock(
`// Without slots, you'd need many specific props
h(Card, { 
  title: "Welcome",
  subtitle: "Get started",
  body: "Some text here...",
  footerText: "Learn more"
});`
      ),
      Para(
        "This gets messy quickly. What if you want an icon in the title? A button in the footer? Multiple paragraphs? You'd need more and more props."
      ),
      Para("Slots solve this elegantly:"),
      CodeBlock(
`h(Card, {}, [
  h("h2", {}, ["Welcome"]),
  h("p", {}, ["Get started with our platform."]),
  h("button", {}, ["Learn more"])
]);`
      ),
      Para(
        "Now the Card component provides the wrapper and styling, while you provide whatever content you want."
      ),

      // Using Slots
      Section("Using Slots"),
      Para(
        "To accept slotted content, use the ",
        Code("hSlot"),
        " function in your component:"
      ),
      CodeBlock(
`import { defineComponent, h, hSlot } from "betal-fe";

const Card = defineComponent({
  render() {
    return h("div", { class: "card" }, [
      hSlot()  // Children passed to this component render here
    ]);
  }
});`
      ),
      Para("Now when you use the Card:"),
      CodeBlock(
`h(Card, {}, [
  h("h2", {}, ["My Title"]),
  h("p", {}, ["My content goes here."])
]);`
      ),
      Para(
        "The ",
        Code("h2"),
        " and ",
        Code("p"),
        " elements render where ",
        Code("hSlot()"),
        " is placed."
      ),

      // Default Slot Content
      Section("Default Slot Content"),
      Para("You can provide fallback content that shows when no content is passed:"),
      CodeBlock(
`const Button = defineComponent({
  render() {
    return h("button", { class: "btn" }, [
      hSlot([
        h("span", {}, ["Click me"])  // Default content
      ])
    ]);
  }
});`
      ),
      Para("Using this component:"),
      CodeBlock(
`// Uses default content - shows "Click me"
h(Button)

// Custom content - shows the icon and text
h(Button, {}, [
  h("span", { class: "icon" }, ["🚀"]),
  h("span", {}, ["Launch"])
])`
      ),
      Para(
        "The array passed to ",
        Code("hSlot()"),
        " is the fallback content. It only renders when no children are provided to the component."
      ),

      // Practical Example: Alert Component
      Section("Practical Example: Alert Component"),
      Para("Here's a practical Alert component using slots:"),
      CodeBlock(
`const Alert = defineComponent({
  render() {
    const { type = "info" } = this.props;
    
    return h("div", { class: \`alert alert-\${type}\` }, [
      hSlot([
        h("p", {}, ["No message provided."])
      ])
    ]);
  }
});`
      ),
      Para("Usage with different content:"),
      CodeBlock(
`// Simple text
h(Alert, { type: "success" }, [
  h("p", {}, ["Your changes have been saved."])
])

// Rich content
h(Alert, { type: "error" }, [
  h("strong", {}, ["Error!"]),
  h("p", {}, ["Something went wrong. Please try again."]),
  h("button", { on: { click: () => retry() } }, ["Retry"])
])`
      ),

      // Building Wrapper Components
      Section("Building Wrapper Components"),
      Para("Slots are perfect for wrapper components that provide consistent structure:"),
      CodeBlock(
`const Panel = defineComponent({
  render() {
    return h("div", { class: "panel" }, [
      h("div", { class: "panel-header" }, [
        h("h3", {}, [this.props.title])
      ]),
      h("div", { class: "panel-body" }, [
        hSlot()
      ])
    ]);
  }
});`
      ),
      Para("Usage:"),
      CodeBlock(
`h(Panel, { title: "User Settings" }, [
  h("label", {}, ["Username"]),
  h("input", { type: "text", value: "john_doe" }),
  h("label", {}, ["Email"]),
  h("input", { type: "email", value: "john@example.com" }),
  h("button", {}, ["Save"])
])`
      ),
      Para(
        "The Panel handles the header styling and structure, while you control what goes in the body."
      ),

      // Modal Component Example
      Section("Modal Component Example"),
      Para("A modal is a great use case for slots:"),
      CodeBlock(
`const Modal = defineComponent({
  render() {
    if (!this.props.isOpen) return null;

    return h("div", { class: "modal-overlay" }, [
      h("div", { class: "modal" }, [
        h("div", { class: "modal-header" }, [
          h("h2", {}, [this.props.title]),
          h("button", { 
            class: "close-btn",
            on: { click: () => this.emit("close") }
          }, ["×"])
        ]),
        h("div", { class: "modal-body" }, [
          hSlot()
        ])
      ])
    ]);
  }
});`
      ),
      Para("Usage:"),
      CodeBlock(
`h(Modal, { 
  isOpen: this.state.showModal, 
  title: "Confirm Delete",
  on: { close: () => this.updateState({ showModal: false }) }
}, [
  h("p", {}, ["Are you sure you want to delete this item?"]),
  h("p", {}, ["This action cannot be undone."]),
  h("div", { class: "modal-actions" }, [
    h("button", { on: { click: () => this.handleCancel() } }, ["Cancel"]),
    h("button", { 
      class: "danger",
      on: { click: () => this.handleDelete() } 
    }, ["Delete"])
  ])
])`
      ),

      // Slots vs Props
      Section("Slots vs Props"),
      Para(
        "Use ",
        Strong("props"),
        " when:"
      ),
      BulletList(
        "Passing simple data (strings, numbers, booleans)",
        "The component decides how to render the data",
        "You have a fixed, predictable structure"
      ),
      Para(
        "Use ",
        Strong("slots"),
        " when:"
      ),
      BulletList(
        "The parent should control the structure",
        "You need flexibility in what gets rendered",
        "You're building \"container\" components (cards, modals, panels)"
      ),
      Para("For example, a user avatar might use props:"),
      CodeBlock(
        `h(Avatar, { name: "John", imageUrl: "/john.jpg", size: "large" })`
      ),
      Para("But a dropdown menu would use slots:"),
      CodeBlock(
`h(Dropdown, { trigger: "Click me" }, [
  h("a", { href: "/profile" }, ["Profile"]),
  h("a", { href: "/settings" }, ["Settings"]),
  h("hr"),
  h("a", { href: "/logout" }, ["Logout"])
])`
      ),
      Para(
        "The parent controls what menu items appear and how they look."
      ),

      // Combining Props and Slots
      Section("Combining Props and Slots"),
      Para("Most real components use both props and slots:"),
      CodeBlock(
`const Accordion = defineComponent({
  state() {
    return { isOpen: false };
  },

  toggle() {
    this.updateState({ isOpen: !this.state.isOpen });
  },

  render() {
    return h("div", { class: "accordion" }, [
      h("button", { 
        class: "accordion-header",
        on: { click: () => this.toggle() }
      }, [
        h("span", {}, [this.props.title]),  // Props for title
        h("span", {}, [this.state.isOpen ? "▼" : "▶"])
      ]),
      this.state.isOpen 
        ? h("div", { class: "accordion-content" }, [
            hSlot()  // Slots for content
          ])
        : null
    ]);
  }
});`
      ),
      Para("Usage:"),
      CodeBlock(
`h(Accordion, { title: "Frequently Asked Questions" }, [
  h("dl", {}, [
    h("dt", {}, ["What is Betal-FE?"]),
    h("dd", {}, ["A lightweight frontend framework."]),
    h("dt", {}, ["Is it production ready?"]),
    h("dd", {}, ["Yes!"])
  ])
])`
      ),

      // Summary
      Section("Summary"),
      Para("Slots make your components flexible:"),
      BulletList(
        ["Use ", Code("hSlot()"), " in your component where children should render"],
        ["Pass fallback content as an array: ", Code("hSlot([...fallbackElements])")],
        "Children passed to your component automatically fill the slot",
        "Combine with props for maximum flexibility"
      ),
      Para(
        "The power of slots is composition. You build small, focused components and combine them in ways the component author didn't need to anticipate. This leads to more reusable code and cleaner architecture."
      ),

      // Navigation
      h("div", { class: "mt-10 flex gap-4" }, [
        h("a", {
          href: "#/docs/routing",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Routing →"])
      ])
    ]);
  }
});
