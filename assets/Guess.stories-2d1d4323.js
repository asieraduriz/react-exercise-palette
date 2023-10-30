import{L as s,F as O,w as g,a as n,u as r,e as c}from"./index-edadab71.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-7a82cde0.js";import"./index-03bbf7d1.js";import"./uniq-17642f77.js";import"./index-d38bc732.js";import"./jsx-runtime-abfa3b14.js";import"./index-9d475cdf.js";const m={actual:"zzzzz",expected:"apple",result:[s.nowhere,s.nowhere,s.nowhere,s.nowhere,s.nowhere]},v={actual:"apple",expected:"apple",result:[s.guessed,s.guessed,s.guessed,s.guessed,s.guessed]},k={actual:"ppzel",expected:"apple",result:[s.elsewhere,s.guessed,s.nowhere,s.elsewhere,s.elsewhere]},B={actual:"pppel",expected:"a-pp-le",result:[s.nowhere,s.guessed,s.guessed,s.elsewhere,s.elsewhere]},X={title:"Flashcard/Guess",component:O,parameters:{layout:"centered",background:"dark"},argTypes:{type:{table:{disable:!0}}}},w=async(a,e)=>{for(let t=0;t<a.length;t++){const h=a[t];await n(async()=>{await c(e.getAllByRole("term")[t]).toHaveFocus(),await r.keyboard(h)})}},y=async(a,e)=>{const t=e.getAllByRole("term");await n(()=>{t.forEach((h,L)=>{c(h).toHaveAttribute("data-guessed-state",a[L])})})},o={args:{type:"guess",answer:"apple"}},l={args:{type:"guess",answer:"a-pple"}},u={args:{type:"guess",answer:m.expected},play:async({canvasElement:a})=>{const e=g(a);await w(m.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(m.result,e),c(e.getByRole("guessed-check")).toBeVisible()}},d={args:{type:"guess",answer:k.expected},play:async({canvasElement:a})=>{const e=g(a);await w(k.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(k.result,e),c(e.getByRole("guessed-check")).toBeVisible()}},i={args:{type:"guess",answer:B.expected},play:async({canvasElement:a})=>{const e=g(a);await w(B.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(B.result,e),c(e.getByRole("guessed-check")).toBeVisible()}},p={args:{type:"guess",answer:v.expected},play:async({canvasElement:a})=>{const e=g(a);await w(v.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(v.result,e),c(e.getByRole("guessed-check",{hidden:!0})).not.toBeVisible()}};var R,A,x;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "guess",
    answer: "apple"
  }
}`,...(x=(A=o.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var E,W,G;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: "guess",
    answer: "a-pple"
  }
}`,...(G=(W=l.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var b,D,M;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "guess",
    answer: guessedNone.expected
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await WordTyper(guessedNone.actual, canvas);
    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });
    await AssessResult(guessedNone.result, canvas);
    expect(canvas.getByRole("guessed-check")).toBeVisible();
  }
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var T,F,f;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "guess",
    answer: guessedAndMissed.expected
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await WordTyper(guessedAndMissed.actual, canvas);
    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });
    await AssessResult(guessedAndMissed.result, canvas);
    expect(canvas.getByRole("guessed-check")).toBeVisible();
  }
}`,...(f=(F=d.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var V,S,z;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: "guess",
    answer: guessedAndMissedWithDash.expected
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await WordTyper(guessedAndMissedWithDash.actual, canvas);
    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });
    await AssessResult(guessedAndMissedWithDash.result, canvas);
    expect(canvas.getByRole("guessed-check")).toBeVisible();
  }
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var N,_,H;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: "guess",
    answer: allGuessed.expected
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await WordTyper(allGuessed.actual, canvas);
    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });
    await AssessResult(allGuessed.result, canvas);
    expect(canvas.getByRole("guessed-check", {
      hidden: true
    })).not.toBeVisible();
  }
}`,...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const Y=["Default","DefaultWithDashedWord","GuessedNone","GuessedAndMissed","GuessedAndMissedWithDash","AllGuessed"];export{p as AllGuessed,o as Default,l as DefaultWithDashedWord,d as GuessedAndMissed,i as GuessedAndMissedWithDash,u as GuessedNone,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Guess.stories-2d1d4323.js.map
