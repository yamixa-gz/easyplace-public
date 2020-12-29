import React from 'react';
import s from './Avatar.module.css'
import defaultAvatar from '../../../../assets/img/avatar.svg'

const Avatar = ({ avatar }) => {
return    <div className={s.userFrame}>
        <div className={s.userPhoto}>
            <img src={avatar || defaultAvatar} alt='))'/>
        </div>
    </div>
}
export default Avatar