import React,{useState, useEffect} from 'react';

export const Button = props => {
    const classes = props.className ? props.className :"btn btn-primary flex-fill";
    return (
        <button  onClick={typeof props.onClick === "function"  ? props.onClick() : null} className={classes} >{props.title}</button>
    )
}