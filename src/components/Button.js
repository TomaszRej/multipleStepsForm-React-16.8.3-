import React,{useState, useEffect} from 'react';

export const Button = props => {

    return (
        <button  onClick={typeof props.onClick === "function"  ? props.onClick() : null} className="btn btn-primary flex-fill" >{props.title}</button>
    )
}