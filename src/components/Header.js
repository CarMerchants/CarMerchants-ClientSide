import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../public/img/CarRelated/letter-x.png';
import CompanyLogo from '../../public/img/CompanyRelated/CompanyLogoWithTitle.png';
import { processLoginLogout, userDetails } from '../action/auth';
import { SetBtnInfo} from '../action/auth';
import {firebase} from '../firebase/firebase';

const Header = () => (
    <div class = "Header">
        <div className = "Comp-Logo">
            <img src = {CompanyLogo} />
        </div>
        <div className = "NavBar">
            <div className = "Close">
                <img src = {close}/>
            </div>
            <div className = "Option">
                <NavLink id = "external-link-btn" className = "Option__text" activeClassName="isActive" exact={true} to = "/">Home</NavLink>
            </div>
            <div className = "Option">
                <NavLink  id = "external-link-btn" className = "Option__text" activeClassName="isActive" to = "/products" >Products</NavLink>
            </div>
            <div className = "Option">
                <NavLink id = "external-link-btn" className = "Option__text" activeClassName="isActive" to = "/team" >Team</NavLink>
            </div>
            <div className = "login__btn Option">
                <button id ="log__btn" onClick = {processLoginLogout} className = "Option__text"></button>
            </div>
        </div>
        <div className = "login-user">
            <h2 id = "login-user"></h2>
        </div>
        <div className = "HamBurgers">
            <div className = "Burgers"></div>
            <div className = "Burgers"></div>
            <div className = "Burgers"></div>
        </div>
    </div>
);

export default Header;
