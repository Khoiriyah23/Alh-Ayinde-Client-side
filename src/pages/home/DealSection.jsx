import React from 'react'
import dealsImg from '../../assets/dealsimg.jpeg'

const DealSection = () => {
  return (
    <section className='section__container deals__container' >
      <div className='deals__image'>
        <img src={dealsImg} alt="" />
      </div>

      <div className='deals__content'>
          <h5>Get Up To 20% Discount</h5>
          <h4>Deals OF The Months</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora earum maxime aut! Assumenda eos inventore porro modi
             quos laudantium dolores dolorem ducimus? Corrupti modi id dolorum 
             rem quod labore harum!</p>

             <div className='deals__countdown flex-wrap'>
              <div className='deals__countdown__card'>
                  <h4>14</h4>
                  <p>Days</p>
              </div>
              <div className='deals__countdown__card'>
                  <h4>20</h4>
                  <p>Hours</p>
              </div>
              <div className='deals__countdown__card'>
                  <h4>15</h4>
                  <p>Mint</p>
              </div>
              <div className='deals__countdown__card'>
                  <h4>05</h4>
                  <p>Secs</p>
              </div>

             </div>
      </div>
    </section >
  )
}

export default DealSection