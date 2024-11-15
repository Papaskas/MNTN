import React from 'react';
import css from './style.module.scss';
import arrowIcon from '@src/assets/core/arrow.svg';


interface IButton {
  children: React.JSX.Element | React.JSX.Element[] | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function Index({ children, onClick }: Readonly<IButton>) {

  return (
    <button onClick={ onClick } className={ css.button }>
      { children } <img src={ arrowIcon.toString() } alt="arrow" />
    </button>
  );
}

export default Index;