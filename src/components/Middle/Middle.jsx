import React from 'react'
import css from './Middle.module.css';
import Shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

const Middle = () => {
  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Try-on</span>
            <span>Never buy the wrong Shade</span>
            <span>Try Now</span>
            <img src={Shade} alt="" />
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
           <ReactCompareImage leftImage={Before} rightImage={After}/>
           </div>
        </div>
    </div>
  )
}

export default Middle