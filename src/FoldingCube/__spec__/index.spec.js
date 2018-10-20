import { default as React } from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { default as expect } from 'expect'
import { default as FoldingCube } from '..'
import { default as Base } from '../../Base'

const renderer = createRenderer()

describe('FoldingCube', () => {
  let tree

  beforeEach(() => {
    renderer.render(<FoldingCube />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Base)
  })
})
