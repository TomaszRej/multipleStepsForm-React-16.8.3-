import React, { useState } from 'react';

export const TextInput = (props) => {



    const renderInfo = (x = "xxx") => {
        return (
            props.info ? <small id="emailHelp" className="form-text text-muted">{props.info + x}</small> : null
        )
    }
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{props.label}</label>
            <input value={props.value} onChange={typeof props.onChange === "function"  ? props.onChange() : null} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.placeholder} />
            {renderInfo()}
        </div>
    )
}