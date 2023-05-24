import { useState } from "react";
import { useModal } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const { isModalOpen, setIsModalOpen } = useModal();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
      setIsModalOpen(false);
    } else {
      setIsClicked(true);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={() => handleClick()}>
        {isClicked && isModalOpen ? "숨기기" : "보이기"}
      </button>
    </>
  );
};
export default ContextQ1Detail2;
