const ReducerQ1List = ({ ingredients, dispatch }) => {
  const onDeleteIngredients = (index) => {
    dispatch({ type: "DELETE", payload: index });
  };

  return (
    <tbody>
      {ingredients.map((ingredient, i) => (
        <tr key={i}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => onDeleteIngredients(ingredient.id)}>
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
