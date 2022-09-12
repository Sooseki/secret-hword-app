import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

interface props {
  gameWon: string;
}

const container = document.getElementById("root")!;

const Modal: any = ({ gameWon }: props) => {
  const navigate = useNavigate();
  const replayGame = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };
  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div className="modal-content">
          {gameWon} won
          {gameWon && (
            <div className="replayGame">
              <button onClick={replayGame} className="replayGame">
                Nouvelle partie
              </button>
            </div>
          )}
        </div>
      </div>
    </>,
    container
  );
};

export default Modal;
