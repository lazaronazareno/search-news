import Carousel from 'nuka-carousel'
import React from 'react'
import NewsItem from './NewsItem'
import styles from './News.module.css'
import NextArrow from '../assets/right-arrow.png'
import PrevArrow from '../assets/left-arrow.png'
import DotFull from '../assets/dot-full.png'
import DotEmpty from '../assets/dot-empty.png'

const NewsList = ({ news }) => {
  const NextButton = ({ onClick, disabled }) => (
    <img
      src={NextArrow}
      className={styles.button_next}
      onClick={onClick}
      alt='Arrow icons created by Muhammad Ali - Flaticon'
    />
  )
  const PrevButton = ({ onClick, disabled }) => (
    <img
      src={PrevArrow}
      className={styles.button_prev}
      onClick={onClick}
      alt='Arrow icons created by Stockio - Flaticon'
    />
  )

  const DotButtons = ({ slideCount, currentSlide }) => {
    const array = Array.from({ length: slideCount }, (v, i) => i)
    return (
      <div className={styles.dot_container}>
        {array.map((item, index) => (
          currentSlide === index
            ? <img
                src={DotFull}
                key={item}
                className={styles.dot_full}
              />
            : <img
                src={DotEmpty}
                key={item}
                className={styles.dot_empty}
              />
        ))}
      </div>
    )
  }

  const BottomButtons = ({ nextOnClick, nextDisabled, prevOnClick, prevDisabled, slideCount, currentSlide }) => (
    <div className={styles.bottom_controls}>
      <DotButtons
        slideCount={slideCount}
        currentSlide={currentSlide}
      />
      <div className={styles.arrow_container}>
        <PrevButton
          onClick={prevOnClick}
          nextDisabled={prevDisabled}
        />
        <NextButton
          onClick={nextOnClick}
          nextDisabled={nextDisabled}
        />
      </div>
    </div>
  )

  return (
    <div className='px-5'>
      <Carousel
        wrapAround
        style={{ borderRadius: '12px' }}
        renderBottomCenterControls={({
          nextDisabled,
          nextSlide,
          previousDisabled,
          previousSlide,
          slideCount,
          currentSlide
        }) => (
          <BottomButtons
            nextOnClick={nextSlide}
            nextDisabled={nextDisabled}
            prevOnClick={previousSlide}
            prevDisabled={previousDisabled}
            slideCount={slideCount}
            currentSlide={currentSlide}
          />
        )}
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
      >
        {news.map(item => (
          <NewsItem key={item.url} data={item} />
        ))}

      </Carousel>
    </div>
  )
}

export default NewsList
