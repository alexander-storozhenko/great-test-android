const settings = require('./settings.json')

export const env = 'dev'

const url = settings.protocol + '://' + settings.domain + ':' + settings.port + '/'

export const apiDomain = url
export const webSocketURL = url + 'cable'