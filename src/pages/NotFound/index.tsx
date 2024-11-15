import React from 'react';
import Container from '@src/components/Container';
import css from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '@src/components/Button';
import Tag from '@src/components/Tag';


function Index() {
  const navigate = useNavigate();

  return (
    <Container>
      <section className={ css.not_found }>
        <Tag>Page not found</Tag>
        <h1 className={ css.not_found__heading }>
          Ah, the dreaded 404. Let's get you back on track
        </h1>
        <Button onClick={ () => navigate('/') }>return</Button>
      </section>
    </Container>
  );
}

export default Index;