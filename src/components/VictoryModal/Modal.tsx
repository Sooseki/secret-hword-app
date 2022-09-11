import ReactDOM from "react-dom";

interface props {
    gameWon: string
}

const container = document.getElementById('root')!;

const Modal:any = ({gameWon}: props) => {
    return (
        ReactDOM.createPortal(
            <>
                <div className="modal">
                    <div className="modal-content">
                        {gameWon} won
                    </div>
                </div>
            </>, container
        )
    )
}

export default Modal;