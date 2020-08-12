import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import { useStateValue } from './StateProvider';


function Header() {
    const [{user}, dispatch ] = useStateValue();

    return (
        <div className="header">

            <div className="header__left">
                <Avatar className="header__avatar" 
                alt={user?.displayName}
                src={user?.photoURL} 
                />
                <AccessTimeIcon />
                {/* Avatar for logged in user */}
                {/* Time icon */}
            </div>

            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="Search Programmers for Society"/>
                {/* Search icom */}
                {/* input */}
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
                {/* help */}

            </div>

        </div>
    )
}

export default Header;
