import React from 'react'
import contractor1 from '../assets/contractor-6.jpeg';
import contractor2 from '../assets/contractor-7.jpeg';
import contractor3 from '../assets/contractor-8.jpeg';
import contractor4 from '../assets/contractor-9.jpeg';
import contractor5 from '../assets/contractor-10.jpeg';
import contractor6 from '../assets/contractor-11.jpeg';

const Footer = () => {
  return (
    <>
        <footer className='section__container footer__container'>
            <div className='footer__col'>
                    <h4>CONTACT INFO</h4>
                    <p>
                        <span><i className='ri-map-pin-2-fill'></i></span>
                        123,Sawmill-Aballetu, Sawmill, Iseyin, Oyo State
                    </p>
                    <p>
                        <span><i className='ri-mail-fill'></i></span>
                        support@Abu.com
                    </p>
                    <p>
                        <span><i className='ri-phone-fill'></i></span>
                        (+234) 8064287900 
                    </p>
            </div>

            <div className='footer__col'>
                    <h4>COMPANY</h4>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Work With US</a>
                    <a href="/">Our Blogs</a>
                    <a href="/">Terms & Conditions</a>
            </div>

            <div className='footer__col'>
                    <h4>USEFUL LINKS</h4>
                    <a href="/">Help</a>
                    <a href="/">Track Your order</a>
                    <a href="/">Company</a>
                    <a href="/">House</a>
                    <a href="/">Building Materials</a>
            </div>
            <div className='footer__col'>
                    <h4>INSTAGRAM</h4>
                    <div className='instagram__grid'>
                        <img src={contractor1} alt="" />
                        <img src={contractor2} alt="" />
                        <img src={contractor3} alt="" />
                        <img src={contractor4} alt="" />
                        <img src={contractor5} alt="" />
                        <img src={contractor6} alt="" />
                    </div>
            </div>
        </footer>

        <div className='footer__bar'>
            Copyright
    &copy; 2025 by Abu. All rights reserved.
</div>

    </>
  )
}

export default Footer