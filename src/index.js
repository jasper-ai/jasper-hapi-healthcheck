import pkg from '../package.json'

module.exports.register = (server, {
  auth: auth = false
}, next) => {
  server.route([
    {
      method: 'GET',
      path: '/healthcheck',
      config: {
        auth,
        handler (req, reply) {
          reply({ status: 'ok' })
        }
      }
    }
  ])

  next()
}

module.exports.register.attributes = {
  name: 'jasper-hapi-healthcheck',
  version: pkg.version
}
