import React from 'react';
import UserLockIcon from 'Assets/svg/user-lock-solid.svg';

const Home = () => {
  return (
    <div>
      <div className="title">React/Redux-with-saga by aulion</div>
      <UserLockIcon
        style={{ marginTop: 20, width: 30, height: 30 }} // inline styling in JSX
      />
    </div>
  )
}

export default Home;
