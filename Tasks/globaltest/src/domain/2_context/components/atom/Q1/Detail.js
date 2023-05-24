import { useState } from "react";
import { useModal } from "../../../../../store/2_context";
import ContextQ1Detail2 from "./Detail2";

const ContextQ1Detail = () => {
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
      <h2>ContextQ1Detail</h2>
      <button onClick={() => handleClick()}>
        {isClicked && isModalOpen ? "숨기기" : "보이기"}
      </button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
