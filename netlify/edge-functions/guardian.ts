import type { Context, Config } from "@netlify/edge-functions";

// Speed bump, not a wall: User-Agent strings are trivially spoofed by anyone
// determined to scrape this site. This blocks the lazy/default case (bots
// that identify themselves honestly, or send no User-Agent at all) and sets
// baseline security headers on every response. Real bot management (e.g. a
// managed WAF in front of the site) is the next tier up if this isn't enough.
const BLOCKED_UA_SUBSTRINGS = [
  // bulk AI-training crawlers (kept in sync with robots.txt's Disallow list)
  "gptbot",
  "claudebot",
  "google-extended",
  "applebot-extended",
  "ccbot",
  "bytespider",
  "amazonbot",
  "meta-externalagent",
  "diffbot",
  "imagesiftbot",
  "timpibot",
  // commercial SEO/backlink scrapers
  "ahrefsbot",
  "semrushbot",
  "mj12bot",
  "dotbot",
  // generic scripting/scraping toolkits
  "python-requests",
  "scrapy",
  "httrack",
  "libwww-perl",
  "wget/",
];

export default async (req: Request, context: Context) => {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  if (!ua) {
    return new Response("Access denied: a User-Agent header is required.", {
      status: 403,
      headers: { "content-type": "text/plain" },
    });
  }

  if (BLOCKED_UA_SUBSTRINGS.some((needle) => ua.includes(needle))) {
    return new Response(
      "Access denied. This site does not license bulk automated scraping or AI-training crawls. " +
        "See /robots.txt and /llms.txt for the machine-readable policy, or contact the site owner for licensed access.",
      { status: 403, headers: { "content-type": "text/plain" } },
    );
  }

  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "DENY");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  );
  headers.set(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data:; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src https://fonts.gstatic.com; script-src 'self'; " +
      "connect-src 'self'; frame-ancestors 'none'; base-uri 'self'",
  );

  return new Response(response.body, { status: response.status, headers });
};

export const config: Config = {
  path: "/*",
};
