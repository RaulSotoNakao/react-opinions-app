import './VerticalSlide.css';
import React, { useState } from 'react';

function VerticalSlide(props) {

    const [slideValue, setSlideValue] = useState({ enteredSlideValue: '0' });


    const slideChangeHandler = (event) => {
        setSlideValue({ enteredSlideValue: event.target.value })
    }

    return (
        <div className="slider-content">
            <div className="slider-wrapper">
                <input type="range" disabled = {true} min="0" max="10" value={slideValue.enteredSlideValue} step="1" onChange={slideChangeHandler} />
            </div>
            <div className="slider-label">
                {slideValue.enteredSlideValue}
            </div>
            <div className="slider-label">
                {props.label}
            </div>
        </div>
    );
}

export default VerticalSlide;
