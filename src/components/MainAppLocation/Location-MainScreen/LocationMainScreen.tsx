import React from "react";
import {useGlobalState} from "../../utils/state";

import './LocationMainScreen.css';

export const LocationMainScreen = () => {
    const [val, setVal] = useGlobalState('screenValue')

    const valScreen = (val[4] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . ${val[4]}`
            : val[3] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . _`
                : val[2] ? `${val[0]} ${val[1]} . ${val[2]} _ . _`
                    : val[1] ? `${val[0]} ${val[1]} . _ _ . _`
                        : val[0] ? `${val[0]} _ . _ _ . _`
                            : `_ _ . _ _ . _`
    );


    return (
        <div className={'location-main-screen'}>
            <div className={'screen'}>
                <p>{valScreen}</p>
            </div>
        </div>
    );
};
