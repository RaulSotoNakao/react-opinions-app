import './OpinionForm.css';
import Card from '../../UI/Card/Card.js'
import FormItem from '../../UI/Form/FormItem.js'
import React, { useState } from 'react';

function OpinionForm(props) {

    const [opinionPayload, setOpinionPayload] = useState({
        enteredTitle: '',
        enteredComment: '',
        enteredNote: '',
        enteredDate: ''
    });

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

    const submitHandler = (event) => {
        event.preventDefault();
        const opinionPayloadSubmited = {
            title: opinionPayload.enteredTitle,
            comment: opinionPayload.enteredComment,
            note: opinionPayload.enteredNote,
            date: opinionPayload.enteredDate
        };
        props.onSaveOpinionPayload(opinionPayloadSubmited);
        setOpinionPayload({
            enteredTitle: '',
            enteredComment: '',
            enteredNote: '',
            enteredDate: ''
        })
    }

    return (
        <Card className="opinion-form">
            <form onSubmit={submitHandler}>
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
                            id="start"
                            name="trip-start"
                            min="2018-01-01"
                            max="2018-12-31"
                            value={opinionPayload.enteredDate}
                            onChange={dateChangeHandler} />
                    </FormItem>
                </div>
                <Card>
                    <button type="submit" >Add comment</button>
                </Card>
            </form>
        </Card>
    );
}

export default OpinionForm;