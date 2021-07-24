import React from 'react';
import TeamMate from './sections/TeamMate';
import ford from '../../public/img/CarRelated/ford.png' 

const TeamPage = () => (
    <div className = "Team">
        <div>
            <TeamMate profile_pic = {ford} name = "Yash Rohera" Designation = "CTO & Co-Founder" info = "I am Yash Rohera.I am Yash Rohera. dhfdjhdf dfdfdfdfdfdfdfddddfdfdfdfddfdfdfdfdfdfdfdfdfdfdfdddfdfdfdffkdjfk"/>
        </div>
        <div>
            <TeamMate profile_pic = {ford} name = "Aditya Salunke" Designation = "COO & Co-Founder" info = "I am Rohit Mahatme. I am Ro" />
        </div>
        <div>
            <TeamMate profile_pic = {ford} name = "Aditya Salunke" Designation = "COO & Co-Founder" info = "I am Rohit Mahatme. I am Ro" />
        </div>
        <div>
            <TeamMate profile_pic = {ford} name = "Aditya Salunke" Designation = "COO & Co-Founder" info = "I am Rohit Mahatme. I am Ro" />
        </div>
    </div>
);

export default TeamPage;