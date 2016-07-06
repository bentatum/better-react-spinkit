import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { FoldingCube } from '../src'
import { default as Base } from '../src/Base'

const renderer = TestUtils.createRenderer()

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
