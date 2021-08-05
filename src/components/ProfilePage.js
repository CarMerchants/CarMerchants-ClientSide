import React from 'react';
import {firebase} from '../firebase/firebase';
import { profilePage, SetBtnInfo,details } from '../action/auth';
import user_img from '../../public/img/CompanyRelated/GuestLogin.png';
import Header from './Header';
import Footer from './Footer';
export default class ProfilePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profile_pic : details.profile_pic, 
        }

    }
    
    render(){
        return (
            <div className = "ProfilePage">
                    <h2>My Profile</h2>
            </div>
        )
    };
}
