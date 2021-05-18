const initialState = {
  items: [],
  isLoaded: false, // - подгрузка с сервера
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload, // - будет храниться массив всех пицц
    };
  }
  return state;
};

export default pizzas;