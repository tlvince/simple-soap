const pify = require('pify')
const soap = require('soap')

const basicAuth = (username, password) => (
  'Basic ' + new Buffer(username + ':' + password).toString('base64')
)

module.exports = (config, args) => {
  args = args || {}

  const requestOpts = config.request || {}

  const headers = {
    Authorization: basicAuth(config.username, config.password)
  }

  const clientOpts = {
    wsdl_options: requestOpts,
    wsdl_headers: headers
  }

  const methodOpts = Object.assign({}, requestOpts, {
    headers
  })

  return pify(soap.createClient)(config.url, clientOpts)
    .then(client => pify(client[config.method])(args, methodOpts))
}
