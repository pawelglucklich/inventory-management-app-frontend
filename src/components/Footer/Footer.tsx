import React from "react";
import {Btn} from "../common/Btn";
import {Clock} from "../common/Clock";

import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <Btn text={'Men1 hidden'}/>
            <Btn text={'Men2 hidden'}/>
            <div className={'footer-right'}>
                <h2>John Smith</h2>
                <Clock/>
            </div>
        </footer>
    );
};
