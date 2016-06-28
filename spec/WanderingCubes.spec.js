import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { WanderingCubes } from '../src'
import { default as Container } from '../src/Container'

const renderer = TestUtils.createRenderer()

describe('WanderingCubes', () => {
  let tree

  beforeEach(() => {
    renderer.render(<WanderingCubes />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Container)
  })
})
