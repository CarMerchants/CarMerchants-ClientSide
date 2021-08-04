import React from 'react';
import CarLogos from './sections/CarLogoSec';
import SideImg from './sections/SideImgSec';
import service from '../../public/img/CarRelated/service.svg';
import sold from '../../public/img/CarRelated/sold.svg';
import SellHour from '../../public/img/CarRelated/SellHour.svg';
import BestPrice from '../../public/img/CarRelated/BestPrice.svg';
import InstPay from '../../public/img/CarRelated/InstPay.svg';
import FreeRc from '../../public/img/CarRelated/FreeRc.svg';
import doorstep from '../../public/img/CarRelated/online_payment_doorstep_delivery.png';
import choose from '../../public/img/CarRelated/choose_from_the_best_pre_owned_cars.png';
import test_drive from '../../public/img/CarRelated/test_drive.png';
import ImgWithText from './sections/ImgWithText';
import Header from './Header';

const HomePage = () => (
    <div className = "HomePage">
        <h1>Select your car at the best price</h1>
        <div className = "RowSec">
            <CarLogos />
            <SideImg img = {service} />
            <SideImg img = {sold} />
        </div>
        <h1>Why Choose Us?</h1>
        <div className = "RowSec">
            <ImgWithText img = {SellHour} title = "New Cars" content = "Get New Car Options Every Week"/>
            <ImgWithText img = {BestPrice} title = "Best Price" content = "Get an Affordable Price"/>
            <ImgWithText img = {InstPay} title = "Save Money" content = "Get Amazing Deals"/>
            <ImgWithText img = {FreeRc} title = "Free RC Transfer" content = "Get a Free RC Transfer"/>
        </div>
        <div>
            <h1>How Do We Work?</h1>
            <div className = "RowSec">
                <ImgWithText className = "changeImgWithText" img = {choose} content = "Choose From The Best Pre Owned Cars"/>
                <ImgWithText className = "changeImgWithText" img = {test_drive} content = "Get A Test Drive Before Finalizing"/>
                <ImgWithText className = "changeImgWithText" img = {doorstep} content = "Doorstep Delivery"/>
            </div>
        </div>
        <div>
            <h2>Why Buy A Used Car from Car Merchants?</h2>
            <div className = "plain_text">
                <p>
                Car Merchants takes the risk out of buying a pre-owned car to offer you peace of mind with zero compromises. 
                Our multi-step filtering ensures that you always get to choose from a pool of highest quality certified second hand cars.  
                Any used car can get certified. It takes perfection to be Car Merchants Certified. Experience a simple and fully transparent way of buying used cars with Car Merchants. 
                Find your perfect match from our wide range of fully inspected & certified used cars at the best prices. 
                With Car Merchants, pre-owned is better than new. Get the savings of a pre-owned with the quality of a new car. 
                All this through a transparent,convenient and trustworthy process, to make sure you buy a car you'll love, guaranteed.
                </p>
            </div>
        </div>
    </div>
);

export default HomePage;

