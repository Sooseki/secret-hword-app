import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

interface props {
    isToggled: boolean
    result: boolean
}
const container = document.getElementById('root')!;

const Modal:any = ({ result }: props) => 
    ReactDOM.createPortal(
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
                </div>
            </div>
        </>, container
    )

export default Modal;