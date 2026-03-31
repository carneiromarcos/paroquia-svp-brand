/**
 * GitHub OAuth Proxy for Decap CMS
 * Deploy as a Cloudflare Worker
 *
 * Environment variables (set via `wrangler secret put`):
 *   CLIENT_ID     — GitHub OAuth App client ID
 *   CLIENT_SECRET — GitHub OAuth App client secret
 */

const GITHUB_AUTHORIZE = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN = "https://github.com/login/oauth/access_token";
const SCOPES = "repo,user";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function html(body) {
  return new Response(body, {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "*";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    // Step 1 — Redirect user to GitHub authorize
    if (url.pathname === "/auth") {
      const params = new URLSearchParams({
        client_id: env.CLIENT_ID,
        scope: SCOPES,
      });
      return Response.redirect(`${GITHUB_AUTHORIZE}?${params}`, 302);
    }

    // Step 2 — Exchange code for token, post back to CMS
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) return html("<p>Erro: codigo ausente.</p>");

      const tokenRes = await fetch(GITHUB_TOKEN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: env.CLIENT_ID,
          client_secret: env.CLIENT_SECRET,
          code,
        }),
      });

      const data = await tokenRes.json();

      if (data.error) {
        return html(`<p>Erro GitHub: ${data.error_description}</p>`);
      }

      const message = JSON.stringify({
        token: data.access_token,
        provider: "github",
      });

      return html(`<!DOCTYPE html>
<html><body><script>
(function() {
  function sendMessage(e) {
    window.opener.postMessage(
      "authorization:github:success:" + ${JSON.stringify(message)},
      e.origin
    );
  }
  window.addEventListener("message", sendMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script></body></html>`);
    }

    return new Response("PSVP OAuth Proxy", { status: 200 });
  },
};
