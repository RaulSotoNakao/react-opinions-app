import './VerticalSlide.css';

function VerticalSlide(props) {

    const verticalStyle = props.slideValue > 0 ? {color: 'white', 'fontSize': 'calc(7px + 1vmin)'}: {}

    return (
        <div className="slider-content">
            <div className="slider-wrapper">
                <input type="range" disabled = {true} min="0" max="12" value={props.slideValue} step="1"  />
            </div>
            <div style={verticalStyle} className="slider-label">
                {props.slideValue}
            </div>
            <div style={verticalStyle} className="slider-label">
                {props.label}
            </div>
        </div>
    );
}

export default VerticalSlide;
