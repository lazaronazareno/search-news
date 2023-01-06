import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <nav className='container-fluid d-flex justify-content-center'>
      <span
        style={{ fontSize: '4rem', fontWeight: 800 }}
      >{title}
      </span>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
