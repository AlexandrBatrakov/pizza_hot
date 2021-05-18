import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Route } from 'react-router-dom';
import { Header } from './Components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

// функциональный компонент
function App() {

  // обращается к редаксу в нашем приложении
  const dispatch = useDispatch();

  useEffect(() => {
    // перенести в редакс и подключить редакс танк
    // следить за фильтрацией и сортировкой и подставлять параметры в урл из редакс
    // сделать имитацию загрузки пицц (которая есть в css)
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data)); // - диспатч выполняется после гет-запроса(получает все пиццы)
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/cart"
          component={Cart}
          exact
        />
      </div>
    </div>
  );
}

export default App;

// (state) => {
  //     return {
  //       items: state.pizzas.items,
  //       filters: state.filters,
  //     };
  //   },













// function App() {
//   // const clickPoKnopke = () => {
//   //   alert('hello')
//   // };
//   // берем состояние пицц(сохраняем после получения ответа на запрос)
//   const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     // когда был запрос отправлен, переконвертирован в JSON то получаем массив объектов пицц

//     // 1 вариант получение json объекта с массивом пицц с помощью axios
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });

//     // 2 вариант получение json объекта с массивом пицц с помощью fetch
//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => {
//     //     console.log('fetch: ', resp);
//     //     return resp.json()
//     //   })
//     //   .then(json => {
//     //     setPizzas(json.pizzas);
//     //   });
//   }, []);

//   // функциональный компонент
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route
//           path="/"
//           render={() => <Home items={pizzas} />}
//           exact
//         />
//         <Route
//           path="/cart"
//           component={Cart}
//           exact
//         />
//       </div>
//     </div>
//   );
// }














// классовый компонент
// class App extends Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       // window.store.dispatch(setPizzas(data.pizzas)); // - должен взять все пиццы и поместить их в хранилище
//       // this.props.dispatch(setPizzas(data.pizzas)); // - тоже работает корректно
//       this.props.setPizzas(data.pizzas);
//     });
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route
//             path="/"
//             render={() => <Home items={this.props.items} />}
//             exact
//           />
//           <Route
//             path="/cart"
//             component={Cart}
//             exact
//           />
//         </div>
//       </div>
//     );
//   }
// }

// // {/* <App items={state.pizzas.items} filters={state.filters} /> */}

// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   },
// )(App);

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// };

// // короткая запись
// // const mapDispatchToProps = {
// //   setPizzas,
// // }

// // длинная запись
// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);






























// представление виртуального ДОМ дерева который работает внутри реакта
// {
//   type: 'div',
//   props: {
//     children :[
//       {
//         type: 'h1',
//         children: 'hello world'
//       }
//     ]
//   }
// }

// function App() {
  // return React.createElement('h1', null, 'hello world') // - старая разметка до появления jsx
// }