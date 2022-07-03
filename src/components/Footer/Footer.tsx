import React from "react";
import { Btn } from "../common/Btn";

import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <Btn text={'Men1'}/>
            <Btn text={'Men2'}/>
            <h2>John Smith</h2>
            <p>00:00</p>
        </footer>
    );
};
