import React from 'react'
import Carousel from 'nuka-carousel'
import styles from './Carousel.module.css'
import { DotButtons, NextButton, PrevButton } from './CarouselButtons'

const CarouselComponent = ({ children }) => {
  const BottomButtons = ({ nextOnClick, nextDisabled, prevOnClick, prevDisabled, slideCount, currentSlide, goOnClick }) => (
    <div className={styles.bottom_controls}>
      <DotButtons
        slideCount={slideCount}
        currentSlide={currentSlide}
        onClick={goOnClick}
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
    <Carousel
      wrapAround
      style={{ borderRadius: '12px' }}
      renderBottomCenterControls={({
        nextDisabled,
        nextSlide,
        previousDisabled,
        previousSlide,
        slideCount,
        currentSlide,
        goToSlide
      }) => (
        <BottomButtons
          nextOnClick={nextSlide}
          nextDisabled={nextDisabled}
          prevOnClick={previousSlide}
          prevDisabled={previousDisabled}
          slideCount={slideCount}
          currentSlide={currentSlide}
          goOnClick={goToSlide}
        />
      )}
      renderCenterRightControls={null}
      renderCenterLeftControls={null}
    >{children}
    </Carousel>

  )
}

export default CarouselComponent
