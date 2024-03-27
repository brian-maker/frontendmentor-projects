import React, { useState } from 'react'
import { FaChevronUp,FaChevronDown  } from "react-icons/fa";

function Questions({title,info}) {
  const [showInfo,setShowInfo] = useState(false)

  return (
    <div className="wrapper">
      <header className='quiz'>
        <h4 className='question'>{title}</h4>
        <button className='btn' onClick={()=>setShowInfo(!showInfo)}>{showInfo? <FaChevronUp className='icon'/> :<FaChevronDown className='icon'/>}</button>
      </header>
      {showInfo && <p className='info'>{info}</p>}
    </div>

  )
}

export default Questions