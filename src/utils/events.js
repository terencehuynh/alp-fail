const EventEmitter = require('events')

const EVENT_NAMES = {
  SET_HEADER_TITLE: 'set-header-title',
}
const ee = new EventEmitter()

module.exports = {
  Emitter: ee,
  EVENT_NAMES,
}
