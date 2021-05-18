// сортировка и категории будут хранитьтся в этом файле
// хранится логика изменяющая только фильтрацию

// 1 берем состояние
const initialState = {
  category: 0,
  sortBy: 'popular',
};

// state - каждый раз мы будеи получать актуальное значение 
const filters = (state = initialState, action) => {
  // state = initialState - при первом вызове будет хранить
  action = {
    type: 'SET_SORT_BY',
    payload: 'price'
  }
  if(action.type === 'SET_SORT_BY') {
// 2 здесь его заменяем
    return {
      // 3 сохраняя предидущее значение
      ...state,
      // меняем на новое значение
      sortBy: action.payload,
    };
  }
  return state;
};

export default filters;