import React from 'react'
import iconArrow from '../images/icon-arrow.svg'
import arrow from '../images/icon-arrow-red.svg'

function Questions(props) {
    const [showAnswer, setShowAnswer]= React.useState(false)
  return (
    <>
    <article className='border-t border-slate-300 py-2 last:border-b'>
        <div onClick={()=>setShowAnswer(!showAnswer)} className='flex items-center justify-between cursor-pointer'>
        <h2 className='font-normal text-lg hover:text-red-400'>{props.question}</h2>
        <button>
            {showAnswer ? <img src={arrow} alt='' className='transform rotate-180'/> : <img src={iconArrow} alt=''/>
            }
        </button>
        </div>
        {showAnswer && <p>{props.answers}</p>
        }
    </article>
    </>
  )
}

export default Questions