import React from 'react';
import mercedes from '../../../public/img/CarRelated/mercedes.svg';
import honda from '../../../public/img/CarRelated/honda.png';
import mahindra from '../../../public/img/CarRelated/mahindra.png';
import ford from '../../../public/img/CarRelated/ford.png';
import maruti from '../../../public/img/CarRelated/maruti-suzuki.png';
import fiat from '../../../public/img/CarRelated/fiat.png';
import renault from '../../../public/img/CarRelated/renault.png';
import tata from '../../../public/img/CarRelated/tata.png'
import hyundai from '../../../public/img/CarRelated/hyundai.png';
import volkswagen from '../../../public/img/CarRelated/volkswagen.png';


const CarLogos = () => (
    <div className = "CarLogo">
        <div className="logo">
            <img src={mercedes}/>
        </div>
        <div className="logo">
            <img src={renault}/>
        </div>
        <div className="logo">
            <img src={fiat}/>
        </div>
        <div className="logo">
            <img src={honda}/>
        </div>
        <div className="logo">
            <img src={ford}/>
        </div>
        <div className="logo">
            <img src={mahindra}/>
        </div>
        <div className="logo">
            <img src={maruti}/>
        </div>
        <div className="logo">
            <img src={tata}/>
        </div>
        <div className="logo">
            <img src={hyundai}/>
        </div>
        <div className="logo">
            <img src={volkswagen}/>
        </div>
    </div>
)

export default CarLogos;