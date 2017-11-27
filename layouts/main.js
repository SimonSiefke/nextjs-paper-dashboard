import SidebarNavigation from '../components/Navigation/Sidebar'

import { sidebarLinks } from '../variables'
import React, { Children, Component } from 'react'

class Main extends Component {
  render() {
    const { children, ...props } = this.props
    // if (router.pathname === props.href) {
    //   console.log(props.href)
    //   console.log('yeah')
    // }
    return [
      <SidebarNavigation links={sidebarLinks} key="sidebar" />,
      <main key="main">
        {console.log(props)}
        <h1>routes</h1>
        {children}
      </main>
    ]
  }
}

export default Main
