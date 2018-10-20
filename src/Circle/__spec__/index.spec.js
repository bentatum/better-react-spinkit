import { default as React } from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { default as expect } from 'expect'
import { default as Circle } from '..'
import { default as BaseCircle } from '../../Base/Circle'

const renderer = createRenderer()

describe('Circle', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Circle />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(BaseCircle)
  })
})
