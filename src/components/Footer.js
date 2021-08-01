import React from 'react';
import ImgWithText from './sections/ImgWithText';
import fb from "../../public/img/CarRelated/fb.svg";
import yt from "../../public/img/CarRelated/yt.svg";
import insta from "../../public/img/CarRelated/insta.svg";
import lin from "../../public/img/CarRelated/lin.svg";
import SubscribeForm from './SubscribeForm';
import {Link,BrowserRouter} from 'react-router-dom';
import {links} from './sections/ImportantLinks';

const Footer = () => (
    <div className="Footer">
        <div className = "Social-Media">
            <h3>Keep In Touch</h3>
            <div className = "Social-Media__logo">
                <ImgWithText img = {fb} link = {links.facebook}/>
                <ImgWithText link = {links.instagram} img = {insta}/>
                <ImgWithText img = {yt} link = {links.youtube}/>
                <ImgWithText link = {links.linkedIn} img = {lin} />
            </div>
        </div>
        <div className = "TopBrands">
            <h3>Useful Links</h3>
            <span>
                <Link id = "footer-btn" to = "/team">The Team</Link> |&nbsp;
                <Link id = "footer-btn" to = "/join_us">Join Us</Link> |&nbsp;
                <Link id = "footer-btn" to = "/contact_us">Contact Us & FeedBack</Link> |&nbsp;
                <Link id = "footer-btn" to = "/blog">Blog</Link> |&nbsp;
                <Link id = "footer-btn" to = "/sitemap">Sitemap</Link>
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
               <a>Ford</a> |&nbsp;
               <a>Kia</a> |&nbsp;
               <a>Datson</a>
            </span>
        </div>
        <div className = "newsLetter">
            <SubscribeForm />
        </div>
    </div>
);

export default Footer;
