import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children, Component } from 'react'

// const ActiveLink = ({ router, children, ...props }) => {
//   shouldComponentUpdate(nextProps, nextState){
//     return false
//   }

//   const child = Children.only(children)

//   let className = child.props.className || ''
//   if (router.pathname === props.href && props.activeClassName) {
//     className = `${className} ${props.activeClassName}`.trim()
//   }

//   delete props.activeClassName
//   console.log(props.href)

//   return <Link {...props}>{React.cloneElement(child, { className })}</Link>
// }

class ActiveLink extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    const { children, router, ...props } = this.props
    const child = Children.only(children)

    let className = child.props.className || ''
    if (router.pathname === props.href && props.activeClassName) {
      className = `${className} ${props.activeClassName}`.trim()
    }

    delete props.activeClassName
    console.log(props.href)

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>
  }
}
export default withRouter(ActiveLink)
