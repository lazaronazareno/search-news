import React from 'react'
import NewsItem from './NewsItem'

const NewsList = ({ news }) => {
  return (
    <div>
      {news.map(item => (
        <NewsItem key={item.url} data={item} />
      ))}
    </div>
  )
}

export default NewsList
