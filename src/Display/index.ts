// src/index.ts
// @ts-ignore
import http from "http";
// @ts-ignore
import url from "url";
// @ts-ignore
import querystring from "querystring";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
require("dotenv").config();

const { API_KEY, API_SECRET_KEY, SCOPES, SHOP, HOST, HOST_SCHEME } =
  process.env;

Shopify.Context.initialize({
  API_KEY,
  API_SECRET_KEY,
  SCOPES: [SCOPES],
  HOST_NAME: HOST.replace(/https?:\/\//, ""),
  HOST_SCHEME,
  IS_EMBEDDED_APP: true,
  API_VERSION: ApiVersion.April22, // all supported versions are available, as well as "unstable" and "unversioned"
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};

async function onRequest(
  request: http.IncomingMessage,
  response: http.ServerResponse
): Promise<void> {
  const { headers, url: req_url } = request;
  const pathName: string | null = url.parse(req_url).pathname;
  const queryString: string = String(url.parse(req_url).query);
  const query: Record<string, any> = querystring.parse(queryString);

  switch (pathName) {
    default:
      // This shop hasn't been seen yet, go through OAuth to create a session
      if (ACTIVE_SHOPIFY_SHOPS[SHOP] === undefined) {
        // not logged in, redirect to login
        response.writeHead(302, { Location: `/login` });
        response.end();
      } else {
        response.write("Hello world!");
        // Load your app skeleton page with App Bridge, and do something amazing!
      }
      return;
  } // end of default path
} // end of onRequest()

http.createServer(onRequest).listen(3000);
