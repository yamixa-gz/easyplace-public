import React from 'react'
import s from './LogoutForm.module.css'
import {connect} from 'react-redux'
import {logout} from '../../../redux/auth-reduser'

const LogoutForm = ({ logout, userName }) => {
    const onLogout = () => {
        logout()
    }
    return(
        <div className={s.loginForm}>
            <div className={s.inputs}>
                <div className={s.wrapLabel}>
                    <span>Вы вошли как: </span>
                    <span className={s.wrapUser}>{userName}</span>
                </div>
            </div>
            <div className={s.signOutBtn}>
                <button onClick={onLogout} className={s.exitBtn}>Выход</button>
            </div>
        </div>
    )
}
export default connect(null, {logout})(LogoutForm)