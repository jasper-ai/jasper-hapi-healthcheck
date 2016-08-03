import hapi from 'hapi'
import test from 'ava'

import plugin from './index'

const server = new hapi.Server()
server.connection()

test('healthcheck', (t) => {
  return new Promise((resolve) => {
    server.register(plugin, (error) => {
      if (error) t.fail(error.message)
      else t.pass('ok')

      server.inject({
        method: 'GET',
        url: '/healthcheck'
      }, (response) => {
        if (response.error) t.fail(response.error)
        else t.pass(response.result.status)
        resolve()
      })
    })
  })
})
