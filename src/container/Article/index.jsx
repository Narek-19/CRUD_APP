import React from "react";
import Posts from "./Posts";
import { FilterBar } from "./FilterBar";
import style from "./style.module.css";
import {PostInfoBar} from "./PostInfoBar";


export const Article = () => {
    return(
        <div className = {style.Article}>
            <Posts/>
            <PostInfoBar/>
            <FilterBar/>
        </div>
    )
}
