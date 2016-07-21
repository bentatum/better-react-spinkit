import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as Base } from '../Base'
import { default as Fade } from 'react-fade'

const renderer = TestUtils.createRenderer()

describe('Base', () => {
  let fade, outer, style

  beforeEach(() => {
    renderer.render(<Base css='.testing { width: auto; }' />)
    outer = renderer.getRenderOutput()
    style = outer.props.children[0]
    fade = outer.props.children[1]
  })

  it('renders outer as a span', () => {
    expect(outer.type).toEqual('span')
  })

  it('renders a style tag', () => {
    expect(style.type).toEqual('style')
  })

  it('fades in by default', () => {
    expect(fade.type).toEqual(Fade)
    expect(fade.props.out).toEqual(false)
    expect(fade.props.duration).toEqual(1.5)
  })

  context('when using custom fade props', () => {
    beforeEach(() => {
      renderer.render(
        <Base
          css='.testing { width: auto; }'
          fade={{ duration: 2 }}
        />
      )
      outer = renderer.getRenderOutput()
      fade = outer.props.children[1]
    })

    it('can have custom fade properties', () => {
      expect(fade.props.duration).toEqual(2)
    })
  })
})
