import React from 'react'
import s from './User.module.css'
import {NavLink} from 'react-router-dom'
import Avatar from './Avatar/Avatar'

const User = ({ userId, followed, photo, fullName, country, status, city,
                toggleUserFollow, isFollowingInProgress }) => {
    const toggleFollowOnClick = () => {
        toggleUserFollow( userId, followed )
    }

    return <div className={s.message}>
        <NavLink to={`profile/${userId}`}>
            <Avatar avatar={photo}/>
        </NavLink>

        <button disabled={isFollowingInProgress.some(id => id === userId)} onClick={toggleFollowOnClick}
                className={s.toggleFollow}>{followed ? 'Убрать' : 'Добавить'}</button>
        <div className={s.userMessage}>
            <div className={s.messageHeader}>
                <div className={s.nickAndDate}>
                    <div className={s.messageNick}>{fullName}</div>
                    <div className={s.messageDate}>(20.20.2020)</div>
                </div>
                {/*<div className={s.messageNumber}>#1</div>*/}
                <div className={s.infoText}>
                    <div>{country + ','}</div>
                    <div>{city}</div>
                </div>
            </div>
            <div className={s.messageText}>{status}</div>
            <div className={s.messageNavigation}>
                {/*<NavLink className={s.messageLinkDelete} to={'/dialogs/delete'}>Удалить</NavLink>*/}
                {/*<NavLink className={s.messageLinkEdit} to={'/dialogs/edit'}>Изменить</NavLink>*/}
            </div>
        </div>
    </div>
}

export default User;