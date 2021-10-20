import './ButtonOpinion.css'

function OpinionFormLayout(props) {

    const buttonClick = () => {
        props.onButtonClick()
    }


    return (
        <button className="button-opinion" onClick={buttonClick} >{props.label}</button>
    );
}

export default OpinionFormLayout;
