import { createContext, useContext, useReducer, useState } from "react";
import createAction from "../domain/2_context/util/createAction";

const initialValue = [{ id: 1, name: "홍길동", nickname: "히히" }];

const UserStore = createContext();
export const useUserStore = () => useContext(UserStore);

export const ADD_USER = createAction("ADD_USER");
export const EDIT_USER = createAction("EDIT_USER");
export const RESET_USER = createAction("RESET_USER");
export const SUBMIT_USER = createAction("SUBMIT_USER");

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "EDIT_USER":
      return state.map((user) => {
        return { ...user, isEdit: true };
      });
    case "RESET_USER":
      return initialValue;
    case "SUBMIT_USER":
      const filteredUser = state.filter((user) => user.isEdit);
      console.log(filteredUser);
      return state;
    default:
      return state;
  }
};

const UserStoreProvider = ({ children }) => {
  const [userList, dispatch] = useReducer(userReducer, initialValue);
  return (
    <UserStore.Provider value={{ userList, dispatch }}>
      {children}
    </UserStore.Provider>
  );
};

export default UserStoreProvider;
