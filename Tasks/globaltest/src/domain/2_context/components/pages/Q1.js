import NavigateButton from "../../../../components/NavigateButton";
import ContextQ1Detail from "../atom/Q1/Detail";
import ContextQ1Modal from "../atom/Q1/Modal";
import { useModal } from "../../../../store/2_context";

const ContextQ1Page = () => {
  const { isModalOpen } = useModal();

  return (
    <div>
      {isModalOpen && <ContextQ1Modal />}
      <h2>문제 2 - 1</h2>
      <ContextQ1Detail />
      <NavigateButton to={"/2_context/q2"} />
    </div>
  );
};
export default ContextQ1Page;
