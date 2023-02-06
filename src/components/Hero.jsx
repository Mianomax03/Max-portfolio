import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="main__container__hero" >
      <div className="name__info">
        <p>Hi my name is </p><br/>
      <h4>Maxwell Miano</h4>
      </div>
      <div className="wrapper" >
      <div className="static__text">
        i am </div>

        <ul className='dynamic__text'>
          <li><span>FrontEnd Developer </span></li>
          {/* <li><span>Free-lancer</span></li>
          <li><span>UI/UX</span></li>
          <li><span>UI/UX</span></li> */}
        </ul>
      </div>
     </div>
    

  
  )
}

export default Hero