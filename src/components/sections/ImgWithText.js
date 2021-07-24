import React from 'react';

const ImgWithText = (props) => (
    <div className = "SideImg__WithText">
        <a href = {props.link} target = "_blank"><img className={props.className} src = {props.img} /></a> 
        <div className = {`WithText__text`}>
            <span className = "text__title">{props.title}</span>
            <span className = "text__content">{props.content}</span>
        </div>
    </div>
);

export default ImgWithText;