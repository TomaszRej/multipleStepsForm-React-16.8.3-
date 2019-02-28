import React from 'react';

export const Form = props => {
    return (
        <form className="container">
            {props.children}
        </form>
    )
}