import React from 'react';
import mercedes from '../../../public/img/logos/mercedes.svg';
import honda from '../../../public/img/logos/honda.png';
import mahindra from '../../../public/img/logos/mahindra.png';
import ford from '../../../public/img/logos/ford.png';
import maruti from '../../../public/img/logos/maruti-suzuki.png';
import fiat from '../../../public/img/logos/fiat.png';
import renault from '../../../public/img/logos/renault.png';
import tata from '../../../public/img/logos/tata.png'
import hyundai from '../../../public/img/logos/hyundai.png';
import volkswagen from '../../../public/img/logos/volkswagen.png';


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