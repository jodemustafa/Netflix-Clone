import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'> 
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt='' className='banner-img'/> 
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption-img'/>
          <p>
          In the winter of 1969, an elite force of the U.S. Army was sent on a top-secret assignment in southeast Vietnam.
          The objective, rescue Sergeant Four Leaf Tayback from a heavily guarded NVA Prison Camp.The mission was considered to be near suicide.
          Of the 10 men sent, four returned. Of those four, three wrote books about what happened. Of those three, two were published. Of those two, just one got a movie deal. 
          This is the story of the men who attempted to make that movie.
          </p>
          <div className="hero-btns">
            <button className='btn'> <img src={play_icon} alt="" /> Play </button>
            <button className='btn dark-btn'> <img src={info_icon} alt="" /> More Info </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only On Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
