import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
  link: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Oswald, sans-serif',
    fontSize: 25
  },
  active: {
    color: '#aee26f'
  }
}

const NavItem = ({ to, children, exact }) =>
  <NavLink activeStyle={styles.active} style={styles.link} exact={exact} to={to}> {children} </NavLink>

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {
  exact: false
}

export default NavItem
