import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './scss/app.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);







// простой пример работы редакса
// function counter(state = 0, action) {

//   // 1 вариант исполнения
//   // switch (action.type) {
//   //   case 'INCREMENT':
//   //     return state + 1
//   //   case 'DECREMENT':
//   //     return state - 1
//   //   default:
//   //     return state
//   // }

//   // 2 вариант исполнения
//   if(action.type === 'INCREMENT') {
//     return state + 1;
//   }
//   if(action.type === 'DECREMENT') {
//     return state - 1;
//   }
//   return state;
// }

// function counter2(state = 0, action) {

//   // 1 вариант исполнения
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// function rootReducer() {
//   counter(state, action);
//   counter2(state, action);
//   counter3(state, action);
// }

// const store = createStore(rootReducer); 

// // const store = createStore(counter); // - может передавать только один редьюсер!!!!

// // подписка на изменения значения
// // store.subscribe(() => console.log('хранилище изменилось', store.getState())); // - если мы не подписываемся на изменения то стейт будет всегда возвращать значение по умолчанию

// // проеверяем что хранится в гетСтейт
// console.log(store.getState()); // 0

// // при каждом вызови экшина будет происходить изменение стора
// store.dispatch({ type: 'INCREMENT'}); // 0 => 1
// store.dispatch({ type: 'INCREMENT'}); // 1 => 2
// store.dispatch({ type: 'DECREMENT'}); // 2 => 1

// console.log(store.getState()); // 1

// const inc = () => {
//   store.dispatch({
//     type: 'ДОБАВИТЬ'
//   });
// };

// store.subscribe(() => {
//   console.log('ИЗМЕНИЛСЯ', store.getState());
// });