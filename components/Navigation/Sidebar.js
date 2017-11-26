import { sidebarLinks } from '../../variables'
import Link from '../Link'
import PropTypes from 'prop-types'
import TableList from '../../pages/table-list'
import React, { Component } from 'react'

class SideBar extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const { links } = this.props

    console.log('sidebar')
    return (
      <nav>
        <header>
          <div className="circle">
            <img
              src="../../static/images/nextjs-logo.png"
              alt="Logo of Next.JS"
            />
          </div>
          <h2>Paper Dashboard</h2>
        </header>
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
          .circle {
            display: inline-block;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            background: white;
            display: inline-flex;
            align-items: center;
            padding: 0.4rem;
          }
          .circle img {
            max-width: 100%;
          }
          .active {
            color: #3eaf7d;
            transition: all 0.5s;
          }
          .active:after {
            content: '';
            width: 0;
            height: 0;
            border-top: 1.2rem solid transparent;
            border-bottom: 1.2rem solid transparent;
            border-right: 1.2rem solid #f4f3ef;
            right: 0;
            transition: all 0.5s;
          }
          nav {
            background-color: #212120;
            display: inline-block;
            // padding: 1.5rem;
          }
          header {
            color: white;
            display: flex;
            align-items: center;
            padding: var(--padding-1) var(--padding-2) var(--padding-1)
              var(--padding-1);
          }
          h2 {
            margin-left: 1rem;
            font-size: 1.2rem;
            letter-spacing: 0.05rem;
            font-weight: 500;
          }
          hr {
            border-color: #646463;
            margin: 0 var(--padding-1);
          }
          a {
            color: #b3b3b3;
            transition: all 0.35s;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            position: relative;
          }
          a:not(.active):hover {
            color: white;
          }
          ul {
          }
          li {
            padding: 1.65rem 0;
            padding-left: var(--padding-2);
          }
          li:last-of-type {
            padding-bottom: var(--padding-2);
          }
          i {
            font-size: 200%;
            font-weight: 600;
          }
          span {
            margin-left: var(--padding-1);
            flex: 1;
            margin-right: var(--padding-2);
          }
        `}</style>
      </nav>
    )
  }
}
SideBar.propTypes = {
  links: PropTypes.object.isRequired
}
export default SideBar
