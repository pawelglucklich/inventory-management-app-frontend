import React from "react";
import {Btn} from "../common/Btn/Btn";

import './Footer.css';
import {FooterClock} from "./Clock/Footer-Clock";

export const Footer = () => {
    return (
        <footer>
            <Btn text={'Men1'}/>
            <Btn text={'Men2'}/>
            <div className={'footer-right'}>
                <h2>John Smith</h2>
                <FooterClock/>
            </div>
        </footer>
    );
};
