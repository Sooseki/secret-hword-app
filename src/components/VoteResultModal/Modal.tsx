import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

interface props {
    hideModal: any
    isModalShowing: boolean
    isToggled: boolean
    result: boolean
}
const container = document.getElementById('root')!;

const Modal:any = ({ isModalShowing, hideModal, result }: props) => 
    isModalShowing ? ReactDOM.createPortal(
        <>
            <div className="modal">
                <div className="modal-content">
                    {result ? 
                        <div className="vote-result-passed">
                            President and Chancelor has been elected
                        </div>
                    :   <div className="vote-result-failed">
                            President and Chancelor has not been elected
                        </div>
                    }
                    <button type="button" className="close-modal-button" onClick={hideModal}>Understood !</button>
                </div>
            </div>
        </>, container
    ) : null

export default Modal;