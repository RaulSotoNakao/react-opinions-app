import './VerticalSlide.css';
import React, { useState } from 'react';

function VerticalSlide(props) {
    return (
        <div className="slider-content">
            <div className="slider-wrapper">
                <input type="range" disabled = {true} min="0" max="12" value={props.slideValue} step="1"  />
            </div>
            <div className="slider-label">
                {props.slideValue}
            </div>
            <div className="slider-label">
                {props.label}
            </div>
        </div>
    );
}

export default VerticalSlide;
