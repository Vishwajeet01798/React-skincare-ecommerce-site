import React from 'react';
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
   
    LocationMarkerIcon,
   
} from "@heroicons/react/outline";

 export const Footer = () => {
  return (
    <React.Fragment>
    <div className={css.cFooterwrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>VSJ</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>All north avenue Orland, Fl 3234</span>

                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>About Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>All north avenue Orland, Fl 3234</span>

                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>All north avenue Orland, Fl 3234</span>

                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>All north avenue Orland, Fl 3234</span>

                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
            <span >Copyright @2023 By Vishwajeet Verma</span>
            <span>All rights reserved.</span>
        </div>
    </div>
    
    </React.Fragment>
  );
};


