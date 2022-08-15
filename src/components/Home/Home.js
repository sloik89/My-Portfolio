import React from 'react'
import './home.css'
import heroImg from '../../assets/hero-small.jpg'
import BtnRound from '../btnRound/BtnRound'
import SocialIcons from '../SocialIcons/SocialIcons'
import { useGlobalContext } from '../../context'
const Home = () => {
  const {lang} = useGlobalContext()
  return (
    <main>
     
            <section className="hero" id="home">   
            <div className="section-center hero-center">         
            <article className="article-img-contaianer">
                <img src={heroImg} alt="" className='hero-img'/>
            </article>
            <article className="hero-info">
                <h1 className='hero-title header-main'>
                    Hello I'm Sebastian
              <br /> Frontend Developer
                </h1>
                 
                <h2 className="hero-desc text-description">
                    I am drawn to everything related with webdev. My aim is to create
              better code. I like hard and interesting tasks.
                </h2>
                <BtnRound title={`${lang === 'eng' ? 'see project' : 'zobacz projekty'}`}/>
            </article>
            <aside className='social-icons'>
                <SocialIcons/>
            </aside>
        </div>
        </section>
    </main>
  )
}

export default Home