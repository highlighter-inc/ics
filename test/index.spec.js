import { expect } from 'chai'
import { createEvent } from '../src'

const validAttributes = { start: [2000, 10, 5, 5, 0], duration: { hours: 1 } }

describe('ics', () => {
  describe('.createEvent', () => {
    it('returns a value or throws', () => {
      expect(() => createEvent()).to.throw()
      expect(createEvent(validAttributes)).to.be.a('string')
    })
  })
})
