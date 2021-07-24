import React from 'react';
import TeamMate from './sections/TeamMate';
import ford from '../../public/img/CarRelated/ford.png' 

const TeamPage = () => (
    <div className = "Team">
        <div>
            <TeamMate profile_pic = {ford} name = "Yash Rohera" Designation = "CTO & Co-Founder" info = "I am Yash Rohera the CTO of the Car Merchants."/>
        </div>
        <div>
            <TeamMate profile_pic = {ford} name = "Aditya Salunke" Designation = "COO & Co-Founder" info = "I am Aditya Salunke the COO of Car Merchants." />
        </div>
    </div>
);

export default TeamPage;