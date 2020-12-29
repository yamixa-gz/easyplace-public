import React from 'react'
import s from './Message.module.css'
import {NavLink} from 'react-router-dom'
import Avatar from './Avatar/Avatar'

const Message = ({ avatar, message }) => {
    return <div className={s.message}>
        <Avatar avatar={avatar}/>
        <div className={s.userMessage}>
            <div className={s.messageHeader}>
                <div className={s.nickAndDate}>
                    <div className={s.messageNick}>nick</div>
                    <div className={s.messageDate}>(20.20.2020)</div>
                </div>
            </div>
            <div className={s.messageText}>{message}</div>
            <div className={s.messageNavigation}>
                <NavLink className={s.messageLinkDelete} to={'/dialogs/delete'}>Удалить</NavLink>
                <NavLink className={s.messageLinkEdit} to={'/dialogs/edit'}>Изменить</NavLink>
            </div>
        </div>
    </div>
}
export default Message