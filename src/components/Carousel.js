import React from 'react'
import Carousel from 'nuka-carousel'
import styles from './Carousel.module.css'
import { DotButtons, NextButton, PrevButton } from './CarouselButtons'
import PropTypes from 'prop-types'

const CarouselComponent = ({ children }) => {
  const BottomButtons = ({ nextOnClick, prevOnClick, slideCount, currentSlide, goOnClick }) => (
    <div className={styles.bottom_controls}>
      <DotButtons
        slideCount={slideCount}
        currentSlide={currentSlide}
        onClick={goOnClick}
      />
      <div className={styles.arrow_container}>
        <PrevButton
          onClick={prevOnClick}
        />
        <NextButton
          onClick={nextOnClick}
        />
      </div>
    </div>
  )

  return (
    <Carousel
      wrapAround
      style={{
        borderRadius: '12px',
        minHeight: '80vh'
      }}
      className={styles.carousel}
      renderBottomCenterControls={({
        nextSlide,
        previousSlide,
        slideCount,
        currentSlide,
        goToSlide
      }) => (
        <BottomButtons
          nextOnClick={nextSlide}
          prevOnClick={previousSlide}
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

Carousel.propTypes = {
  children: PropTypes.element.isRequired
}

export default CarouselComponent
