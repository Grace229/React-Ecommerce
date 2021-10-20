import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Grid, InputBase } from '@material-ui/core';
import { LocalMallOutlined } from '@material-ui/icons';

const Header2 = () => {
    return (
        <div>
            <Grid className="header2">
                <Grid className="header2__left" item sm={2} xs={2}>
                    <h1>Frotoo</h1>
                </Grid>
                <Grid className="header2__middle" item sm={7} xs={10}>
                    <ul className="header2__lists">
                        <li className="header2__list">Menu</li>
                        <li className="header2__list">Pages</li>
                        <li className="header2__list">Gallery</li>
                        <li className="header2__list">Blog</li>
                        <li className="header2__list">Shop</li>
                        <li className="header2__list">Elements</li>
                    </ul>
                </Grid>
                <Grid className="header2__right" item sm={3}>
                    <div className="header2__right--searchbox">
                        <InputBase className="header2__right--input" placeholder="Search..." />
                        <SearchIcon className="header2__right--search" />
                    </div>

                    <div className="header2__right--cart">
                        <p>Cart Items</p>
                        <LocalMallOutlined className="header2__right--bag"/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header2
