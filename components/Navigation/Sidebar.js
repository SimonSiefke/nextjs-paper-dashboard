import { sidebarLinks } from '../../variables'
import Link from '../Link'
import PropTypes from 'prop-types'
import TableList from '../../pages/table-list'
import React, { Component } from 'react'
import { applyMiddleware, bindActionCreators } from 'redux'
import { connectAdvanced } from 'react-redux'
// import Link from 'next/link'
import { withRouter } from 'next/router'
// import Link from 'next/link'
const padding1 = '1rem'
const padding2 = '1.3rem'
const padding3 = '1.6rem'
const padding4 = '1.9rem'
const padding5 = '2.2rem'
const padding6 = '2.5rem'
const padding7 = '2.8rem'
const padding8 = '3.1rem'
const padding9 = '3.4rem'
const padding10 = '3.7rem'
const padding11 = '4rem'
const padding12 = '4.3rem'
const padding13 = '4.6rem'
const padding14 = '4.9rem'

class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0
    }
  }
  // shouldComponentUpdate() {
  //   return false
  // }
  componentDidMount() {
    const { router, children, ...props } = this.props
    const { links } = this.props

    Object.values(links).forEach((link, i) => {
      if (link.href === router.pathname) {
        this.setState({
          activeIndex: i
        })
      }
    })
  }
  render() {
    const { links } = this.props

    // const activeIndex = Object.values(links)
    // console.log(activeIndex)
    // const active = Object.values(links).filter(
    //   link => link.href === router.pathname
    // )
    // console.log('active', active)
    // if (router.pathname === props.href) {
    //   console.log(props.href)
    //   console.log('yeah')
    // }
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
                <a>
                  <i className={`ti ti-${icon}`} />
                  <span>{name}</span>
                </a>
              </Link>
            </li>
          ))}
          <li className="arrow" />
        </ul>
        <style jsx>{`
          // * {
          //   transition: all 3s;
          // }
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
          .arrow {
            position: absolute;
            right: 0;
            top: calc(${padding12}/2 - ${padding2});
            padding: 0;
            height: 0;
            border-top: ${padding2} solid transparent;
            border-bottom: ${padding2} solid transparent;
            border-right: ${padding2} solid #f4f3ef;
            transform: translateY(calc(${this.state.activeIndex}*${padding12}));
            transition: all 1s;
          }

          nav {
            background-color: #212120;
            display: inline-block;
          }
          header {
            color: white;
            display: flex;
            align-items: center;
            padding: ${padding3} ${padding3} ${padding3} ${padding2};
          }
          h2 {
            margin-left: 1rem;
            font-size: 1.2rem;
            letter-spacing: 0.05rem;
            font-weight: 500;
          }
          hr {
            border-color: #646463;
            margin: 0 ${padding2};
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
            position: relative;
          }
          li {
            // padding: $padding-3 0;
            padding-left: ${padding4};
            padding-right: ${padding4};
            height: ${padding12};
            display: flex;
            align-items: center;
          }
          li:nth-last-of-type(2) {
            padding-bottom: ${padding1};
          }
          i {
            line-height: ${padding4};
            font-size: ${padding3};
            font-weight: 600;
          }
          span {
            margin-left: ${padding1};
            flex: 1;
            margin-right: ${padding2};
          }
        `}</style>
      </nav>
    )
  }
}
SideBar.propTypes = {
  links: PropTypes.object.isRequired
}
export default withRouter(SideBar)
