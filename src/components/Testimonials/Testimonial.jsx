import React from 'react';
import css from "./Testimonial.module.css";
import  Hero from "../../assets/testimonialHero.png";
import {TestimonialsData} from "../../data/testimonials";
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from "framer-motion";


const Testimonial = () => {
    const transition ={duration : 5, type: "spring"}
  return (
  <div className={css.testimonials}>
    <div className={css.wrapper}>
        <motion className={css.container}>
        <span>Top Rated</span>
        <span>Speedily disposal and Boy. Exercise joy man Children
            rejoiced.
        </span>
        </motion>

    <motion.img
    transition={transition}
    initial={{bottom: "-2rem"}}
    whileInView={{bottom: "0rem"}}
    src={Hero} alt="" />

    <div className={css.container}>
        <span>100k</span>
        <span>Happy Customer with user</span>
        </div>
    </div>

    <div className={css.reviews}>Reviews</div>
    <div className={css.carousel}>
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className={css.tCarousel}
        >
            {  TestimonialsData.map((testimonial, i)=>(

                <SwiperSlide>
                    <div className={css.testimonial}>
                        <img src={testimonial.image} alt="" />
                        <span>{testimonial.comment}</span>
                        <hr/>
                        <span>{testimonial.name}</span>
                    </div>
                </SwiperSlide>
            
                ))}   
        </Swiper>
    </div>
  </div>
  )
}

export default Testimonial;













