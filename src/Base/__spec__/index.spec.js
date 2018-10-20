import { default as React } from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { default as expect } from 'expect'
import { default as Base } from '..'

const renderer = createRenderer()

describe('Base', () => {
  let outer, style

  beforeEach(() => {
    renderer.render(<Base css='.testing { width: auto; }' />)
    outer = renderer.getRenderOutput()
    style = outer.props.children[0]
  })

  it('renders outer as a span', () => {
    expect(outer.type).toEqual('span')
  })

  it('renders a style tag', () => {
    expect(style.type).toEqual('style')
  })
})
