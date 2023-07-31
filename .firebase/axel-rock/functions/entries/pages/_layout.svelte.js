import { c as create_ssr_component } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../css/style.css';",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header></header> <main>${slots.default ? slots.default({}) : ``}</main> <footer></footer>`;
});
export {
  Layout as default
};
