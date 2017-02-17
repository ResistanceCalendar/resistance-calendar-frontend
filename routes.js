const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('event', '/event/:slug')
