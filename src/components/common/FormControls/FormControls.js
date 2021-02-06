import React from 'react'
import s from './FormControls.module.css'
import cn from 'classnames'

const setErrorFrame = (isError, className = '') => {
  return cn(className, {
    [s.redFrameError]: isError
  })
}
const setErrorNotice = (isError) => {
  return cn(s.hiddenRedNotice, {
    [s.redNoticeError]: isError
  })
}

export const customInput = ({input, meta, className, componentType, ...props}) => {
  const isError = meta.touched && meta.error
  return <div className={s.validateWrapper}>
    {componentType === 'textarea'
        ?
        <><textarea {...input} {...props} className={setErrorFrame(isError, className)}/> <br/></>
        : componentType === 'input'
            ? <input {...input} {...props} className={setErrorFrame(isError, className)}/>
            : ''}
    <span className={setErrorNotice(isError)}>&nbsp;{meta.error} </span>
  </div>
}