import React, {useEffect, useState} from "react";
import {ItemEntity} from 'types';
import {LeftPanel} from "../LeftPanel/LeftPanel";
import {useGlobalState} from "../utils/state";
import {RightPanel} from "../RightPanel/RightPanel";
import {Link} from "react-router-dom";

import './MainAppArticleListAll.css';

export const MainAppArticleListAll = () => {
    const [val, setVal] = useGlobalState('screenValue')
    const [items, setItems] = useState<ItemEntity[]>([]);
    const [itemID, setItemID] = useGlobalState('itemID');

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
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Loc.</th>
                        <th>Desc.</th>
                        <th>Quan.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id} tabIndex={n += 1} id={item.id} onFocus={() => {setItemID(item.id)}}>
                                <td>{item.name}</td>
                                <td>
                                    <button className={'item-link'}><Link to={'/item'} onClick={() => {setVal('')}}>{item.location.toUpperCase()}</Link></button>
                                </td>
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
