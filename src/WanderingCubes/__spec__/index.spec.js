import { default as React } from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { default as expect } from 'expect'
import { default as WanderingCubes } from '..'
import { default as Base } from '../../Base'

const renderer = createRenderer()

describe('WanderingCubes', () => {
  let tree

  beforeEach(() => {
    renderer.render(<WanderingCubes />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Base)
  })
})
