import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

interface props {
    hideModal: any
    isModalShowing: boolean
    isToggled: boolean
    cards: Array<string>
    eventHandler: (selectedCard: string) => void
}
const container = document.getElementById('root')!;

const Modal:any = ({ isModalShowing, hideModal, cards, eventHandler }: props) => 
    isModalShowing ? ReactDOM.createPortal(
        <>
            <div className="modal">
                <div className="modal-content">
                    {cards.map((card) => {
                        return (
                            <div onClick={() => eventHandler(card)} className="cards">
                                <img src={"../../images/" + card + "Card.svg"}/>
                            </div>
                        )
                    })}
                    <button type="button" className="close-modal-button" onClick={hideModal}>Understood !</button>
                </div>
            </div>
        </>, container
    ) : null

export default Modal;