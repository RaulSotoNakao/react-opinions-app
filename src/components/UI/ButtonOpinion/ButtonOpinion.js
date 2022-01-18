import './ButtonOpinion.css'

function OpinionFormLayout(props) {

    const buttonClick = () => {
        props.onButtonClick()
    }


    return (
        <button disabled={props.disabled || false} className="button-opinion" onClick={buttonClick} >{props.label}</button>
    );
}

export default OpinionFormLayout;
