import './OpinionForm.css';
import Card from '../../UI/Card/Card.js'
import FormItem from '../../UI/Form/FormItem.js'
import React, { useState, useRef, useEffect } from 'react';
import ButtonOpinion from '../../UI/ButtonOpinion/ButtonOpinion.js'
import OpinionModalValidator from '../OpinionModalValidator/OpinionModalValidator';

function OpinionForm(props) {

    // ref could be great only for read data but no to write!
    const inputTitle = useRef();

    const notNullInput = (input) => {
        return input !== null && input !== undefined && input.trim('').length > 0
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const [opinionPayload, setOpinionPayload] = useState({
        enteredTitle: '',
        enteredEmail: '',
        enteredComment: '',
        enteredNote: '',
        enteredDate: ''
    });

    const [formIsValid, setFormIsValid] = useState(false)

    const enteredTitleIsValid = notNullInput(opinionPayload.enteredTitle);
    const enteredEmailIsValid = notNullInput(opinionPayload.enteredEmail) && validateEmail(opinionPayload.enteredEmail);
    const enteredNoteIsValid = notNullInput(opinionPayload.note) && parseInt(opinionPayload.note) > 0;
    const enteredDateIsValid = notNullInput(opinionPayload.enteredDate);


    useEffect(() => {
        enteredTitleIsValid && enteredEmailIsValid && setFormIsValid(true) 

        !enteredTitleIsValid || !enteredEmailIsValid && setFormIsValid(false) 
    }, [enteredTitleIsValid, enteredEmailIsValid])


    const [formIsTouched, setFormIsTouched] = useState({
        enteredTitleIsTouched: false,
        enteredEmailIsTouched: false,
        enteredCommentIsTouched: '',
        enteredNoteIsTouched: '',
        enteredDateIsTouched: ''
    });



    const [errorState, setErrors] = useState({ isErrors: false, errors: [] });



    const emailChangeHandler = (event) => {
        setOpinionPayload(
            (prevState) => ({ ...prevState, enteredEmail: event.target.value }))
    }

    const emailBlurHandler = () => {
        setFormIsTouched(
            (prevState) => ({ ...prevState, enteredEmailIsTouched: true }))
    }

    const titleChangeHandler = (event) => {
        setOpinionPayload(
            (prevState) => ({ ...prevState, enteredTitle: inputTitle.current.value }))
    }

    const titleBlurHandler = () => {
        setFormIsTouched(
            (prevState) => ({ ...prevState, enteredTitleIsTouched: true }))
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

        if (validations.some(input => !input.valid)) {
            emitErrors(validations)
        } else {
            savePayload(opinionPayloadSubmited);

            setFormIsTouched
                (
                    (prevState) => ({
                        enteredTitleIsTouched: true,
                        enteredCommentIsTouched: true,
                        enteredNoteIsTouched: true,
                        enteredDateIsTouched: true
                    }))

        }

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

    const closeModal = () => {
        setErrors({ isErrors: false, errors: [] });
    }

    const validateForm = (opinionPayload) => {
        setFormIsTouched
            (
                (prevState) => ({
                    enteredTitleIsTouched: true,
                    enteredCommentIsTouched: true,
                    enteredNoteIsTouched: true,
                    enteredDateIsTouched: true
                }))


        const titleText = 'title is obligatory field'
        const emailText = 'email format needs to be like raul@hotmail.com'
        const noteText = 'note has to be greater than 0'
        const dateText = 'date is obligatory field'

        return [
            { valid: enteredTitleIsValid, text: titleText },
            { valid: enteredEmailIsValid, text: emailText },
            { valid: enteredNoteIsValid, text: noteText },
            { valid: enteredDateIsValid, text: dateText },
        ]
    }

    return (
        <div >
            <div>
                <FormItem label="title">
                    <input type="text" value={opinionPayload.enteredTitle} onChange={titleChangeHandler} onBlur={titleBlurHandler} ref={inputTitle} />
                    {!enteredTitleIsValid && formIsTouched.enteredTitleIsTouched && <div>enteredTitle is not valid</div>}
                </FormItem>
            </div>
            <div>
                <FormItem label="Email">
                    <input type="text" value={opinionPayload.enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                    {!enteredEmailIsValid && formIsTouched.enteredEmailIsTouched && <div>enteredEmail is not valid is not valid</div>}
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
                <ButtonOpinion disabled={!formIsValid}
                    label="Add comment" onButtonClick={submitHandler} />
            </Card>
            <OpinionModalValidator errorState={errorState} onCloseModal={closeModal}></OpinionModalValidator>
        </div>
    );
}

export default OpinionForm;
