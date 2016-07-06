import { default as uuid } from 'performance-uuid'

export default (name = 'spinner') => `brsk-${name}-${uuid()}`
