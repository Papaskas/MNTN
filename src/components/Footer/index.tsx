import React from 'react';
import Container from '@src/components/Container';
import css from './style.module.scss';
import { Link } from 'react-router-dom';


function Index() {
  return (
    <Container>
      <footer className={ css.footer }>
        <div className={ css.footer__heading }>
          <div>
            <h2 className={ css.footer__heading_logo }>MNTN</h2>
            <p className={ css.footer__heading_description }>Get out there & discover your next<br/> slope, mountain & destination!</p>
          </div>
          <p className={ css.footer__heading_copyright }>Copyright { new Date().getFullYear() } MNTN, Inc. Terms & Privacy</p>
        </div>
        <div className={ css.footer__list }>
          <h3 className={ css.footer__list_heading }>More on The Blog</h3>
          <ul className={ css.footer__list_ul }>
            <li><Link to={'/'}>About MNTN</Link></li>
            <li><Link to={'/'}>Contributors & Writers</Link></li>
            <li><Link to={'/'}>Write For Us</Link></li>
            <li><Link to={'/'}>Contact Us</Link></li>
            <li><Link to={'/'}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div className={ css.footer__list }>
          <h3 className={ css.footer__list_heading }>More on MNTN</h3>
          <ul className={ css.footer__list_ul }>
            <li><Link to={'/'}>The Team</Link></li>
            <li><Link to={'/'}>Jobs</Link></li>
            <li><Link to={'/'}>Press</Link></li>
          </ul>
        </div>
      </footer>
    </Container>
  );
}

export default Index;