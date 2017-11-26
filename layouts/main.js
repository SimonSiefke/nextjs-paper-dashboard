import SidebarNavigation from '../components/Navigation/Sidebar'

import { sidebarLinks } from '../variables'

export default ({ name, children }) => [
  <SidebarNavigation links={sidebarLinks} key="sidebar" />,
  <main key="main">
    <h1>routes</h1>
    {children}
  </main>
]
