import React from 'react';
import ContactUsForm from './ContactUsForm';
import ErrorButton from './ErrorButton';
import {links} from './sections/ImportantLinks';


const ContactUsPage = () => (
    <div className = "MainContactUs">
        <div className = "ContactUs">
            <div className = "ContactUs__heading">
                <h3>What Can We Help You With?</h3>
            </div>
            <div className = "ContactUs__form">
                <ContactUsForm />
            </div>
        </div>
        <div className = "PhoneNumbers">
            <div>
                <h3 className = "PhoneNumbers__header">Helpline Numbers</h3>
                <h4>+91-8879689643</h4>
                <h4>+91-9664550617</h4><br />
                <h3 className = "PhoneNumbers__header">Email Us At </h3>
                <a href = {links.gmail}
                   target = "_blank"
                   style = {{color : "#465166", textDecoration : "none"}}
                ><h4>carrmerchants@gmail.com</h4><br /></a>
                <h3 className = "PhoneNumbers__header">Address</h3>
                <h4>Vani Apt , A-Wing , 2nd Floor 204,<br />Chembur, Mumbai - 400074</h4>
            </div>
        </div>
    </div>
);

export default ContactUsPage;