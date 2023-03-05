import React from 'react'
import './Main.css'
import Button from './Button'

const Main = ({ heading, img }) => {
  return (
    <div className='main' style={{ backgroundImage: `url(${img})`, background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.) 30%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 70%);`}}>
        <div className="main-container">
            <div className="main-text">
                <h1>{heading}</h1>
            </div>
              
            <div className="main-buttons">
                <Button text="REWATCH" />
            </div>
        </div>
    </div>
  )
}

export default Main


