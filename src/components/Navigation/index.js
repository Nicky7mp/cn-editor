import React from 'react';
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes';
import '../Navigation/navigation.css';

const Navigation = () => (
    <div className="navigation">
        <ul className="links">
            <li id="signIn">
                <Link to={ROUTES.SIGN_IN}><p>Sign In</p></Link>
            </li>
            <li id="landing">
                <Link to={ROUTES.LANDING}><p>Landing</p></Link>
            </li>
            <li id="home">
                <Link to={ROUTES.HOME}><p>Home</p></Link>
            </li>
            <li id="codeEditor">
                <Link to={ROUTES.CODE_EDITOR}><p>Code Editor</p></Link>
            </li>
            <li id="account">
                <Link to={ROUTES.ACCOUNT}><p>Account</p></Link>
            </li>
            <li id="admin">
                <Link to={ROUTES.ADMIN}><p>Admin</p></Link>
            </li>
        </ul>
    </div>
);

export default Navigation;