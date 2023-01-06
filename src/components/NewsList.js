import React from 'react'
import NewsItem from './NewsItem'

const NewsList = ({ news }) => {
  return (
    <div className='px-5'>
      {news.map(item => (
        <NewsItem key={item.url} data={item} />
      ))}
    </div>
  )
}

export default NewsList
