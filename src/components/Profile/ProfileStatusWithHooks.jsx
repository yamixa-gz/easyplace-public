import React, {useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = ({ status: currentStatus, updateStatus }) => {

let [ editMode, setEditMode ] = useState(false)
let [ status, setStatus ] = useState(currentStatus)

    useEffect(() => {
        setStatus(currentStatus)
    },[currentStatus])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
      return  <div className={s.statusBlock}>
          {
          editMode
          ? <div className={s.avatarEditText}>
                      <input onBlur={deactivateEditMode}
                             onChange={onStatusChange}
                             type='text' value={status}
                             autoFocus
                      /></div>

          : <div className={s.avatarSpanText}><span onDoubleClick={activateEditMode}>
                                                 {currentStatus || '-------'}</span></div>
          }
            </div>
}



export default ProfileStatusWithHooks;