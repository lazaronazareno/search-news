import React from 'react'
import styles from './News.module.css'
import ImageNotFound from '../assets/image-not-found.png'

const NewsItem = ({ data }) => {
  if (Object.keys(data).length === 0) return null

  const { urlToImage, url, title, description, author, publishedAt } = data

  const correctTitle = title.replace(/^(.*)-.*$/, '$1')
  const correctDate = publishedAt.replace(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}).*Z$/, '$1 - $2')

  const image = (urlToImage)
    ? <img className={styles.item__img} src={urlToImage} alt={title} />
    : <img className={styles.item__img} src={ImageNotFound} alt='News wordcloud' />
  return (
    <div className={styles.item_container}>
      {image}
      <div className={styles.item__text_container}>
        <div className={styles.item__author}>
          <span>{correctDate}</span>
          {author ? <span> - </span> : null}
          <span>{author}</span>
        </div>
        <div className={styles.item__main_text}>
          <a className={styles.link} href={url} rel='noopener noreferrer' target='_blank'>
            <h1>{correctTitle}</h1>
            <span>{description}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
