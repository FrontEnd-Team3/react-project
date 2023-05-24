import { EDIT_USER, useUserStore } from "../../../../../store/3_context";

const ContextQ2Form2 = () => {
  const { dispatch } = useUserStore();

  const handleEditMode = () => {
    dispatch(EDIT_USER());
  };

  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={() => handleEditMode()}>STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;
