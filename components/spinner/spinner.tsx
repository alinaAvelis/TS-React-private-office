import React from 'react';
import "./spinner.scss";

const Spinner = () => {
    return <div className="spinner">
                <div className='spinner__sircle'>
                    <div className='spinner__sub_sircle  spinner__sub_sircle--1'></div>
                    <div className='spinner__sub_sircle  spinner__sub_sircle--2'></div>
                    <div className='spinner__sub_sircle  spinner__sub_sircle--3'></div>
                </div>
        </div>
}

export default Spinner;