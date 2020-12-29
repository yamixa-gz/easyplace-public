import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.caption}>навигация</div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Диалоги</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Пользователи</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Настройки</NavLink>
            </div>
            <div className={s.friends}>
                <span >Друзья:</span>
                <div className={s.friendsItems}>
                </div>
            </div>
        </nav>
    )
}
export default Navbar