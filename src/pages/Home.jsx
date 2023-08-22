import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home' id='home'>
        <img src="armchair-0.png" alt="" className="landing" />
        <div className="intro">
            <h1>hommie</h1>
            <p>Discover exquisite home furnishings and elegant lighting solutions at our online store. Elevate your space with our curated collection of furniture and lamps. Your style, illuminated.</p>
            <Link className='button' to={'/explore'}>explore</Link>
        </div>
    </section>
  )
}

export default Home