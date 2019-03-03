import React, { useState } from 'react';

export const TextInput = props => {

    const renderError = () => {
        if(!props.error || !props.touched || props.isValid){
            return;
        }
        return (
            <div className="alert alert-danger mt-2">{props.error}</div>
        );
    }
    const renderInfo = () => {
        return (
            props.info ? <small id="emailHelp" className="form-text text-muted">{props.info }</small> : null
        )
    }
    const isValid = props.isValid ? props.isValid : false;
    const classesWithValidation =  isValid ? "form-control is-valid" : "form-control is-invalid";
    const classes = props.touched ? classesWithValidation : "form-control";

    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{props.label}</label>
            <input name={props.name} onBlur={typeof props.onBlur === 'function' ? props.onBlur() : null} value={props.value} onChange={typeof props.onChange === "function" ? props.onChange() : null} type="email" className={classes} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.placeholder} />
            {renderError()}
            {renderInfo()}
        </div>
    )
}