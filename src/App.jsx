import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Education from './Components/Education'
// import Button from './Components/Button'

const App = () => {
  return (
    <div className='text-white bg-black'>
      <Header/>
      <Home/>
      <Skills/>
      <Education/>
    </div>
  )
}

export default App