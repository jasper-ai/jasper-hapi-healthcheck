import pkg from '../package.json'

module.exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/healthcheck',
      handler (req, reply) {
        reply({ status: 'ok' })
      }
    }
  ])

  next()
}

module.exports.register.attributes = {
  name: 'jasper-hapi-healthcheck',
  version: pkg.version
}
