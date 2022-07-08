import React from "react";
import {Link} from "react-router-dom";
import {useGlobalState} from "../utils/state";

import './Btn.css';

interface Props {
    text: string;
    to?: string;
    click?: string;
}

export const Btn = (props: Props) => {
    const [val, setVal] = useGlobalState('screenValue')
    const {text, click} = props;

    return (props.to
            ? <Link onClick={() => {setVal('')}} className="btn" to={props.to}>{text}</Link>
            : click
                ? <button
                    onClick={() => {
                        if (click === 'cancel') {
                            return setVal('')
                        } else if (val.length > 9) {
                            return null
                        } else setVal(val + click)
                    }
                    }
                    className={`${text} btn`}
                >{text}</button>
                : <button className={`${text} btn`}>{text}</button>
    );
};
