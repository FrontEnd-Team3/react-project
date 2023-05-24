import { useState } from "react";
import { ADD_USER, useUserStore } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
  const { dispatch } = useUserStore();

  const [userName, setUserName] = useState("");
  const [userNickName, setUserNickName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserNickName = (e) => {
    setUserNickName(e.target.value);
  };

  const handleAddUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: `${userName}`,
      nickname: `${userNickName}`,
    };

    dispatch(ADD_USER(newUser));
  };

  return (
    <div>
      <h1>Q2Form</h1>
      <input placeholder="name" onChange={handleUserName} />
      <input placeholder="nick-name" onChange={handleUserNickName} />
      <button onClick={() => handleAddUser()}>추가</button>
      <ContextQ2Form2 />
    </div>
  );
};
export default ContextQ2Form;
