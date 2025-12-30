import { defineComponent, h } from 'betal-fe';

export const SlotsPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Slots"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Slots allow you to pass content into components, making them flexible and reusable. Instead of just passing data via props, you can pass entire chunks of UI."
      ]),

      // The Problem Slots Solve
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["The Problem Slots Solve"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Imagine building a Card component. You want a consistent card style, but different content inside each card:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Without slots, you'd need many specific props
h(Card, { 
  title: "Welcome",
  subtitle: "Get started",
  body: "Some text here...",
  footerText: "Learn more"
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "This gets messy quickly. What if you want an icon in the title? A button in the footer? Multiple paragraphs? You'd need more and more props."
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Slots solve this elegantly:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h(Card, {}, [
  h("h2", {}, ["Welcome"]),
  h("p", {}, ["Get started with our platform."]),
  h("button", {}, ["Learn more"])
]);`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Now the Card component provides the wrapper and styling, while you provide whatever content you want."
      ]),

      // Using Slots
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Using Slots"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "To accept slotted content, use the ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["hSlot"]),
        " function in your component:"
      ]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`import { defineComponent, h, hSlot } from "betal-fe";

const Card = defineComponent({
  render() {
    return h("div", { class: "card" }, [
      hSlot()  // Children passed to this component render here
    ]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Now when you use the Card:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h(Card, {}, [
  h("h2", {}, ["My Title"]),
  h("p", {}, ["My content goes here."])
]);`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["h2"]),
        " and ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["p"]),
        " elements render where ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["hSlot()"]),
        " is placed."
      ]),

      // Default Slot Content
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Default Slot Content"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["You can provide fallback content that shows when no content is passed:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`const Button = defineComponent({
  render() {
    return h("button", { class: "btn" }, [
      hSlot([
        h("span", {}, ["Click me"])  // Default content
      ])
    ]);
  }
});`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Using this component:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`// Uses default content - shows "Click me"
h(Button)

// Custom content - shows the icon and text
h(Button, {}, [
  h("span", { class: "icon" }, ["🚀"]),
  h("span", {}, ["Launch"])
])`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The array passed to ",
        h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["hSlot()"]),
        " is the fallback content. It only renders when no children are provided to the component."
      ]),

      // Practical Example: Alert Component
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Practical Example: Alert Component"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Here's a practical Alert component using slots:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Usage with different content:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),

      // Building Wrapper Components
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Building Wrapper Components"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Slots are perfect for wrapper components that provide consistent structure:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Usage:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h(Panel, { title: "User Settings" }, [
  h("label", {}, ["Username"]),
  h("input", { type: "text", value: "john_doe" }),
  h("label", {}, ["Email"]),
  h("input", { type: "email", value: "john@example.com" }),
  h("button", {}, ["Save"])
])`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The Panel handles the header styling and structure, while you control what goes in the body."
      ]),

      // Modal Component Example
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Modal Component Example"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["A modal is a great use case for slots:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Usage:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),

      // Slots vs Props
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Slots vs Props"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Use ",
        h("strong", { class: "font-semibold text-white" }, ["props"]),
        " when:"
      ]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Passing simple data (strings, numbers, booleans)"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["The component decides how to render the data"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["You have a fixed, predictable structure"])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "Use ",
        h("strong", { class: "font-semibold text-white" }, ["slots"]),
        " when:"
      ]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["The parent should control the structure"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["You need flexibility in what gets rendered"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["You're building \"container\" components (cards, modals, panels)"])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["For example, a user avatar might use props:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
            `h(Avatar, { name: "John", imageUrl: "/john.jpg", size: "large" })`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["But a dropdown menu would use slots:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h(Dropdown, { trigger: "Click me" }, [
  h("a", { href: "/profile" }, ["Profile"]),
  h("a", { href: "/settings" }, ["Settings"]),
  h("hr"),
  h("a", { href: "/logout" }, ["Logout"])
])`
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The parent controls what menu items appear and how they look."
      ]),

      // Combining Props and Slots
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Combining Props and Slots"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Most real components use both props and slots:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
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
          ])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Usage:"]),
      h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
        h("pre", { class: "overflow-x-auto p-4" }, [
          h("code", { class: "language-javascript text-sm" }, [
`h(Accordion, { title: "Frequently Asked Questions" }, [
  h("dl", {}, [
    h("dt", {}, ["What is Betal-FE?"]),
    h("dd", {}, ["A lightweight frontend framework."]),
    h("dt", {}, ["Is it production ready?"]),
    h("dd", {}, ["Yes!"])
  ])
])`
          ])
        ])
      ]),

      // Summary
      h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, ["Summary"]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, ["Slots make your components flexible:"]),
      h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, [
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Use ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["hSlot()"]), " in your component where children should render"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Pass fallback content as an array: ", h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, ["hSlot([...fallbackElements])"])])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Children passed to your component automatically fill the slot"])
        ]),
        h("li", { class: "flex gap-2" }, [
          h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          h("span", {}, ["Combine with props for maximum flexibility"])
        ])
      ]),
      h("p", { class: "mt-4 leading-7 text-neutral-300" }, [
        "The power of slots is composition. You build small, focused components and combine them in ways the component author didn't need to anticipate. This leads to more reusable code and cleaner architecture."
      ]),

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
