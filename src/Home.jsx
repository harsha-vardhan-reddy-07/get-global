import React from 'react'

import Logo from './images/logo.png';
import HeroImg from './images/hero_img.png'

import {FaHandshakeSimple} from 'react-icons/fa6'
import {RiToolsFill} from 'react-icons/ri'
import {GiEarthAmerica} from 'react-icons/gi'
import {GoDotFill} from 'react-icons/go'
import {AiFillLock} from 'react-icons/ai'
import {BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoInstagramAlt} from 'react-icons/bi'

const Home = () => {
  return (
    <div className="homepage">

        <nav>
                <img src={Logo} alt="" />
                <h3>Get Global</h3>
        </nav>

        <div className="hero-content">
            <div className="hero-part-1">

                <li> <GoDotFill className='li-icon' /> Coming soon</li>

                <h2>Unlock Global Opportunities</h2>
                <p>Venturing beyond borders? Dive into a curated list of jobs that come with visa and relocation support. Explore, apply, and kickstart your global journey with confidence.</p>

                <div className="hero-cards">
                    <div className="hero-card">
                        <h3><GiEarthAmerica className='hero-icons' /> Global Jobs, Handpicked for You.</h3>
                        <p>Every job listing we showcase is handpicked, offering visa and relocation assistance. Making your international job hunt seamless.</p>
                    </div>
                    <div className="hero-card">
                        <h3><RiToolsFill className='hero-icons' /> Navigate with Insight.</h3>
                        <p>Get comprehensive insights about each country, ensuring you're well-prepared for your new journey.</p>
                    </div>
                    <div className="hero-card">
                        <h3><FaHandshakeSimple className='hero-icons' /> More Than Just Job Listings.</h3>
                        <p>Join our vibrant community to seek referrals, explore our pay parity calculator, and understand your potential take-home with our tax calculator.</p>
                    </div>
                </div>

            </div>
            <div className="hero-part-2">
                <img src={HeroImg} alt="" />
            </div>
        </div>


        <div className="about">
            <h3>Stay ahead of the curve</h3>
            <h5>Get exclusive early access to the finest global job listings. Sign up below and be the first to know when we launch.</h5>
            <span>
                <input type="text" placeholder='Enter your email' />
                <button>Notify me</button>
            </span>
            <h4><AiFillLock className='lock-icon' /> We Value Your Privacy.</h4>
            <p>Rest assured, your email is safe with us. No spam, just updates about our exclusive launch.</p>
        </div>

        <div className="footer">
            <hr />
            <h3>Join our journey</h3>
            <p>Stay in the loop with updates, sneak peeks, and more. Follow our progress.</p>
            <span>
                <BiLogoFacebookCircle className='footer-icons' />
                <BiLogoInstagramAlt className='footer-icons' />
                <BiLogoLinkedinSquare className='footer-icons' />
            </span>
        </div>


    </div>
  )
}

export default Home