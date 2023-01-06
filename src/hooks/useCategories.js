import React, { useState } from 'react'

const useCategories = (initialState, options) => {
  const [value, setValue] = useState(initialState)

  const Categories = () => (
    <div
      className='container-fluid d-flex justify-content-evenly'
      value={value}
      onClick={e => setValue(e.target.attributes.value.value)}
    >
      {options.map(option => (
        <p className='btn btn-outline-warning' key={option.value} value={option.value}>{option.name}</p>
      ))}
    </div>
  )

  return [value, Categories, setValue]
}

export default useCategories
