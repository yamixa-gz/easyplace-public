const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('api.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

// server.listen(4000, () => {
//     console.log('JSON Server is running')
// })
// server.use(jsonServer.rewriter({
//     '/auth/me': '/me'
// }));