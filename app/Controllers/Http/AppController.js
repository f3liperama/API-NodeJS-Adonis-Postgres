'use strict'

class AppController {
  async index({ request }) {
    return 'Hello World'
  }
}

module.exports = AppController
