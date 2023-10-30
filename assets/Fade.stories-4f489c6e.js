import{F as c,w as d,e as r,u as t}from"./index-edadab71.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-7a82cde0.js";import"./index-03bbf7d1.js";import"./uniq-17642f77.js";import"./index-d38bc732.js";import"./jsx-runtime-abfa3b14.js";import"./index-9d475cdf.js";const B={title:"Flashcard",component:c,parameters:{layout:"centered",background:"dark"},argTypes:{type:{table:{disable:!0}}}},a={args:{type:"fade",answer:"answer"}};a.play=async({canvasElement:n})=>{const e=d(n);await r(e.getByRole("flashcard-answer",{hidden:!0})).not.toBeVisible(),await t.click(e.getByRole("flashcard-clue")),await r(e.getByRole("flashcard-answer")).toBeVisible(),await t.click(e.getByRole("flashcard-clue")),await r(e.getByRole("flashcard-answer",{hidden:!0})).not.toBeVisible()};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: "fade",
    answer: "answer"
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const b=["Fade"];export{a as Fade,b as __namedExportsOrder,B as default};
//# sourceMappingURL=Fade.stories-4f489c6e.js.map
