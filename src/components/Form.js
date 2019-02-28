import React from 'react';

export const Form = props => {
    return (
        <form className="p-5">
            <div className="row">
                <div className="col-6 mx-auto">
                    {props.children}
                </div>
            </div>

        </form>
    )
}