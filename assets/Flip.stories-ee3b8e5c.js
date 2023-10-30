import{F as p,w as i,u as n,e as c}from"./index-f864054a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-7a82cde0.js";import"./index-03bbf7d1.js";import"./uniq-17642f77.js";import"./index-d38bc732.js";import"./jsx-runtime-abfa3b14.js";import"./index-9d475cdf.js";const h={title:"Flashcard",component:p,parameters:{layout:"centered",background:"dark"},argTypes:{type:{table:{disable:!0}}}},a={args:{type:"flip",answer:"answer"}};a.play=async({canvasElement:o})=>{const e=i(o);await n.click(e.getByRole("flashcard-clue")),await c(e.getByRole("flashcard-answer")).toBeVisible()};var r,t,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    type: "flip",
    answer: "answer"
  }
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const b=["Flip"];export{a as Flip,b as __namedExportsOrder,h as default};
//# sourceMappingURL=Flip.stories-ee3b8e5c.js.map
