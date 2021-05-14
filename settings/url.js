const settings = require('./settings.json')

export const env = 'dev'

export const apiDomain = settings.protocol + '://' + settings.domain + ':' + settings.port + '/'
export const webSocketDomain = settings.web_socket_protocol + '://' + settings.domain

console.log(webSocketDomain)