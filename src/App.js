import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Spinner from './components/Spinner'

function App () {
  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  const getNews = async () => {
    const key = process.env.REACT_APP_APIKEY
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&pageSize=5&apiKey=${key}`

    const response = await fetch(url)
    const news = await response.json()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)

      setNews(news.articles)
    }, 2000)
  }

  useEffect(() => {
    getNews()
  }, [category])

  const renderComponent = (loading)
    ? <Spinner />
    : <NewsList news={news} />

  return (
    <div>
      <Header title='Noticias' />
      <div>
        <Form setCategory={setCategory} />
        {renderComponent}
      </div>
    </div>
  )
}

export default App
