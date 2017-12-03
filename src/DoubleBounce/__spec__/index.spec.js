import { default as React } from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { default as expect } from 'expect'
import { default as DoubleBounce } from '..'
import { default as Base } from '../../Base'

const renderer = createRenderer()

describe('DoubleBounce', () => {
  let tree

  beforeEach(() => {
    renderer.render(<DoubleBounce />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Base)
  })
})
