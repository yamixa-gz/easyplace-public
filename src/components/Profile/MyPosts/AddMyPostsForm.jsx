import React from 'react'
import s from './MyPosts.module.css'
import {Field, reduxForm} from 'redux-form'
import addBtnImg from '../../../assets/img/addBtnImg.svg'
import {Textarea} from '../../common/FormControls/FormControls'
import {maxLength, required} from '../../../utils/validators/validators'

const maxLength15 = maxLength(15)
let AddMyPostsForm = ({ handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.textArea}>
            <Field component={Textarea}
                   validate={[maxLength15, required]}
                   className={s.addPost}
                   name='newMyPostsText'
                   rows='4' cols='60'  />
        </div>
        <button className={s.addBtn}>
            Добавить
            <img src={addBtnImg} alt='))'/>
        </button>
    </form>
}
export default reduxForm({
    form: 'AddMyPostsForm'
})(AddMyPostsForm)