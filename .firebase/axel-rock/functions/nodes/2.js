

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.aa904014.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.321044db.js","_app/immutable/chunks/paths.0f36ea50.js"];
export const stylesheets = ["_app/immutable/assets/2.537b95c4.css"];
export const fonts = [];