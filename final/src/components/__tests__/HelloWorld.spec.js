import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'You’ve successfully created a project with Vite + Vue 3.' } })
    expect(wrapper.text()).toContain('You’ve successfully created a project with Vite + Vue 3.')
  })
})
