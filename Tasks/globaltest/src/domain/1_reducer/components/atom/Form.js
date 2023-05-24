const Q1Form = ({ dispatch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: [e.target.name.value, e.target.price.value],
    });
  };

  return (
    <form onSubmit={onSubmit}>
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
