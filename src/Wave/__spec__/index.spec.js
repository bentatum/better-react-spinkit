import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as Wave } from '..'
import { default as Base } from '../../Base'

const renderer = TestUtils.createRenderer()

describe('Wave', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Wave />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Base)
  })
})
