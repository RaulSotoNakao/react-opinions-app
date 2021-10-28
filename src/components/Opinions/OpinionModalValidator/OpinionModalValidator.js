
import './OpinionModalValidator.css'
import Card from '../../UI/Card/Card';
import styled from 'styled-components'
import React from 'react';
import reactDom from 'react-dom';


const Modal = styled.div`
display: ${props => !props.isErrors ? 'none' : 'inline'}; 
position: fixed; /* Stay in place */
padding-top: 100px; /* Location of the box */
z-index: 0; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

`

function OpinionModalValidator(props) {

    return (
        <React.Fragment>
            {
                reactDom.createPortal(
                    <Modal isErrors={props.errorState.isErrors} onClick={props.onCloseModal}>
                        <Card className="modal-content">
                            <span className="close" onClick={props.onCloseModal}>&times;</span>
                            <div>
                                {props.errorState.errors.map(error => (
                                    <h4>{error.text}</h4>
                                ))}
                            </div>
                        </Card>
                    </Modal>,document.getElementById('modal-root')
                )
            }

        </React.Fragment>
    )
}

export default OpinionModalValidator;