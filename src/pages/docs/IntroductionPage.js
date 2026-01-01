import { defineComponent, h } from 'betal-fe';
import { Section, Para, Strong, BulletList, NumberedList, ListItemWithBold, CodeBlock } from '../../components/docs/DocElements.js';

export const IntroductionPage = defineComponent({
  onMounted() {
    if (window.Prism) window.Prism.highlightAll();
  },

  render() {
    return h("article", { class: "prose prose-invert max-w-none" }, [
      h("h1", { class: "text-3xl font-bold tracking-tight text-white sm:text-4xl" }, ["Introduction"]),
      
      Section("What is Betal-FE?"),
      Para("Betal-FE is a lightweight JavaScript framework for building user interfaces. If you've ever wanted to create interactive web applications without the complexity of larger frameworks, Betal-FE is designed for you."),
      Para("At its core, Betal-FE helps you build ", Strong("components"), " - self-contained pieces of UI that manage their own state and can be composed together to create complex applications."),

      Section("Why Betal-FE?"),
      Para("Modern web applications need to update the screen dynamically based on user interactions, data changes, and more. Doing this with plain JavaScript becomes messy quickly - you end up with spaghetti code that's hard to maintain."),
      Para("Betal-FE solves this by providing:"),

      BulletList(
        [Strong("A Virtual DOM"), " that efficiently updates only what changed on the screen"],
        [Strong("Reactive state management"), " that automatically re-renders your UI when data changes"],
        [Strong("A component model"), " that helps you organize code into reusable pieces"],
        [Strong("Built-in routing"), " for creating multi-page applications"],
        [Strong("An event system"), " for components to communicate with each other"]
      ),

      Para("The framework is intentionally small and simple. You can learn the entire API in an afternoon and start building real applications immediately."),

      Section("How This Documentation is Organized"),
      Para("This documentation is designed to take you from knowing nothing about Betal-FE to being able to build complete applications:"),

      NumberedList(
        ListItemWithBold("Getting Started", "Install Betal-FE and create your first application"),
        ListItemWithBold("Components", "Learn how to build and compose UI components"),
        ListItemWithBold("Managing State", "Understand how to handle data that changes over time"),
        ListItemWithBold("Handling Events", "Make your application interactive"),
        ListItemWithBold("Routing", "Create multi-page applications")
      ),

      Para("Each section builds on the previous one, so we recommend reading them in order if you're new to the framework."),

      Section("Prerequisites"),
      Para("Before diving in, you should be comfortable with:"),

      BulletList(
        [Strong("HTML and CSS"), " - You'll be creating web pages"],
        [Strong("JavaScript fundamentals"), " - Variables, functions, arrays, objects"],
        [Strong("ES6 features"), " - Arrow functions, destructuring, spread operator, classes"]
      ),

      Section("A Quick Taste"),
      Para("Here's what a simple Betal-FE component looks like:"),

      CodeBlock(`import { createBetalApp, defineComponent, h } from 'betal-fe';

const HelloWorld = defineComponent({
  render() {
    return h("h1", {}, ["Hello, World!"]);
  }
});

createBetalApp(HelloWorld).mount(document.getElementById('app'));`),

      Para("Don't worry if this looks unfamiliar - we'll explain every part of it in the coming sections. The important thing to notice is that the code is declarative: you describe ", h("em", { class: "italic" }, ["what"]), " you want to see on screen, and Betal-FE figures out ", h("em", { class: "italic" }, ["how"]), " to make it happen."),

      h("div", { class: "mt-8 flex gap-4" }, [
        h("a", {
          href: "#/docs/getting-started",
          class: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 hover:bg-primary-dark"
        }, ["Get Started →"])
      ])
    ]);
  }
});
