import React from "react";
import {Link} from "react-router-dom";
import {useGlobalState} from "../utils/state";

import './Btn.css';

interface Props {
    text: string;
    to?: string;
    click?: clickEnum;
}

export enum clickEnum {
    k_1 = '1',
    k_2 = '2',
    k_3 = '3',
    k_4 = '4',
    k_5 = '5',
    k_6 = '6',
    k_7 = '7',
    k_8 = '8',
    k_9 = '9',
    k_0 = '0',
    k_a = 'A',
    k_b = 'B',
    k_c = 'C',
    k_d = 'D',
    k_comma = ',',
    k_cancel = 'cancel'
}

export const Btn = (props: Props) => {
    const [val, setVal] = useGlobalState('screenValue')
    const {text, click} = props;

    return (props.to
            ? <Link onClick={() => {setVal('')}} className="btn" to={props.to}>{text}</Link>
            : click
                ? <button
                    onClick={() => {
                        if ((click) === 'cancel') {
                            return setVal('')
                        } else if (val.length > 4) {
                            return null
                        } else setVal(val + click)
                    }
                    } className={`${text} btn`}>{text}</button>
                : <button className={`${text} btn`}>{text}</button>
    );
};
