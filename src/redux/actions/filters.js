// в этом файле будут все экшины которые будут обьяснять что они делают что-то связанное с фильтрацией

// изменение фильтрации
export const setSortBy = (name) => ({
  type: 'SET_SORT_BY', // - тип экшина
  payload: name, // - значение 
});

// изменение категории
export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY', // - тип экшина
  payload: catIndex, // - значение 
});

// // это экшин креатор(actionCreator) - принимает динамичские данные
// const setSortBy = (name) => ({
//   type: 'SET_SORT_BY',
//   payload: name,
// });

// // это экшин(action)
// const setSortBy = ({
//   type: 'SET_SORT_BY',
//   payload: name,
// });