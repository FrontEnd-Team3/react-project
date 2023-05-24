const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const [inputName, inputPrice] = action.payload;
      const newIngredient = {
        id: Math.floor(Math.random()),
        name: `${inputName}`,
        price: `${inputPrice}`,
      };
      return [...state, newIngredient];

    case "DELETE":
      return state.filter((ingredient) => ingredient.id !== action.payload);
    default:
      return state;
  }
};

export default ingredientReducer;
