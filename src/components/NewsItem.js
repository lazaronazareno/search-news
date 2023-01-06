import React from 'react'
import styles from './NewsItem.module.css'

const NewsItem = ({ data }) => {
  const { urlToImage, url, title, description, author, source, publishedAt } = data

  const correctTitle = title.replace(/^(.*)-.*$/, '$1')

  const image = (urlToImage)
    ? <img className={styles.item__img} src={urlToImage} />
    : null
  return (
    <div className={styles.item_container}>
      {image}
      <div className={styles.item__text_container}>
        <div className={styles.item__author}>
          <span>{author}</span>
          <span> - </span>
          <span>{publishedAt}</span>
        </div>
        <div className={styles.item__main_text}>
          <h1>{correctTitle}</h1>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
