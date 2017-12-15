import { default as React } from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { default as expect } from 'expect'
import { default as RotatingPlane } from '..'
import { default as Base } from '../../Base'

const renderer = createRenderer()

describe('RotatingPlane', () => {
  let tree

  beforeEach(() => {
    renderer.render(<RotatingPlane />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Base)
  })
})
