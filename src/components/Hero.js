import React from 'react';
import imgHero from '../img/hero-bg.mp4'

const Hero = () => {
  return (
    <section className='video-big'>
        <video src={imgHero} className="videoHero" loop autoPlay muted></video>
        <div className='hero-text'>
            <h1 className='title_hero'>Paloma Bay</h1>
            <h1 className='title_hero'>coockail bar</h1>
        </div>
    </section>
  )
}

export default Hero;
