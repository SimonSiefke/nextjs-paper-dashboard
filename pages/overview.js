import Link from '../components/Link'
import Page from '../layouts/main'
export default () => (
  <Page>
    <nav>
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

      <ul>
        <li>
          <Link activeClassName="active" href="/overview">
            <a className="nav-link home-link">Home</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Page>
)
