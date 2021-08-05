import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import close from '../../public/img/CarRelated/letter-x.png';
import CompanyLogo from '../../public/img/CompanyRelated/CompanyLogoWithTitle.png';
import { processLoginLogout, userDetails } from '../action/auth';
import { SetBtnInfo} from '../action/auth';
import {firebase} from '../firebase/firebase';
import user_img from '../../public/img/CompanyRelated/GuestLogin.png';
import drop_down from '../../public/img/CompanyRelated/drop_down.png';
import  UpdateProf  from './sections/OptionModal';


const Header = () => (
    <div class = "Header">
        <div className = "HamBurgers">
            <div className = "Burgers"></div>
            <div className = "Burgers"></div>
            <div className = "Burgers"></div>
        </div>
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
                <NavLink  id = "external-link-btn" className = "Option__text" activeClassName="isActive" to = "/products" >Reviews</NavLink>
            </div>
            <div className = "Option">
                <NavLink id = "external-link-btn" className = "Option__text" activeClassName="isActive" to = "/team" >Team</NavLink>
            </div>
        </div>
        <div className = "login-user">
            <img id = "user-img" src = {user_img}/><img id = "drop_down" src = {drop_down} />
        </div>
        <div className = "DropDown">
            <h4>Welcome, <span id = "name"></span></h4>
            <button className = "DropDown__btn"><Link className = "Link" to = "/profile">View Profile</Link></button>
            <button onClick = {processLoginLogout} className ="DropDown__btn" id = "loginout-btn">Logout</button>
        </div>
    </div>
);

export default Header;
