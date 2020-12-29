import React from 'react'
import s from './Header.module.css'
import logo from './img/easyPlace.svg'
import headerFrontArr from './img/headerFrontArr.png'
import LogoutForm from './LogoutForm/LogoutForm'
import LoginForm from './loginForm/LoginForm'
import {Redirect} from 'react-router-dom'

const Header = ({ isAuth, login }) => {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.headerContent}>
                    <div className={s.logo}>
                        <img src={logo} alt='))'/>
                    </div>
                    <div className={s.info}>
                        <div className={s.infoInside}>
                            <img src={headerFrontArr} alt='))'/>
                        </div>
                    </div>
                    {isAuth ? <LogoutForm userName={login} /> : <LoginForm />}
                    {isAuth && <Redirect to={'/profile'}/> }

                </div>
            </div>
        </header>

    )
}
export default Header