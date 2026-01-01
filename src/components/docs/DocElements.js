import { h } from 'betal-fe';

// Section heading (h2)
export const Section = (title) => 
  h("h2", { class: "mt-10 text-2xl font-semibold text-white" }, [title]);

// Subsection heading (h3)
export const Subsection = (title) => 
  h("h3", { class: "mt-8 text-xl font-semibold text-white" }, [title]);

// Paragraph
export const Para = (...content) => 
  h("p", { class: "mt-4 leading-7 text-neutral-300" }, content);

// Inline code
export const Code = (text) => 
  h("code", { class: "rounded bg-neutral-900 px-1.5 py-0.5 text-sm font-mono text-primary" }, [text]);

// Strong/bold text
export const Strong = (text) => 
  h("strong", { class: "font-semibold text-white" }, [text]);

// Code block
export const CodeBlock = (code, language = "javascript") => 
  h("div", { class: "mt-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950" }, [
    h("pre", { class: "overflow-x-auto p-4" }, [
      h("code", { class: `language-${language} text-sm` }, [code])
    ])
  ]);

// Unordered list (bullet list)
export const BulletList = (...items) => 
  h("ul", { class: "mt-4 space-y-2 text-neutral-300" }, 
    items.map(item => 
      h("li", { class: "flex gap-2" }, [
        h("span", { class: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
        h("span", {}, typeof item === 'string' ? [item] : item)
      ])
    )
  );

// Ordered list (numbered list)
export const NumberedList = (...items) => 
  h("ol", { class: "mt-4 space-y-2 text-neutral-300" }, 
    items.map((item, index) => 
      h("li", { class: "flex gap-3" }, [
        h("span", { class: "font-semibold text-primary" }, [`${index + 1}.`]),
        h("span", {}, typeof item === 'string' ? [item] : item)
      ])
    )
  );

// List item content with bold text at start
export const ListItemWithBold = (boldText, normalText) => [
  Strong(boldText),
  ` - ${normalText}`
];
