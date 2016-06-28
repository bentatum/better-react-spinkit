import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as Container } from '../src/Container'
import { default as Fade } from 'react-fade'

const renderer = TestUtils.createRenderer()

describe('Container', () => {
  let fade, outer, style

  beforeEach(() => {
    renderer.render(<Container css='.testing { width: auto; }' />)
    outer = renderer.getRenderOutput()
    style = outer.props.children[0]
    fade = outer.props.children[1]
  })

  it('renders outer as a span', () => {
    expect(outer.type).toEqual('span')
  })

  it('renders a style tag', () => {
    expect(style.type).toEqual('style')
  })

  it('fades in by default', () => {
    expect(fade.type).toEqual(Fade)
    expect(fade.props.in).toEqual(true)
  })
})
