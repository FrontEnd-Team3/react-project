import React, { useReducer } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";
import ingredientReducer from "../../../../store/1_reducer";
import styled from "styled-components";

const ReducerQ1Page = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, [
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ]);

  return (
    <>
      <h2>문제 1</h2>

      <S.Table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List ingredients={ingredients} dispatch={dispatch} />
      </S.Table>
      <Q1Form dispatch={dispatch} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;

const Table = styled.table`
  position: relative;
  left: 44%;
  margin-bottom: 10px;
`;

const S = { Table };
