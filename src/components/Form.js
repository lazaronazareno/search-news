import React, { useEffect } from 'react'
import useCategories from '../hooks/useCategories'
import { OptionCategories } from '../utils'
import PropTypes from 'prop-types'

const Form = ({ setCategory }) => {
  const [option, Categories] = useCategories('general', OptionCategories)
  useEffect(() => {
    setCategory(option)
  }, [option])

  return (
    <div className='d-flex justify-content-center'>
      <form
        className='container-fluid px-5 p-2 d-flex flex-column'
      >
        <Categories />
      </form>
    </div>
  )
}

Form.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default Form
