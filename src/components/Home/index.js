import React from 'react';
import UserLockIcon from 'Assets/svg/user-lock-solid.svg';

const Home = () => {
  return <div style={{ textAlign: 'center' }}>
    <div style={{ color: '#06718f' }}>React/Redux-with-saga by aulion</div>
    <UserLockIcon
      style={{ marginTop: 20, width: 30, height: 30, cursor: 'pointer', marginRight: 20, color: '#92e08d' }}
    />
  </div>
}

export default Home;