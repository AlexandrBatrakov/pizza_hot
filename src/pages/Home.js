import React, { useCallback }  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopap, PizzaBlock } from '../Components';

import {setCategory} from '../redux/actions/filters';

const categoryNames = [
  'Мясные', 
  'Вегетарианская', 
  'Гриль', 
  'Острые', 
  'Закрытые'
];

const sortItems = [
  {
    name: 'популярности',
    type: 'popular'
  },
  {
    name: 'цене', 
    type: 'price',
  },
  {
    name: 'алфавиту',
    type: 'alphabet',
  }
];

function Home() {

  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  // эта функция может передавать в пропс одну и ту же ссылку(остается одна и та же ссылка)
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  // const onSelectCategory = useCallback((index) => {
  //   dispatch(setCategory(index));
  // }, []);

  // передавать только конкретные данные
  // const { items } = useSelector(({ pizzas }) => {
  //   return {
  //     items: pizzas.items,
  //   }
  // });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames} />
        <SortPopap items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items && items.map((obj) => (
            <PizzaBlock
              key={obj.id}
              // первый спопоб прокидывания пропсов в компонент(каждое свойство прокидывается по отдельности)
              // name={obj.name}
              // imageUrl={obj.imageUrl}
              // id={obj.id}
              // второй способ(прокидывание глобального объекта)
              // obj={obj}
              // третий способ использование спред оператора(все свойства этого объекта будут проброщены в текущий компонент)
              {...obj}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
