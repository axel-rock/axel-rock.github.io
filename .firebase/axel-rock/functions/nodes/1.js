

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cfcf17f0.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.321044db.js","_app/immutable/chunks/singletons.0236be67.js","_app/immutable/chunks/paths.f3bf7b7c.js"];
export const stylesheets = [];
export const fonts = [];
