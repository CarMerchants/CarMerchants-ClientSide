import React from 'react';
import ImgWithText from './sections/ImgWithText';
import fb from "../../public/img/CarRelated/fb.svg";
import yt from "../../public/img/CarRelated/yt.svg";
import insta from "../../public/img/CarRelated/insta.svg";
import lin from "../../public/img/CarRelated/lin.svg";
import SubscribeForm from './SubscribeForm';
import {Link} from 'react-router-dom';

const Footer = () => (
    <div className="Footer">
        <div className = "Social-Media">
            <h3>Keep In Touch</h3>
            <div className = "Social-Media__logo">
                <ImgWithText img = {fb} />
                <ImgWithText link = {"https://www.instagram.com/TheCarMerchants/"} img = {insta}/>
                <ImgWithText img = {yt} />
                <ImgWithText link = {"https://www.linkedin.com/in/car-merchants"} img = {lin} />
            </div>
        </div>
        <div className = "TopBrands">
            <h3>Useful Links</h3>
            <span>
                <a href = "/team">The Team</a> |&nbsp;
                <a href = "/join_us">Join Us</a> |&nbsp;
                <a href = "/contact_us">Contact Us</a> |&nbsp;
                <a href = "/blog">Blog</a> |&nbsp;
                <a href = "/sitemap">Sitemap</a>
            </span>

        </div>
        <div className = "TopBrands">
            <h3>Top Brands</h3>
            <span>
               <a>Maruti Suzuki</a> |&nbsp; 
               <a>Hyundai</a> |&nbsp;
               <a>Honda</a> |&nbsp;
               <a>Tata</a> |&nbsp;
               <a>Mahindra</a> |&nbsp; 
               <a>Skoda</a> |&nbsp; 
               <a>Volkswagen</a> |&nbsp;
               <a>Nissan</a> |&nbsp;
               <a>Renault</a> |&nbsp;
               <a>Fiat</a> |&nbsp;
               <a>Audi</a> |&nbsp;
               <a>Merceds Benz</a> |&nbsp; 
               <a>Toyota</a> |&nbsp;
               <a>Chevrolet</a> |&nbsp;
               <a>Ford</a> 
            </span>
        </div>
        <div className = "newsLetter">
            <ReactNotification />
            <SubscribeForm />
        </div>
    </div>
);

export default Footer;