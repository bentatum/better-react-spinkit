import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { ChasingDots } from '../src'
import { default as Container } from '../src/Container'

const renderer = TestUtils.createRenderer()

describe('ChasingDots', () => {
  let tree

  beforeEach(() => {
    renderer.render(<ChasingDots />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Container)
  })

  it('renders an outer div', () => {
    const outerDiv = tree.props.children
    expect(outerDiv.type).toEqual('div')
    expect(outerDiv.props.style).toExist()
  })

  it('renders two inner divs', () => {
    const innerDivs = tree.props.children.props.children
    expect(innerDivs.length).toEqual(2)
    expect(innerDivs[0].type).toEqual('div')
    expect(innerDivs[1].type).toEqual('div')
    expect(innerDivs[0].props.style).toExist()
    expect(innerDivs[1].props.style).toExist()
  })
})
