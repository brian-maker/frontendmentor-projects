import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './questions'
// import image from './images/illustration-woman-online-desktop.svg'

function App() {
  const [questions,setQuestions] = useState(data)
  return (
    <main>
      <article>
        <div className="container">
          <section className='image-section'>
            <div className='image-container'>
            <img className="image"/>
            <img  className='patterns'/>
            </div>
          </section>
          <section className='questions-section'>
            <h1 className='title'>FAQ</h1>
            {questions.map((question)=>{
              return <SingleQuestion key={question.id} {...question}/>
            })}
          </section>
        </div>
      </article>
      
    </main>
  )
}

export default App