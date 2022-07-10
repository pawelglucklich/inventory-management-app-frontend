import React from "react";
import {actionEnum, Btn} from "../common/Btn";
import {Clock} from "../utils/Clock";

import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <Btn to={'/'} text={'article'} action={actionEnum.articleListAll}/>
            <Btn to={'/location'} text={'location'} action={actionEnum.locationListAll}/>
            <div className={'footer-right'}>
                <h2>John Smith</h2>
                <Clock/>
            </div>
        </footer>
    );
};
