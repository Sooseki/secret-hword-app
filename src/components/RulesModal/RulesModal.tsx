import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import './RulesModal.scss';


const RulesModal = () => {
    const { isModalShowing, toggle } = useModal(); 
    return(
        <div className="rules-modal">
            <button type="button" className="rules-button" onClick={toggle}>Rules</button>
            <Modal isModalShowing={isModalShowing} hideModal={toggle}/>
        </div>
    )
}

export default RulesModal;