export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","attaboy.png","axel-rock-creative-developer-resume.pdf","contact.png","creative-developer.svg","developpeur-creatif.svg","favicon.png","fonts/circular-bold.woff2","fonts/circular-book.woff2","fonts/circular-light.woff2","logo_airbnb.svg","logo_amazon.svg","logo_attaboy.svg","logo_browser.svg","logo_converse.svg","logo_firebase.svg","logo_github.svg","logo_google.svg","logo_linkedin.png","logo_mail.svg","logo_netflix.png","logo_open-ai.svg","logo_spotify.png","logo_svelte.svg","logo_twitter.png","portfolio/amazon_campaign.png","portfolio/bg_amazon.jpg","portfolio/yeti/armBoxMask_normal.png","portfolio/yeti/armBox_amazon-pl.jpg","portfolio/yeti/armEmpty.jpg","portfolio/yeti/armEmptyMask.png","portfolio/yeti/bg.jpg","portfolio/yeti/body.jpg","portfolio/yeti/bodyMask.png","portfolio/yeti/chest.jpg","portfolio/yeti/chestMask.png","portfolio/yeti/ember_bold.woff2","portfolio/yeti/ember_regular.woff2","portfolio/yeti/eyeLids.png","portfolio/yeti/head.jpg","portfolio/yeti/headMask.png","portfolio/yeti/index.html","portfolio/yeti/snowflake1.png","portfolio/yeti/snowflake2.png","portfolio/yeti/snowflake3.png","portfolio/yeti/snowflake4.png","portfolio/yeti/snowflake5.png","portfolio/yeti/style.css","portfolio/yeti/vapor.png","portfolio/yeti/yeti.js"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".svg":"image/svg+xml",".woff2":"font/woff2",".jpg":"image/jpeg",".html":"text/html",".css":"text/css",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.2e301a69.js","app":"_app/immutable/entry/app.becc2366.js","imports":["_app/immutable/entry/start.2e301a69.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/singletons.1f7060bf.js","_app/immutable/chunks/paths.0f36ea50.js","_app/immutable/entry/app.becc2366.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.321044db.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
