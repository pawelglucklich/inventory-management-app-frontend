import React from "react";
import {Btn} from "../common/Btn";
import {Clock} from "../utils/Clock";

import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <Btn to={'/article'} text={'article'}/>
            <Btn to={'/'} text={'location'}/>
            <div className={'footer-right'}>
                <h2>John Smith</h2>
                <Clock/>
            </div>
        </footer>
    );
};
