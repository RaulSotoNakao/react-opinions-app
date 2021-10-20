
import OpinionForm from './OpinionForm';
import Card from '../../UI/Card/Card';
import ButtonOpinion from '../../UI/ButtonOpinion/ButtonOpinion.js'
import React, { useState } from 'react';

function OpinionFormLayout(props) {

    const [formtContentToShow, setFormContentToShow] = useState('buttonContent')

    const updateOpinionPayload = (opinionPayloadSubmited) => {
        props.onSaveOpinionPayload(opinionPayloadSubmited);
        setButtonContent('buttonContent')
    }
    const setButtonContent = () => setFormContentToShow('buttonContent')


    const addButtonClicked = () => {
        setFormContentToShow('formContent')
    }

    const formContent = {
        formContent:
            <OpinionForm onSaveOpinionPayload={updateOpinionPayload} onCanelForm={setButtonContent} />,
        buttonContent: 
            <ButtonOpinion label="Add New Opinion" onButtonClick={addButtonClicked} />
    }

    return (
        <Card className="opinion-form">
            {formContent[formtContentToShow]}
        </Card>
    );
}

export default OpinionFormLayout;
