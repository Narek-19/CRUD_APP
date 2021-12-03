import React from "react";
import Posts from "./Posts";
import { FilterBar } from "./FilterBar";
import './style.css';
import PostInfoBar from "./PostInfoBar";


export const Article = () => {
    return(
        <div className = "Article">
            <Posts/>
            <PostInfoBar/>
            <FilterBar/>
        </div>
    )
}
