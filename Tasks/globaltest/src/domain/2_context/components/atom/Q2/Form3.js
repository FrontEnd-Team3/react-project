import { RESET_USER, useUserStore } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
  const { dispatch } = useUserStore();

  const handleResetUser = () => {
    dispatch(RESET_USER());
  };

  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={() => handleResetUser()}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
