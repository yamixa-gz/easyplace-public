import React from 'react'
import s from './FormControls.module.css'

export const Textarea = ({input, meta, className, ...props}) => {
    let isError = meta.touched && meta.error
    return <div className={s.validateWrapper}>
            <textarea {...input} {...props}
                      className={
                          `${className} ${(isError && s.redFrameError)}`
                      }/> <br/>
        <span className={`${s.hiddenRedNotice} ${(isError && s.redNoticeError)}`}>
            {meta.error}
        </span>
    </div>
}

export const Input = ({input, meta, className, ...props}) => {
    const isError = meta.touched && meta.error
// debugger
    return <div className={s.validateWrapper}>
        <input {...input} {...props}
               className={
                   `${className} ${(isError && s.redFrameError)}`
               }/>
        <span className={`${s.hiddenRedNotice} ${(isError && s.redNoticeError)}`}>
            &nbsp;{meta.error}
        </span>
    </div>
}