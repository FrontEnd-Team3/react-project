// 재료 추가 로직 분리하기

// 1) 재료 추가 로직 작성
// 2) 재료 삭제 로직 작성

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { name: action.name, price: action.price }];
    case "REMOVE":
      return state.filter((value) => value.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
