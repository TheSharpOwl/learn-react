import React from 'react'

/*
we can pass props without {} and inside put {props.title}
*/
const Header = ({title}) => {
  return (
    <header><h1>{title}</h1></header>
  )
}

// default props
Header.defaultProps = {
    title: "Task Tracker",
}
export default Header