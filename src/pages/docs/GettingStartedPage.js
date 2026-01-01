import { defineComponent, h } from 'betal-fe';
import { Section, Para, Strong, Code, BulletList, NumberedList, ListItemWithBold, CodeBlock, Subsection } from '../../components/docs/DocElements.js';

export const GettingStartedPage = defineComponent({
  onMounted() {
    // Apply Prism syntax highlighting after component mounts
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Getting Started"]),
      
      Para("This guide will walk you through setting up Betal-FE and creating your first application. By the end, you'll understand the basic structure of a Betal-FE app and be ready to build more complex interfaces."),

      Section("Installation"),
      Para("Betal-FE is distributed through npm. Open your terminal and run:"),

      CodeBlock("npm install betal-fe", "bash"),

      Para("That's it! Betal-FE has minimal dependencies and installs quickly."),

      Section("Setting Up Your Project"),
      Para("Let's create a simple project from scratch. First, create a new folder and initialize it:"),

      CodeBlock(`mkdir my-first-app
cd my-first-app
npm init -y
npm install betal-fe`, "bash"),

      Para("Now create two files in your project folder:"),

      h("p", { class: "mt-6 text-sm font-semibold text-white" }, ["index.html"]),
      CodeBlock(`<!DOCTYPE html>
<html>
<head>
  <title>My First Betal-FE App</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./app.js"></script>
</body>
</html>`, "html"),

      h("p", { class: "mt-6 text-sm font-semibold text-white" }, ["app.js"]),
      CodeBlock(`import { createBetalApp, defineComponent, h } from 'betal-fe';

const App = defineComponent({
  render() {
    return h("h1", {}, ["Hello from Betal-FE!"]);
  }
});

createBetalApp(App).mount(document.getElementById("app"));`),

      Para("To see your app, you'll need a development server. We recommend Vite for its simplicity:"),

      CodeBlock(`npm install -D vite
npx vite`, "bash"),

      Para("Open your browser to the URL shown in the terminal (usually ", Code("http://localhost:5173"), "), and you should see \"Hello from Betal-FE!\" on the screen."),

      Section("Understanding Your First App"),
      
      Subsection("The Import Statement"),
      CodeBlock("import { createBetalApp, defineComponent, h } from 'betal-fe';"),

      Para("This brings in three essential functions from Betal-FE:"),

      BulletList(
        [h("strong", { class: "font-mono text-sm font-semibold text-white" }, ["defineComponent"]), " - Creates a new component"],
        [h("strong", { class: "font-mono text-sm font-semibold text-white" }, ["h"]), " - Creates virtual DOM elements (the \"h\" stands for \"hyperscript\")"],
        [h("strong", { class: "font-mono text-sm font-semibold text-white" }, ["createBetalApp"]), " - Initializes your application"]
      ),

      Subsection("The h() Function"),
      Para("The ", Code("h"), " function is how you describe UI elements. It takes three arguments:"),

      CodeBlock("h(tag, props, children)"),

      BulletList(
        [Strong("tag"), " - What HTML element to create (like \"div\", \"h1\", \"button\")"],
        [Strong("props"), " - An object of attributes and event handlers"],
        [Strong("children"), " - An array of child elements or text"]
      ),

      Section("Adding Interactivity"),
      Para("A static \"Hello World\" is nice, but let's make something interactive. Let's create a button that counts how many times it's been clicked."),

      CodeBlock(`import { createBetalApp, defineComponent, h } from 'betal-fe';

const Counter = defineComponent({
  state() {
    return { count: 0 };
  },

  render() {
    return h("div", {}, [
      h("p", {}, [\`You clicked \${this.state.count} times\`]),
      h("button", {
        on: { click: () => this.updateState({ count: this.state.count + 1 }) }
      }, ["Click me"])
    ]);
  }
});

createBetalApp(Counter).mount(document.getElementById("app"));`),

      Para("Save and look at your browser - you now have a working counter! Click the button and watch the number increase."),

      Subsection("What's New Here?"),
      Para(Strong("State"), " - We added a ", Code("state"), " method that returns an object with our initial data. State is data that can change over time and affects what we display."),

      Para(Strong("Accessing State"), " - Inside ", Code("render"), ", we use ", Code("this.state.count"), " to read the current value."),

      Para(Strong("Updating State"), " - When the button is clicked, we call ", Code("this.updateState()"), " with the new value. This tells Betal-FE that something changed, and it automatically re-renders the component."),

      Section("What's Next?"),
      Para("You now understand the basics of Betal-FE. In the next section, we'll dive deeper into Components - learning how to break your UI into reusable pieces, pass data between components, and use lifecycle hooks."),

      h("div", { class: "mt-8 flex gap-4" }, [
        h("a", {
          href: "#/docs/components",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Components →"])
      ])
    ]);
  }
});
