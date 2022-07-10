import React, {useEffect, useState} from "react";
import {ItemEntity} from 'types';
import {LeftPanel} from "../LeftPanel/LeftPanel";
import {useGlobalState} from "../utils/state";
import {RightPanel} from "../RightPanel/RightPanel";

import './MainAppArticleListAll.css';

export const MainAppArticleListAll = () => {
    const [val, setVal] = useGlobalState('screenValue')
    const [items, setItems] = useState<ItemEntity[]>([]);

    useEffect(() => {
        (async () => {
            if (val.length < 5) {
                return '';
            } else {
                const res = await fetch(`http://localhost:3001/item/search/article/${val}`);
                const data = await res.json();
                setItems(data.items);
            }
        })();
    }, []);

    let n = 0;

    return (
        <div className={'article-list-all'}>
            <LeftPanel/>
            <div className={'screen'}>
                <table>
                    <tbody>
                    <tr>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Quantity</th>
                    </tr>
                    {
                        items.map(item => (
                            <tr key={item.id} tabIndex={n += 1}>
                                <td>{(item.location).toUpperCase()}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <RightPanel/>
        </div>
    );
}
