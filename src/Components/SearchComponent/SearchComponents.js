import React from "react";
import './Search.css';
import MenuComponent from "../MenuComponent/MenuComponents"
let data = require("../../issues.json");


const SearchComponents = (props) => {

    const sort = ["newest", "oldest", "recently updated", "least recently updated"];

    const authorArr = data.map(issue => issue.user.login);
    const uniqueAuthorArr = Array.from(new Set(authorArr));
    const labelsArr = data.map(issue => {
        return issue.labels.map(label => label.name);
    });
    const merged = [].concat.apply([], labelsArr);
    const uniqueLabelsArr = Array.from(new Set(merged));
    return (<div className="search-bar" >
        {
            <div className="search-bar-container">
                <input type="text" className="search-box" placeholder="Search"></input>
                <MenuComponent className="menu-components" name="Sort" sortArr={sort} click={props.click} />
                <MenuComponent className="menu-components" name="Author" sortArr={uniqueAuthorArr} />
                <MenuComponent className="menu-components" name="Label" sortArr={uniqueLabelsArr} />
            </div>
        }
    </div>)

};

export default SearchComponents;