import React, {useEffect, useState} from "react";
import {ItemEntity} from 'types';

import {useGlobalState} from "../../utils/state";
import {LocationLeftPanel} from "../Location-LeftPanel/LocationLeftPanel";
import {LocationRightPanel} from "../Location-RightPanel/LocationRightPanel";

import './LocationListAll.css';

export const LocationListAll = () => {
    const [val, setVal] = useGlobalState('screenValue')
    const [items, setItems] = useState<ItemEntity[]>([]);

    useEffect(() => {
        (async () => {
            if (val.length < 5) {
                return '';
            } else {
                const res = await fetch(`http://localhost:3001/item/search/location/${val}`);
                const data = await res.json();
                setItems(data.items);
            }
        })();
    }, []);

    return (
        <div className={'location-list-all'}>
            <LocationLeftPanel/>
            <div className={'screen'}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                    </tr>
                    {
                        items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <LocationRightPanel/>
        </div>
    );
}
