import React, { useState } from 'react'

const useCategories = (initialState, options) => {
  const [value, setValue] = useState(initialState)

  const Categories = () => (
    <div
      className='container-fluid my-3 border-bottom d-flex flex-wrap gap-3 justify-content-evenly'
      value={value}
      onClick={e => setValue(e.target.attributes.value.value)}
    >
      {options.map(option => (
        <p
          className={`categories ${value === option.value ? 'active' : ''}`}
          key={option.value} value={option.value}
        >{option.name}
        </p>
      ))}
    </div>
  )

  return [value, Categories, setValue]
}

export default useCategories
