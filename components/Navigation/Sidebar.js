import { sidebarLinks } from '../../variables'
import Link from '../Link'
import PropTypes from 'prop-types'
import TableList from '../../pages/table-list'

const SideBar = ({ links }) => {
  return (
    <nav>
      <h2>Paper Dashboard</h2>
      <hr />
      <ul>
        {Object.values(links).map(({ name, icon, href }, i) => (
          <li key={i}>
            <Link activeClassName="active" href={href}>
              <a className="nav-link">
                <i className={`ti ti-${icon}`} />
                <span>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .active {
          color: #3eaf7d;
        }
        nav {
          background-color: #212120;
          display: inline-block;
        }
        h2 {
          color: white;
        }
        a {
          color: #b3b3b3;
          transition: all 0.35s;
          text-transform: uppercase;
          padding: 10px;
          display: flex;
          align-items: center;
          font-size: 1.1rem;
        }
        a:hover {
          color: white;
        }
        ul {
          margin: 2rem;
        }
        li {
          margin: 1.7rem 0;
        }
        i {
          font-size: 200%;
        }
        span {
          margin-left: 1rem;
        }
      `}</style>
    </nav>
  )
}
SideBar.propTypes = {
  links: PropTypes.object.isRequired
}
export default SideBar
