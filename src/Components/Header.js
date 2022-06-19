// import React from 'react' (in new react no need for this)
import PropTypes from 'prop-types' // impt to import it
import { Button} from './Button'

/*
we can pass props without {} in the parameter and inside put {props.title}
*/
const Header = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color = "green" text = "Add" />
      </header>
  )
}

// default props
Header.defaultProps = {
    title: "Task Tracker",
}

// set the props types

Header.propTypes = {
  title: PropTypes.string.isRequired,

}
export default Header