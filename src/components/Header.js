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
import cart from '../../public/img/CompanyRelated/cart.png';
import logout from '../../public/img/CompanyRelated/logout.png';
import ProfilePageForm from './ProfilePageForm';

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
                <NavLink  id = "external-link-btn" className = "Option__text" activeClassName="isActive" to = "/products" >Buy Car</NavLink>
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
            <h3>Welcome, <span id = "name"></span></h3>
            <button className = "DropDown__btn">
                <div className = "DropDown__imgbtn">
                <img src = {cart} />Cart
                </div>
            </button>
            <button className = "DropDown__btn">Orders</button>
            <ProfilePageForm button_name = "Profile" ChgNum = {false}/>
            <ProfilePageForm button_name = "Update Profile" ChgNum = {true}/>
            <button onClick = {processLoginLogout} className ="DropDown__btn" id = "loginout-btn">
                <div className = "DropDown__imgbtn">
                    <img id = "loginout-btn-img" src = {logout}/><span id = "loginout-btn-text">Log Out</span>
                </div>
            </button>
        </div>
    </div>
);

export default Header;
