import React from 'react';

const TeamMate = (props) => (
    <div className = "Team__Mate">
        <div class = "Team__Profile_Pic">
            {props.profile_pic && <img src = {props.profile_pic}/>}
        </div>
        <div className = "Team__Info">
            <div className = "Details">
                <h1>{props.name}</h1>
                <p>{props.Designation}</p>
            </div>
            <div className = "Content">
                <h4>{props.info}</h4>
            </div>
        </div>
    </div>
);

export default TeamMate; 