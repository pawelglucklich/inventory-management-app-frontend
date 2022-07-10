import React from "react";
import {LeftPanel} from "../LeftPanel/LeftPanel";
import {RightPanel} from "../RightPanel/RightPanel";
import {ArticleMainScreen} from "./Article-MainScreen/ArticleMainScreen";

import './MainAppArticle.css';

export const MainAppArticle = () => {
    return (
        <div className={'main-app-article'}>
            <LeftPanel/>
            <ArticleMainScreen/>
            <RightPanel/>
        </div>
    );
};
