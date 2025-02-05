export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","ai-settings.jpg","apply-to.jpg","color-selection.jpg","favicon.ico","favicon.png","icons/file-word-2-line.svg","icons/otoslides.jpg","interface.webp","languages.jpg","logo-horiz.png","margins.jpg","marker-action-rename.webp","marker-http-add.jpg","marker-network-description.jpg","marker-osc-add-advanced.webp","marker-osc-add-dynamic.jpg","marker-osc-add.jpg","marker-osc-list-1.jpg","marker-osc-list-2.jpg","marker-osc-list-static.jpg","marker-play-noscroll.webp","marker-rename.jpg","marker-scroll-offset.jpg","marker-toggle.webp","markers-right-click.jpg","network-dd.webp","network-settings.jpg","network.jpg","numbers/1b.jpg","numbers/2.jpg","numbers/3.jpg","numbers/3b.jpg","numbers/4.jpg","numbers/5.jpg","numbers/8.jpg","numbers/marker-action-rename.jpg","otoslides.jpg","otoview-1.jpg","otoview-2.jpg","overlay-title-bar.jpg","overlay-title.jpg","p2p-cs.webp","ppt-settings.jpg","registration.webp","rundown-detail.webp","rundown-global-tools.webp","rundown-tools.jpg","search-small.jpg","search.webp","settings-controllers.webp","show-timer.webp","speed-settings.webp","toolbar-noprompting.jpg","toolbar-prompting.webp"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.CTodcTlj.js","app":"_app/immutable/entry/app.7ZCGiI6t.js","imports":["_app/immutable/entry/start.CTodcTlj.js","_app/immutable/chunks/entry.BcgtWjZD.js","_app/immutable/chunks/scheduler.DukwnokS.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.7ZCGiI6t.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.DukwnokS.js","_app/immutable/chunks/index.DVaIsBVA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
