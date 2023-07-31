import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.afed18a8.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.321044db.js"];
export const stylesheets = ["_app/immutable/assets/0.c7d492ab.css"];
export const fonts = [];