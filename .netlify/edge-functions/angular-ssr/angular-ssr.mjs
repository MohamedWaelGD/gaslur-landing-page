
  import "./polyfill.mjs";
  
    import { netlifyAppEngineHandler } from "../../../dist/gaslur-landing-page/server/server.mjs";
    import "./fixup-event.mjs";

    export default netlifyAppEngineHandler;
    
  export const config = {
    path: "/*",
    excludedPath: ["/.netlify/*","/chunk-WIUYFELK.js","/chunk-WNKTNJOK.js","/favicon.ico","/home/index.html","/images/auctions/unsplash_7pQszt9KiEY.png","/images/auctions/unsplash_7pQszt9KiEY.webp","/images/auctions/unsplash_9XngoIpxcEo.png","/images/auctions/unsplash_9XngoIpxcEo.webp","/images/auctions/unsplash_ruJm3dBXCqw.png","/images/auctions/unsplash_ruJm3dBXCqw.webp","/images/auctions/unsplash_wN9DU73b8_s.png","/images/auctions/unsplash_wN9DU73b8_s.webp","/images/Ellipse 426.png","/images/getting-started/archive-24.svg","/images/getting-started/file-media-24.svg","/images/getting-started/rocket-24.svg","/images/getting-started/shield-check-24.svg","/images/unsplash_OG44d93iNJk.jpg","/images/unsplash_OG44d93iNJk.webp","/index.csr.html","/main-BPTAKUJY.js","/styles-CPLFYORS.css","/","/home"],
    generator: "@netlify/angular-runtime@3.0.1",
    name: "Angular SSR",
    cache: "manual",
  };
  