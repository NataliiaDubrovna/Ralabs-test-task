import React from 'react'
import s from './Header.module.css'


const Header = () => {
    return(
        <header className = {s.header}>
            <div className = {s.header_logo}>
               <img src="/img/icons/logoPocemon.svg" alt="Pocemon Logo" /> 
            </div>
            <div className = {s.like}> {/* navigations to like list */}
                <img src="/img/icons/like.svg" alt="like" />
            </div>
        </header>
    )
}

export default Header;