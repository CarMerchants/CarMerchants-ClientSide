import React from 'react';
import ErrorButton from './ErrorButton';
import car from '../../public/img/CarRelated/car.png';
import fuel_type from '../../public/img/CompanyRelated/fuel_type.svg';
import km_driven from '../../public/img/CompanyRelated/km_driven.svg';
import Owner from '../../public/img/CompanyRelated/Owner.svg';
import purchase from '../../public/img/CompanyRelated/purchase_year.svg';
import insurance from '../../public/img/CompanyRelated/insurance.svg';
import transmission_type from '../../public/img/CompanyRelated/transmission_type.svg';
import CarModal from './sections/CarModal';

export default class ProductPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
            contentLabel : "temp",
        }

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onCloseHandler = this.onCloseHandler.bind(this);
    }

    onClickHandler(e){
        this.setState(() => ({
            isOpen : true,
            contentLabel : e.target.value,
        }));        
    };

    onCloseHandler(){
        this.setState(() => ({
            isOpen : false,
        }));
    };

    render(){
        return (
            <div className = "ProductPage">
            <div className = "Car-Options">
                <div onClick = {this.onClickHandler} value = "Yash" className = "Option">
                    <div className = "Car-Img">
                        <img src = {car}/>
                    </div>
                    <div className = "Car-Name">
                        <h1>Maruti Suzuki Wagon R</h1>
                    </div>
                    <div className = "Car-Details">
                        <div className = "details">
                            <div>
                                <img src = {fuel_type}/>
                            </div>
                            <div>
                                <p>Diesel</p>
                            </div>
                        </div>
                        <div className = "details">
                            <div>
                                <img src = {km_driven}/>
                            </div>
                            <div>
                                <p>2,000,000 km</p>
                            </div>
                        </div>
                        <div className = "details">
                            <div>
                                <img src = {transmission_type}/>
                            </div>
                            <div>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className = "details">
                            <div>
                                <img src = {purchase}/>
                            </div>
                            <div>
                                <p>Jan 2021</p>
                            </div>
                        </div>
                        <div className = "details">
                            <div>
                                <img src = {Owner}/>
                            </div>
                            <div>
                                <p>2nd Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div value = "Bharat" onClick = {this.onClickHandler} className = "Option"></div>
                <div className = "Option"></div>
                <div className = "Option"></div>
                <div className = "Option"></div>
                <div className = "Option"></div>
                <div className = "Option"></div>         
            </div>
            <CarModal 
                isOpen = {this.state.isOpen}
                onCloseHandler = {this.onCloseHandler}
                contentLabel = {this.state.contentLabel}
            />
        </div>
        )
    }

};

