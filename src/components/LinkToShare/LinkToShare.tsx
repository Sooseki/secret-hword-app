import { Player } from "../../types/types";

interface props {
    player: Player;
}

const LinkToShare = ({player}: props) => {
    const copyToClipboard = () => {
        const url = "http://localhost:3001/?room=" + player.roomId;
        navigator.clipboard.writeText(url);
    }
    return (
        <div className="copy-to-clipboard">
            <button onClick={copyToClipboard} className="copy-to-clipboard-button"/>
        </div>
    );
}

export default LinkToShare;

