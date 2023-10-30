import{L as s,F as O,w as g,a as n,u as r,e as c}from"./index-f864054a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-7a82cde0.js";import"./index-03bbf7d1.js";import"./uniq-17642f77.js";import"./index-d38bc732.js";import"./jsx-runtime-abfa3b14.js";import"./index-9d475cdf.js";const m={actual:"zzzzz",expected:"apple",result:[s.nowhere,s.nowhere,s.nowhere,s.nowhere,s.nowhere]},v={actual:"apple",expected:"apple",result:[s.guessed,s.guessed,s.guessed,s.guessed,s.guessed]},k={actual:"ppzel",expected:"apple",result:[s.elsewhere,s.guessed,s.nowhere,s.elsewhere,s.elsewhere]},B={actual:"pppel",expected:"a-pp-le",result:[s.nowhere,s.guessed,s.guessed,s.elsewhere,s.elsewhere]},j="abrakadabra",q={type:"guess",answer:j},Z={title:"Flashcard/Guess",component:O,parameters:{layout:"centered",background:"dark"},argTypes:{type:{table:{disable:!0}}}},w=async(a,e)=>{for(let t=0;t<a.length;t++){const h=a[t];await n(async()=>{await c(e.getAllByRole("term")[t]).toHaveFocus(),await r.keyboard(h)})}},y=async(a,e)=>{const t=e.getAllByRole("term");await n(()=>{t.forEach((h,L)=>{c(h).toHaveAttribute("data-guessed-state",a[L])})})},o={args:q},d={args:{type:"guess",answer:"abra-ka-dabra"}},l={args:{type:"guess",answer:m.expected},play:async({canvasElement:a})=>{const e=g(a);await w(m.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(m.result,e),c(e.getByRole("guessed-check")).toBeVisible()}},u={args:{type:"guess",answer:k.expected},play:async({canvasElement:a})=>{const e=g(a);await w(k.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(k.result,e),c(e.getByRole("guessed-check")).toBeVisible()}},i={args:{type:"guess",answer:B.expected},play:async({canvasElement:a})=>{const e=g(a);await w(B.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(B.result,e),c(e.getByRole("guessed-check")).toBeVisible()}},p={args:{type:"guess",answer:v.expected},play:async({canvasElement:a})=>{const e=g(a);await w(v.actual,e),await n(async()=>{await r.click(e.getByRole("guessed-check"))}),await y(v.result,e),c(e.getByRole("guessed-check",{hidden:!0})).not.toBeVisible()}};var R,A,x;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args
}`,...(x=(A=o.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var b,E,W;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "guess",
    answer: "abra-ka-dabra"
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var G,D,M;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var T,F,f;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(f=(F=u.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var S,V,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(V=i.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var z,_,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const $=["Default","DefaultWithDashedWord","GuessedNone","GuessedAndMissed","GuessedAndMissedWithDash","AllGuessed"];export{p as AllGuessed,o as Default,d as DefaultWithDashedWord,u as GuessedAndMissed,i as GuessedAndMissedWithDash,l as GuessedNone,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Guess.stories-73754de2.js.map
