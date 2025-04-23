"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    return (
        <div 
            className={containerStyles} 
            role="group" 
            aria-label="Slide Navigation Buttons"
        >
            <button 
                className={btnStyles} 
                onClick={() => swiper.slidePrev()}
                aria-label="Previous Slide"
            >
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button 
                className={btnStyles} 
                onClick={() => swiper.slideNext()}
                aria-label="Next Slide"
            >
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}

export default WorkSliderBtns