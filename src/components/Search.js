import React from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

const Search = () => {
    return (
        <div classNamne="search1">
            <div className="search__avatar">
                 <Avatar />
</div>
<div className="search__icon">
                <SearchIcon />
                <input type="text" placeholder="Search..."/>
              </div>           
          
        </div>
    )
}

export default Search
