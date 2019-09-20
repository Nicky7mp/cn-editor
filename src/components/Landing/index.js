import React from 'react';

import '../Landing/landing.css'
import codenationLogo from '../../utilities/images/codenationTwo.png'
import SignIn from '../SignIn';

const Landing = () => (
  <div className="landing">
  <h1>Landing</h1>
    <div className="codenationLogo">
      <img src={codenationLogo} alt="codenationLogo"/>
    </div>
    <div className="signIn">
      <SignIn />
    </div>
  </div>
  );

export default Landing;