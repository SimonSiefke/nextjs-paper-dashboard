import SidebarNavigation from '../components/Navigation/Sidebar'
import { routes } from '../variables'

export default ({ name, children }) => [
  <SidebarNavigation key="sidebar" />,
  <main key="main">
    <h1>{routes.overview.slug}</h1>
    {children}
  </main>
]
