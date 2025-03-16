import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D8H52GL8.js","_app/immutable/chunks/contexts.DjnwV6Em.js","_app/immutable/chunks/scheduler.DukwnokS.js","_app/immutable/chunks/entry.D6sFvBD-.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.Dxfk81-q.js","_app/immutable/chunks/index.DVaIsBVA.js","_app/immutable/chunks/each.BCImZTZ_.js","_app/immutable/chunks/kit-docs.sEQMu921.js","_app/immutable/chunks/clsx.B-dksMZM.js"];
export const stylesheets = ["_app/immutable/assets/0.olM3H4u9.css"];
export const fonts = ["_app/immutable/assets/Inter-VF.roman-latin.Cv6u-1wI.woff2","_app/immutable/assets/Inter-VF.italic-latin.IyEm1sv2.woff2","_app/immutable/assets/FiraCode-VF.11PaB-mS.woff2","_app/immutable/assets/FiraCode-VF.BL1FdLIh.woff"];
