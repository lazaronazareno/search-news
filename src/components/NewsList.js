import React from 'react'
import CarouselComponent from './Carousel'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

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

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewsList
