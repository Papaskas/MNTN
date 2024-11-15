import React from 'react';
import Container from '@src/components/Container';
import Tag from '@src/components/Tag';
import css from './style.module.scss';
import instagramIcon from '@src/assets/core/instagram.svg';
import twitterIcon from '@src/assets/core/twitter.svg';


function Index() {
  return (
    <Container type="container_fluid">
      <section className={ css.preview }>
        <div className={ css.preview__links }>
          <p className={ css.preview__links_heading }>Follow us</p>
          <a href="https://instagram.com"><img src={ instagramIcon.toString() } alt="instagram" /></a>
          <a href="https://twitter.com"><img src={ twitterIcon.toString() } alt="twitter" /></a>
        </div>
        <div className={ css.preview__heading }>
          <Tag>A HIKING GUIDE</Tag>
          <h1 className={ css.preview__heading_heading }>Be Prepared For The Mountains And Beyond!</h1>
          <p className={ css.preview__heading_btn_scroll }>scroll down</p>
        </div>
        <div className={ css.preview__controls }>
          <p>Start</p>
        </div>
      </section>
    </Container>
  );
}

export default Index;