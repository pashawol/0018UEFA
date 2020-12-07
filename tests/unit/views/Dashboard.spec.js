import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Index from '@/views/Index'


Vue.use(CoreuiVue)

describe('Index.vue', () => {
  it('has a name', () => {
    expect(Index.name).toBe('Index')
  })
  it('has a created hook', () => {
    expect(typeof Index.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Index.data).toMatch('function')
    const defaultData = Index.data()
    expect(defaultData.selected).toMatch('Month')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Index', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.findComponent(Index)).toBeTruthy()
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.find('#traffic').text()).toMatch('Traffic')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.element).toMatchSnapshot()
  })
})
