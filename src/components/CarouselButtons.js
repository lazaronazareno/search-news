import styles from './Carousel.module.css'
import NextArrow from '../assets/new-right-arrow.png'
import PrevArrow from '../assets/left-arrow.png'
import DotFull from '../assets/dot-full.png'
import DotEmpty from '../assets/dot-empty.png'
import PropTypes from 'prop-types'

export const NextButton = ({ onClick }) => (
  <img
    src={NextArrow}
    className={styles.button_next}
    onClick={onClick}
    alt='Arrow icons created by Muhammad Ali - Flaticon'
  />
)

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
export const PrevButton = ({ onClick }) => (
  <img
    src={PrevArrow}
    className={styles.button_prev}
    onClick={onClick}
    alt='Arrow icons created by Stockio - Flaticon'
  />
)

PrevButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export const DotButtons = ({ slideCount, currentSlide, onClick }) => {
  const array = Array.from({ length: slideCount }, (v, i) => i)
  return (
    <div className={styles.dot_container}>
      {array.map((item, index) => (
        currentSlide === index
          ? <img
              src={DotFull}
              key={item}
              className={styles.dot_full}
              alt='Round icons created by Freepik - Flaticon'
            />
          : <img
              src={DotEmpty}
              key={item}
              className={styles.dot_empty}
              onClick={() => onClick(index)}
              alt='Dot icons created by hirschwolf - Flaticon'
            />
      ))}
    </div>
  )
}

DotButtons.propTypes = {
  slideCount: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
