import { useState } from 'react'
import './App.css'
import Books from './components/Books'
import BookbyTitle from './components/BookbyTitle'
import BookbyAuthor from './components/BookbyAuthor'
import AddBookData from './components/AddBookData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Books />
      <BookbyTitle title = "Shoe Dog" />
      <BookbyAuthor authorName = "Harper Lee"/>
      <AddBookData />
    </>
  )
}

export default App
