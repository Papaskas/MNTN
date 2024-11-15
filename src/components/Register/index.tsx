import React, { useRef } from 'react';
import Dialog from '@src/components/Dialog';
import Login from '@src/components/Login';


type Register = {
  forwardedRef: any;
}
function Index({ forwardedRef }: Readonly<Register>) {
  const haveAccountBtn = useRef<HTMLButtonElement>(null);

  return [
    <Dialog
      key="register"
      tag="Sign on"
      forwardedRef={ forwardedRef }
    >
      <form style={{ display: 'grid', gap: '15px', marginBottom: '15px' }}>
        <input type="login" placeholder="login" autoFocus name="login" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Sign on</button>
      </form>
      <button ref={ haveAccountBtn }>Already have an account?</button>
    </Dialog>,

    <Login forwardedRef={ haveAccountBtn } key="login"/>
  ]
}

export default Index;