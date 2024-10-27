import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span className='banner__card'>
            <i className="ri-truck-line"></i>
            </span>
            <h4>Free Delivery</h4>
            <p>Offers Convinence and the ability to shop from anywhere, anytime</p>
        </div>
        <div className='banner__card'>
            <span className='banner__card'>
            <i className="ri-money-dollar-circle-line"></i>
            </span>
            <h4>Free Delivery</h4>
            <p>Offers Convinence and the ability to shop from anywhere, anytime</p>
        </div>
        <div className='banner__card'>
            <span className='banner__card'>
            <i className="ri-user-voice-fill"></i>
            </span>
            <h4>Strong Support</h4>
            <p>Offers Convinence and the ability to shop from anywhere, anytime</p>
        </div>
    </section>
  )
}

export default PromoBanner