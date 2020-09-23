import {
  buildEvent,
  formatEvent
} from './pipeline'

export function createEvent (attributes) {
  if (!attributes) { throw new Error('Attributes argument is required') }
  const inputWithDefaults = buildEvent(attributes)
  return formatEvent(inputWithDefaults)
}
