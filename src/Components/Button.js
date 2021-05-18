import { Component } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

// классовый компонент
/* class Button extends Component {

  //   // дает понимание что компонент появился на странице
  //   componentDidMount() {
  //     console.log('компонент кнопка отобразился');
  //   };
  
  //   // дает понимание что компонент обновился
  //   componentDidUpdate() {
  
  //   } 

  render() {
    return (
      <button
        className={classNames(
          'button',
          {
            'button--outline': this.props.outline,
          },
        )}>
        {this.props.children}
      </button>
    );
  };

};

export default Button; */

// функциональный компонент
// все тоже самое как и классового компонента
const Button = ({onClick, className, outline, children}) => {
  return (
    <button
    onClick={onClick}
    className={classNames(
      'button',
      className, {
        'button--outline': outline,
      },
    )}>
    {children} 
  </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func,
}

export default Button;

