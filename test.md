2026-07-06T19:12:11.837632Z	▲  ○  (Static)   prerendered as static content
2026-07-06T19:12:11.837662Z	▲  ●  (SSG)      prerendered as static HTML (uses generateStaticParams)
2026-07-06T19:12:11.842249Z	▲  ƒ  (Dynamic)  server-rendered on demand
2026-07-06T19:12:12.329765Z	▲  Traced Next.js server files in: 196.321ms
2026-07-06T19:12:12.808696Z	▲  Created all serverless functions in: 477.299ms
2026-07-06T19:12:13.092136Z	▲  Collected static files (public/, static/, .next/static): 4.525ms
2026-07-06T19:12:13.277897Z	▲  Build Completed in .vercel/output [1m]
2026-07-06T19:12:13.434416Z	⚡️ Completed `npx vercel build`.
2026-07-06T19:12:13.585081Z	⚡️ Invalid prerender config for /browse/[category]
2026-07-06T19:12:13.585631Z	⚡️ Invalid prerender config for /browse/[category].rsc
2026-07-06T19:12:13.612131Z	⚡️ Invalid prerender config for /posts/[slug]
2026-07-06T19:12:13.613859Z	⚡️ Invalid prerender config for /posts/[slug].rsc
2026-07-06T19:12:14.789281Z	
2026-07-06T19:12:14.79009Z	⚡️ ERROR: Failed to produce a Cloudflare Pages build from the project.
2026-07-06T19:12:14.790229Z	⚡️ 
2026-07-06T19:12:14.790284Z	⚡️ 	The following routes were not configured to run with the Edge Runtime:
2026-07-06T19:12:14.791098Z	⚡️ 	  - /api/verdict
2026-07-06T19:12:14.791212Z	⚡️ 
2026-07-06T19:12:14.791296Z	⚡️ 	Please make sure that all your non-static routes export the following edge runtime route segment config:
2026-07-06T19:12:14.791377Z	⚡️ 	  export const runtime = 'edge';
2026-07-06T19:12:14.791427Z	⚡️ 
2026-07-06T19:12:14.791465Z	⚡️ 	You can read more about the Edge Runtime on the Next.js documentation:
2026-07-06T19:12:14.791608Z	⚡️ 	  https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
2026-07-06T19:12:14.791651Z	
2026-07-06T19:12:14.886764Z	Failed: Error while executing user command. Exited with error code: 1
2026-07-06T19:12:14.90696Z	Failed: build command exited with code: 1
2026-07-06T19:12:15.795868Z	Failed: error occurred while running build command