import React from "react";
import {ArticleLeftPanel} from "./Article-LeftPanel/ArticleLeftPanel";
import {ArticleRightPanel} from "./Article-RightPanel/ArticleRightPanel";
import {ArticleMainScreen} from "./Article-MainScreen/ArticleMainScreen";

import './MainAppArticle.css';

export const MainAppArticle = () => {
    return (
        <div className={'main-app-article'}>
            <ArticleLeftPanel/>
            <ArticleMainScreen/>
            <ArticleRightPanel/>
        </div>
    );
};
