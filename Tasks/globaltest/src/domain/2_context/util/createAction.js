const createAction = (type) => {
  return (payload) => {
    return { type, payload };
  };
};

export default createAction;
