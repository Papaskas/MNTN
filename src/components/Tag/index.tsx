import React from 'react';
import css from './style.module.scss';


type Tag = {
  children: string;
}
function Index({ children }: Readonly<Tag>) {
  return (
    <div className={ css.tag }>
      <span className={ css.tag_line }></span>
      <span className={ css.tag_title }>{ children }</span>
    </div>
  );
}

export default Index;