import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './LoginForm.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../common/FormControls/FormControls'
import {maxLength, required} from '../../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from '../../../redux/auth-reduser'

let maxLength15 = maxLength(15)
let LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={`${s.loginForm} ${( captchaUrl && s.captchaError )}`}>
                <div className={s.inputs + ' ' + ( captchaUrl || (error && s.authError ))}>
                    {!captchaUrl && <div className={( error && s.authErrorMessage )}>{error}
                    </div>}
                    <div className={`${s.wrapLogin} ${s.loginRedNoticeError}`}>
                        <label htmlFor='name'>Логин:</label> <br/>
                        <Field component={Input}
                               className={s.loginInput}
                               validate={[required, maxLength15]}
                               type='text' name='email'/>
                    </div>
                    <div className={`${s.wrapPass} ${s.loginRedNoticeError}`}>
                        <label htmlFor='pass'>Пароль:</label> <br/>
                        <Field component={Input}
                               className={s.loginInput}
                               validate={[required, maxLength15]}
                               type='password' name='password'/>
                    </div>
                </div>
                <div className={s.regAndSignIn}>
                    <button className={s.loginBtn}>Вход</button>
                    <div className={s.regAndPassLinks}>
                        <NavLink className={s.regLink} to='/registration'>Регистрация</NavLink> <br/>
                        <NavLink className={s.fogPassLink} to='/forgottenPass'>Забыли пароль</NavLink>
                    </div>
                </div>
                <div className={s.rememberMe}>
                    <Field component='input' name='rememberMe' type='checkbox'/>
                    <span>Запомнить меня</span>
                </div>
                {captchaUrl && <div className={s.captchaField}>
                    <div className={s.captchaRedFrame}>
                        <div className={s.captchaFieldTitle}>Введите код с картинки:</div>
                        <img src={captchaUrl} alt='))'/>
                        <Field component={Input}
                               className={s.loginInput}
                               validate={[required, maxLength15]}
                               type='text' name='captcha'/>
                    </div>
                </div>}
            </div>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const LoginFormForExport = ({ login, captchaUrl }) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe = false, captcha} = formData
        login(email, password, rememberMe, captcha)

    }
    return <LoginForm
        onSubmit={onSubmit}
        captchaUrl={captchaUrl}
    />
}
const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {login})(LoginFormForExport)