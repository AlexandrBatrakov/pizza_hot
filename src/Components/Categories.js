import React, { Component, memo, useState } from 'react';

// функциональный компонент
// memo - позволяет не обновлять компонент 
const Categories = memo(
  function Categories({ items, onClickItem }) {

    const [activeItem, setActiveItem] = useState(null);
  
    const onSelectItem = (index) => {
      setActiveItem(index);
      onClickItem(index);
    };
  
    return (
      <div className="categories">
        <ul>
          <li
            className={activeItem === null ? 'active' : ''}
            onClick={() => onSelectItem(null)}
          >
            Все
              </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    )
  }
)

export default Categories
















// классовый компонент
// class Categories extends Component {

//   state = {
//     activeItem: 3,
//     test: 123,
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index,
//     });
//     // this.forceUpdate();

//     // костыльный метод - он равен setState
//     // this.state.activeItem = index;
//     // this.forceUpdate();

//   }

//   render() {
//     const { items, onClickItem } = this.props
//     console.log(this.state);
//     return (
//       <div>
//         <div className="categories">
//           <ul>
//             <li className="active">Все</li>
//             {items.map((name, index) => (
//               <li
//                 className={this.state.activeItem === index ? 'active' : ''}
//                 onClick={() => this.onSelectItem(index)}
//                 key={`${name}_${index}`}
//               >
//                 {name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };
// };