import React from 'react';
import Dialog from '@src/components/Dialog';


type Login = {
  forwardedRef: any;
}
function Index({ forwardedRef }: Readonly<Login>) {

  return (
    <Dialog
      tag="Sign in"
      forwardedRef={ forwardedRef }
    >
      <form style={{ display: 'grid', gap: '15px', marginBottom: '15px' }}>
        <input type="login" placeholder="login" autoFocus name="login" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Sign in</button>
      </form>
    </Dialog>
  )
}

export default Index;