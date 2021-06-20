import React from 'react'
import s from './Header.module.css'
import { useSelector, useDispatch  } from 'react-redux'
import { changePath } from '../../redux/homeReducer'
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const pathname = useSelector(state => state.homeReducer.pathName);
    const handleBackClick = (path) => {
            dispatch(changePath(path));
            history.push({pathname:path})
    }

    return(
        <header className = {s.header}>
            <div onClick={() => handleBackClick('/Ralabs-test-task/')} className={s.arrow} style={{marginRight:"auto", display: pathname !== "/Ralabs-test-task/" ? 'block' : 'none' }}>
                <img src="./img/icons/arrow.svg" alt="arrow" />
            </div>
            <div className = {s.header_logo}>
               <img src="./img/icons/logoPocemon.svg" alt="Pocemon Logo" /> 
            </div>
            <div onClick={() => handleBackClick('/Ralabs-test-task/favorites')} style={{display: pathname === "/Ralabs-test-task/" ? 'block' : 'none'}}  className={s.like}> 
                <img src="./img/icons/like.svg" alt="like" />
            </div>
        </header>
    )
}

export default Header;