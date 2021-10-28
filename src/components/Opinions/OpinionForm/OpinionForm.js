import './OpinionForm.css';
import Card from '../../UI/Card/Card.js'
import FormItem from '../../UI/Form/FormItem.js'
import React, { useState } from 'react';
import ButtonOpinion from '../../UI/ButtonOpinion/ButtonOpinion.js'
import OpinionModalValidator from '../OpinionModalValidator/OpinionModalValidator';

function OpinionForm(props) {

    const [opinionPayload, setOpinionPayload] = useState({
        enteredTitle: '',
        enteredComment: '',
        enteredNote: '',
        enteredDate: ''
    });

    const [errorState, setErrors] = useState({ isErrors: false, errors: [] });

    const titleChangeHandler = (event) => {
        setOpinionPayload(
            (prevState) => ({ ...prevState, enteredTitle: event.target.value }))
    }

    const commentChangeHandler = (event) => {
        setOpinionPayload(
            (prevState) => ({ ...prevState, enteredComment: event.target.value }))
    }

    const noteChangeHandler = (event) => {
        setOpinionPayload(
            (prevState) => ({ ...prevState, enteredNote: event.target.value }))
    }

    const dateChangeHandler = (event) => {
        setOpinionPayload(
            (prevState) => ({ ...prevState, enteredDate: event.target.value }))
    }

    const submitHandler = () => {

        const opinionPayloadSubmited = {
            title: opinionPayload.enteredTitle,
            comment: opinionPayload.enteredComment,
            note: opinionPayload.enteredNote,
            date: opinionPayload.enteredDate
        };

        const validations = validateForm(opinionPayloadSubmited).filter(input => !input.valid);
        validations.some(input => !input.valid) ? emitErrors(validations) : savePayload(opinionPayloadSubmited);

    };

    const emitErrors = (errors) => {
        setErrors({ isErrors: true, errors })
    }

    const savePayload = (opinionPayloadSubmited) => {
        props.onSaveOpinionPayload(opinionPayloadSubmited);
        setOpinionPayload({
            enteredTitle: '',
            enteredComment: '',
            enteredNote: '',
            enteredDate: ''
        })

    }
    const notNullInput = (input) => {
        return input !== null && input !== undefined && input.trim().length > 0
    }
    const closeModal = () => {
        setErrors({ isErrors: false, errors: [] });
    }

    const validateForm = (opinionPayload) => {

        const titleCondition = notNullInput(opinionPayload.title);
        const noteCondition = notNullInput(opinionPayload.note) && parseInt(opinionPayload.note) > 0;
        const dateCondition = notNullInput(opinionPayload.date);

        const titleText = 'title is obligatory field'
        const noteText = 'note has to be greater than 0'
        const dateText = 'date is obligatory field'

        return [
            { valid: titleCondition, text: titleText },
            { valid: noteCondition, text: noteText },
            { valid: dateCondition, text: dateText },
        ]
    }

    return (
        <div >
            <div>
                <FormItem label="title">
                    <input type="text" value={opinionPayload.enteredTitle} onChange={titleChangeHandler} />
                </FormItem>
            </div>
            <div>
                <FormItem label="comment">
                    <input type="text" value={opinionPayload.enteredComment} onChange={commentChangeHandler} />
                </FormItem>
            </div>
            <div>
                <FormItem label="note">
                    <input
                        type="number"
                        min="0"
                        max="10"
                        value={opinionPayload.enteredNote}
                        onChange={noteChangeHandler} />
                </FormItem>
            </div>
            <div>
                <FormItem label="date">
                    <input
                        type="date"
                        min="2018-01-01"
                        max="2020-12-31"
                        value={opinionPayload.enteredDate}
                        onChange={dateChangeHandler} />
                </FormItem>
            </div>
            <Card className="button-margin">
                <ButtonOpinion label="Cancel" onButtonClick={props.onCanelForm} />
                <ButtonOpinion label="Add comment" onButtonClick={submitHandler} />
            </Card>
            <OpinionModalValidator errorState={errorState} onCloseModal={closeModal}></OpinionModalValidator>
        </div>
    );
}

export default OpinionForm;
