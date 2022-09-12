import './VictoryModal.scss';
import Modal from "./Modal";

interface props {
    gameWon: string | undefined
}

const VictoryModal = ({gameWon}:props) => {
    
  return (
    <div className="VictoryModal">
      { gameWon &&
        <Modal gameWon={gameWon}/>
      }
    </div>
  );
}

export default VictoryModal;