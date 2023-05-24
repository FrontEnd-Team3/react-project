import NavigateButton from "../../../../components/NavigateButton";
import { SUBMIT_USER, useUserStore } from "../../../../store/3_context";
import ContextQ2Form from "../atom/Q2/Form";
import ContextQ2Form3 from "../atom/Q2/Form3";

const ContextQ2Page = () => {
  const { dispatch } = useUserStore();

  const handleSubmitUser = () => {
    dispatch(SUBMIT_USER());
  };

  return (
    <>
      <h2>문제 2 - 2</h2>
      <ContextQ2Form />
      <ContextQ2Form3 />
      <div
        style={{
          marginTop: "32px",
        }}
      >
        <button onClick={() => handleSubmitUser()}>SUBMIT</button>
      </div>
      <NavigateButton isLastPage />
    </>
  );
};
export default ContextQ2Page;
