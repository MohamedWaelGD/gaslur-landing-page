import { renderApplication } from "@angular/platform-server"; // if using standalone bootstrap
import bootstrap from "../dist/gaslur-landing-page/server/server.mjs"; // path to server bundle

export async function onRequest(context) {
  const url = new URL(context.request.url);

  const indexHtml = await context.env.ASSETS.fetch(
    new Request("/", context.request)
  );
  const document = await indexHtml.text();

  const html = await renderApplication(bootstrap, {
    document,
    url: url.pathname,
  });

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}
