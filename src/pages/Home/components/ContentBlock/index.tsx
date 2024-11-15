import { useNavigate } from 'react-router-dom';
import css from './style.module.scss';
import Tag from '@src/components/Tag';
import Button from '@src/components/Button';
import React from 'react';


export type ContentBlock = {
  tag: string;
  title: string;
  description: string;
  url: string;
  count: number;
  image: string;
  altImage: string;
}
function Index({ tag, title, description, url, count, image, altImage }: Readonly<ContentBlock>) {
  const navigate = useNavigate();

  return (
    <div className={ css.content_block }>
      <div className={ css.content_block__count }> 0{ count }</div>
      <div className={ css.content_block__text }>
        <Tag>{ tag }</Tag>
        <h2 className={ css.content_block__title }>{ title }</h2>
        <p className={ css.content_block__description }>{ description }</p>
        <Button onClick={() => navigate(url) }>read more</Button>
      </div>
      <div className={ css.content_block__img }><img src={ image } alt={  altImage }/></div>
    </div>
  )
}

export default Index;
