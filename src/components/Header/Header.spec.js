import Header from './Header'

describe('Header Component', () => {
  let component
  beforeEach(() => {
    const props = { title: 'lab' }
    component = shallow(<Header {...props} />)
  })
  
  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
    component.unmount()
  })

  it('should render new title', () => {
    let title = 'new title'
    component.setProps({ title })

    expect(component.find('h1').props().children[0]).toEqual(title)
  })
})