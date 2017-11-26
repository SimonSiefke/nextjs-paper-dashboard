import SidebarNavigation from '../components/Navigation/Sidbar'
export default ({ name, children }) => [
  <SidebarNavigation />,
  <main>
    <h1>{name}</h1>
    {children}
  </main>
]
