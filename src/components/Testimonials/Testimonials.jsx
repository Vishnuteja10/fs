import React from 'react'
import Style from './Testimonials.module.css'

import Carousel from 'react-multi-carousel'

import video1 from '../../assets/videos/AbdulBasith.mp4'
import video2 from '../../assets/videos/PrashantGudipudi.mp4'
import video3 from '../../assets/videos/Srivivasbonnam.mp4'

function Testimonials() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };


  return (
    <div className={Style.main}>
        <h2>What our customer have to say?</h2>
        <div className={Style.testimonials}>

            <div className={Style.testimonial}>
              
                <div className={Style.videoContent}>
                    <video className={Style.video} controls src={video1} >
                       
                    </video>
                </div>
                <div>
                     <h3>MR.Abdul Basith</h3>
                     <p>Sales Manager, Internal Building Automation</p>
                </div>
            </div>

            <div className={Style.testimonial}>
                <div className={Style.videoContent}>
                    <video controls src={video2}></video>
                </div>
                <div>
                   <h3>Mr.Prashanth Gudipudi</h3>
                    <p>IT Employee</p>
                </div>
            </div>

            <div className={Style.testimonial}>
                <div className={Style.videoContent}>
                    <video  controls src={video3}></video>
                </div>
                <div>
                   <h3>Mr.Srinivas</h3>
                    <p>Bank Employee, INDUSIND</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonials