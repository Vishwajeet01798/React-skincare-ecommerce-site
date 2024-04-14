import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import {motion} from "framer-motion";

const Hero = () => {
    const transition ={duration : 5, type: "spring"}
  return (
    
    <div className={css.container}>
        {/* left side */}

        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>

            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>{" "}Speedily say has suitable disposal</span>
            </div>
        </div>
        {/* middle side hero image*/}

        <div className={css.wrapper}>
            {/* blue Circle */}
            <motion.div
            initial={{bottom: "2rem"}}
            whiteIntView ={{bottom:"0rem"}}

            className={css.blueCircle} 
            transition={transition}
            ></motion.div>

            <motion.img 
            transition={transition}
            initial={{bottom: "-2rem"}}
            whileInView={{bottom: "0rem"}}
            src={HeroImg} alt=""  />
            <div className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signUp}>
                    <span>Sign up offers</span>
                <div>
                <BsArrowRight/>
            </div>
        </div>
    </div>
    </div>
            {/*right side*/}
   <div className={css.h_sides}>
    <div className={css.traffic}>
        <span>1.5m</span>
        <span>Monthly traffic</span>
    </div>

    <div className={css.customers}>
        <span>100k</span>
        <span>Happy Customer</span>
            </div>
    </div>
</div> 
  )
}

export default Hero;