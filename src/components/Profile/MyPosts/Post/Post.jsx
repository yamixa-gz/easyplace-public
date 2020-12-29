import React from 'react'
import s from '../../../Dialogs/Message/Message.module.css'
import sp from './Post.module.css'
import Avatar from '../../../Dialogs/Message/Avatar/Avatar'
import like from '../../../../assets/img/like62px.png'

const Post = ({ avatar, likesCount, message }) => {
    return <div className={s.message}>
        <Avatar avatar={avatar}/>
        <div className={s.userMessage}>
            <div className={s.messageHeader}>
                <div className={s.nickAndDate}>
                    <div className={s.messageNick}>nick</div>
                    <div className={s.messageDate}>(20.20.2020)</div>
                </div>
                <div className={s.messageNumber}>
                    {likesCount}
                            <img className={sp.likeImg} src={like} alt='))'/>
                </div>
            </div>
            <div className={s.messageText}>{message}</div>
            {/*<div className={s.messageNavigation}>*/}
            {/*    <NavLink className={s.messageLinkDelete} to={'/dialogs/delete'}>Удалить</NavLink>*/}
            {/*    <NavLink className={s.messageLinkEdit} to={'/dialogs/edit'}>Изменить</NavLink>*/}
            {/*</div>*/}
        </div>
    </div>
}
export default Post