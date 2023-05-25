import { useReducer } from "react";
import reducer from "../../../../store/1_reducer";

const Q1Form = ({ onSubmit, ingredients }) => {
  const [state, dispatch] = useReducer(reducer, ingredients);

  const onSubsubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    dispatch({
      type: "ADD",
      name: name,
      price: price,
    });
  };

  return (
    <form onSubmit={onSubsubmit}>
      <label>
        <input type="text" name="name" placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
