import app from '../server/src/index'

/**
 * Vercel serverless handler for Hono.
 * Rewrites /api/* to /* so the Hono app sees the same paths as in local dev (proxy strips /api).
 */
export default {
  fetch(request: Request) {
    const url = new URL(request.url)
    const pathname = url.pathname.replace(/^\/api/, '') || '/'
    const newUrl = new URL(pathname + url.search, url.origin)
    const rewritten = new Request(newUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    })
    return app.fetch(rewritten)
  },
}
