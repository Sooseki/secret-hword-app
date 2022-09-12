import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import fascistCard from "../../images/fascistCard.svg";
import liberalCard from "../../images/liberalCard.svg";

interface props {
    isToggled: boolean
    cards: Array<string>
    eventHandler: (selectedCard: string) => void
}
interface cards{
     [key: string]: string;
}
const svgCards:cards = {"liberal":liberalCard, 'fascist':fascistCard};
const container = document.getElementById('root')!;

const Modal:any = ({ cards, eventHandler }: props) => {
    const handleOnclick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, card: string) => {
        e.preventDefault();
        eventHandler(card);
        e.currentTarget.closest(".law-card")?.classList.add("selected-law-card")
    }
    return (
        ReactDOM.createPortal(
            <>
                <div className="SelectCardModal modal">
                    <div className="modal-content">
                        {cards.map((card) => {
                            return (
                                <div onClick={(e) => handleOnclick(e, card)} className="law-card">  
                                    <img src={svgCards[card]} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>, container
        )
    )
}

export default Modal;