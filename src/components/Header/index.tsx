import React, { useRef } from 'react';
import Container from '@src/components/Container';
import { Link } from 'react-router-dom';
import css from './style.module.scss';
import accountIcon from '@src/assets/header/account.svg';
import Register from '@src/components/Register';


function Index() {
  const ref = useRef<HTMLButtonElement>(null);

  return [
    <Container type='container_fluid' key="header">
      <header className={ css.header }>
        <Link to={ '/' } className={ css.header__logo }>
          MNTN
        </Link>
        {/*<ul className={ css.header__links }>*/}
        {/*  <li>Equipment</li>*/}
        {/*  <li>About us</li>*/}
        {/*  <li>Blog</li>*/}
        {/*</ul>*/}
        <button className={ css.header__account } ref={ ref }>
          <img src={ accountIcon.toString() } alt="account" />
          <p>Account</p>
        </button>
      </header>
    </Container>,

    <Register forwardedRef={ ref } key="register" />,
  ];
}

export default Index;