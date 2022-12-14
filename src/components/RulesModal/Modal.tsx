import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

interface props {
    hideModal: () => void
    isModalShowing: boolean
    isToggled: boolean
}
const container = document.getElementById('root')!;

const Modal:any = ({ isModalShowing, hideModal }: props) => 
    isModalShowing ? ReactDOM.createPortal(
        <>
            <div className="modal">
                <div className="modal-content">
                    <h1>Secret Hitler Rules</h1>
                    <span className="rules1">ACH NEIN 1</span>
                    <span className="rules2">ACH NEIN 2</span>
                    <span className="rules3">ACH NEIN 3</span>
                    <span className="rules4">ACH NEIN 4</span>
                    <span className="rules5">ACH NEIN 5</span>
                    <button type="button" className="close-modal-button" onClick={hideModal}>Understood !</button>
                </div>
            </div>
        </>, container
    ) : null

export default Modal;