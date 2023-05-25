import { useReducer } from "react";
import reducer from "../../../../store/1_reducer";

const ReducerQ1List = ({ ingredients }) => {
  const [state, dispatch] = useReducer(reducer, ingredients);
  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => handleDelete}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
