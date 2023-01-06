import React from 'react'
import CarouselComponent from './Carousel'
import NewsItem from './NewsItem'

const NewsList = ({ news }) => {
  if (Object.keys(news).length === 0) return null

  return (
    <div className='px-5'>
      <CarouselComponent>
        {news.map(item => (
          <NewsItem key={item.url} data={item} />
        ))}
      </CarouselComponent>
    </div>
  )
}

export default NewsList
