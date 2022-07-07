import React from "react";
import {Btn} from "../common/Btn";
import {Clock} from "../common/Clock";

import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <Btn text={'Men1'}/>
            <Btn text={'Men2'}/>
            <div className={'footer-right'}>
                <h2>John Smith</h2>
                <Clock/>
            </div>
        </footer>
    );
};
