import React, { useRef, useEffect } from 'react';
import css from './style.module.scss';
import Tag from '@src/components/Tag';
import Button from '@src/components/Button';


type Dialog = {
  tag: string;
  children: React.JSX.Element | React.JSX.Element[] | string;
  forwardedRef: React.RefObject<any>;
}
function Index({ tag, children, forwardedRef }: Readonly<Dialog>) {
  const refDialog = useRef<HTMLDialogElement>(null);

  const cancel = () => { refDialog.current?.close(); }

  useEffect(() => {
    forwardedRef.current?.addEventListener('click', () => {
      refDialog.current?.showModal();
    });
  });

  return (
    <dialog className={ css.dialog } ref={ refDialog }>
      <Tag>{ tag }</Tag>
      <div className={ css.dialog__children }>{ children }</div>
      <Button onClick={ cancel }>Close</Button>
    </dialog>
  )
}

export default Index;