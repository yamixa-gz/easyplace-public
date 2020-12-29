import React from 'react'
import ReactDom from 'react-dom'
import s from '../ProfileInfo/ProfileInfo.module.css'
import formStyle from './ProfileDataForm.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input, Textarea} from '../../common/FormControls/FormControls'
import {connect} from 'react-redux'
import {saveProfile, toggleEditMode} from '../../../redux/profile-reduser'
import {maxLength, required} from '../../../utils/validators/validators'

const STYLED_BTN = {
    opacity: 1,
    position: 'static',
    ':hover': {
        color: 'rgb(255, 255, 255)',
        background: 'linear-gradient(to top right, #70aac7, ' +
                    '#91d5de 20%, rgba(255, 255, 255, 0) 80%, ' +
                    'rgba(255, 255, 255, 0)) top right/500% 500%'
    }
}
const maxLength30 = maxLength(30)
const maxLength100 = maxLength(100)
let ProfileDataForm = ({profile, children, editMode, toggleEditMode, handleSubmit}) => {
    if (!editMode) return null
    return ReactDom.createPortal(
        <form onSubmit={handleSubmit}>
            {children}
            <div className={formStyle.overlay}/>
            <div className={formStyle.formStyle}>
                <div className={formStyle.insideModalLayer}>
                    <div className={s.infoStrings}>
                        <div className={s.infoStringsItem}>Имя:
                            <Field component={Input}
                                   className={formStyle.profileDataInput}
                                   validate={[required, maxLength30]}
                                   type='text' name='fullName'/>
                        </div>

                        <div className={`${s.infoStringsItem} ${formStyle.checkBoxWrapper}`}>Ищу работу:
                            <Field component={Input}
                                   type='checkbox' name='lookingForAJob'/>
                        </div>
                    </div>

                    <div className={s.infoStringsItem}>Хочу работать:
                        <div className={`${formStyle.textAreaWrapper} ${formStyle.profileDataTextArea}`}>
                            <Field component={Textarea}
                                   validate={[maxLength100, required]}
                                   name='lookingForAJobDescription'
                                   rows='2' cols='50'/>
                        </div>
                    </div>
                    <div className={s.infoStringsItem}>Обо мне:
                        <div className={`${formStyle.textAreaWrapper} ${formStyle.profileDataTextArea}`}>
                            <Field component={Textarea}
                                   validate={[maxLength100, required]}
                                   name='aboutMe'
                                   rows='2' cols='50'/>
                        </div>
                    </div>
                    <div className={s.contacts}>
                        <div className={s.contactsCaption}>Контакты:</div>
                        {Object.keys(profile.contacts).map(key => {
                            return <div key={key} className={s.infoStringsItem}> {key}
                                <Field component={Input}
                                       className={formStyle.profileDataInput}
                                       validate={[maxLength30]}
                                       type='text' name={`contacts.${key}`}/>
                            </div>

                        }
                        )}
                    </div>
                    <div className={formStyle.btnWrapper}>
                        <button style={STYLED_BTN} className={s.profileInfoBtn}>Submit</button>
                        <button style={STYLED_BTN} className={s.profileInfoBtn} onClick={(e) => {
                            e.preventDefault()
                            toggleEditMode(false)
                        }
                        }>Close
                        </button>
                    </div>
                </div>
            </div>
        </form>,
        document.getElementById('portal')
    )
}
const ProfileDataFormWithReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

ProfileDataForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.saveProfile(formData)
    }
    return <ProfileDataFormWithReduxForm {...props} onSubmit={onSubmit}/>
}
export default connect(null, {saveProfile, toggleEditMode})(ProfileDataForm)

