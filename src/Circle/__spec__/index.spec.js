import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as Circle } from '..'
import { default as BaseCircle } from '../../Base/Circle'

const renderer = TestUtils.createRenderer()

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
