import { handle } from 'hono/vercel'
import app from '../server/src/index'

// Mount the Hono app at /api so routes like app.get('/') become /api and app.get('/foo') become /api/foo
const apiApp = app.basePath('/api')

export const runtime = 'edge'

export const GET = handle(apiApp)
export const POST = handle(apiApp)
export const PUT = handle(apiApp)
export const PATCH = handle(apiApp)
export const DELETE = handle(apiApp)
export const OPTIONS = handle(apiApp)
export const HEAD = handle(apiApp)
