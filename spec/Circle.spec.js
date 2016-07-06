import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Circle } from '../src'
import { default as BaseCircle } from '../src/BaseCircle'

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
