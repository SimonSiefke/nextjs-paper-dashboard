import { sidebarLinks } from '../../variables'
import Link from '../Link'
import PropTypes from 'prop-types'

const SideBar = ({ links }) => {
  return (
    <nav>
      <h2>Navigation</h2>

      <ul>
        {Object.keys(links).map((sidebarLink, i) => (
          <li key={i}>
            <Link
              activeClassName="active"
              href={sidebarLinks[sidebarLink].href}
            >
              <a className="nav-link">{sidebarLink}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .active {
          color: #3eaf7d;
        }
        .nav-link {
          text-decoration: none;
          padding: 10px;
          display: block;
        }
      `}</style>
    </nav>
  )
}
SideBar.propTypes = {
  links: PropTypes.object.isRequired
}
export default SideBar
