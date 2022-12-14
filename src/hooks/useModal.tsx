import { useState } from "react";

const useModal = () => {
    const [isModalShowing, setIsModalShowing] = useState(false);

    function toggle() {
        setIsModalShowing(!isModalShowing);
    }

    return {
        isModalShowing,
        toggle,
        setIsModalShowing
    };
};

export default useModal;