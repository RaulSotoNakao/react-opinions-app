import './NewOpinion.css';
import Card from '../../components/UI/Card/Card.js'
import OpinionFormLayout from '../../components/Opinions/OpinionForm/OpinionFormLayout.js'

function NewOpinion(props) {
    const updateOpinionPayload = (saveOpinionPayload) => {
        const opinionPayload = {
            ...saveOpinionPayload
        };
        props.onAddOpinionHandler(opinionPayload)
    }
    return (
        <Card className="new-opinion">
            <h2 className="opinion-form-title">
                Form Opinion
            </h2>
            <OpinionFormLayout onSaveOpinionPayload={updateOpinionPayload}/>
        </Card>
    );
}

export default NewOpinion;
