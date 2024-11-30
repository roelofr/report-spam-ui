import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '@/components/UiNav.vue'

describe('NavBar', () => {
  it('renders properly', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toContain('Report Abuse Helper')
  })
})
