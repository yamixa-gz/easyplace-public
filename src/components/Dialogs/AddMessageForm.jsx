import React from 'react';
import s from './Dialogs.module.css'
import {Field, reduxForm} from 'redux-form'
import addBtnImg from '../../assets/img/addBtnImg.svg'
import {customInput} from '../common/FormControls/FormControls'
import {maxLength, required} from '../../utils/validators/validators'

const maxLength15 = maxLength(15)

let AddMessageForm = ({ handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.textArea}>
            <Field component={customInput}
                   componentType='textarea'
                   validate={[maxLength15, required]}
                   className={s.addPost}
                   name='newPostMessage'
                   placeholder='Post Message'
                   rows='4' cols='53'>
            </Field>
        </div>
        <button className={s.addBtn}>
            Добавить
            <img src={addBtnImg} alt='))'/>
        </button>
    </form>

}
export default reduxForm({
    form: 'AddMessageForm'
})(AddMessageForm)