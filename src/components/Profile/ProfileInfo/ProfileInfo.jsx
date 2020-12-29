import React, {useRef, useState} from 'react'
import s from './ProfileInfo.module.css'
import avatar from '../../../assets/img/avatar.svg'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from '../ProfileStatusWithHooks'
import ProfileDataForm from '../ProfileDataForm/ProfileDataForm'

const ProfileInfo = ({profile, status, updateStatus, userId, savePhoto,
                      isOwner, editMode, toggleEditMode}) => {
    if (!profile) {
        return <Preloader/>
    }
    const fileInput = useRef(null)
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onMouseEnter = () => {
        isOwner && fileInput.current.classList.remove(s.invisible)
    }

    const onMouseLeave = () => {
        isOwner && fileInput.current.classList.add(s.invisible)
    }
    const changeProfileClick = () => {
        toggleEditMode(true)
    }
    return (
        <>
            <div className={s.profileInfo}>
                {isOwner && <button className={`${s.profileInfoBtn} ${s.changeProfileData}`}
                                    onClick={changeProfileClick}>Изменить профиль
                            </button>}
                {isOwner && <label ref={fileInput} htmlFor='myfile'
                                   className={`${s.profileInfoBtn} ${s.fileInput} ${s.invisible}`}>Сменить аватар
                            </label>}
                    <input onChange={onMainPhotoSelected} type='file'
                           className={s.my} id='myfile' name='myfile' accept={'image/*'}
                    />
                        <div className={s.userAvatar} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <img src={profile.photos.large
                                ? profile.photos.large
                                : avatar} alt='))'
                            />
                            <ProfileStatusWithHooks status={ status }
                                                    updateStatus={ updateStatus }
                                                    userId={ userId }
                            />

                        </div>
                <ProfileData profile={ profile }/>
            </div>
            { editMode && <ProfileDataForm editMode={ editMode }
                                           initialValues={ profile }
                                           profile={ profile }
            /> }
          </>
    )
}

const ProfileData = ({ profile }) => {
    return <div className={s.infoStrings}>
        <div className={s.infoStringsItem}>Имя:{' ' + profile.fullName} </div>
            <div className={s.infoStringsItem}>Ищу работу:
                {profile.lookingForAJob ? ' Да' : ' Нет'} </div>
                {profile.lookingForAJob
                && <div className={s.infoStringsItem}>Хочу работать:{'  ' + profile.lookingForAJobDescription} </div>}
        <div className={s.infoStringsItem}>Обо мне:{' ' + profile.aboutMe} </div>
        <div className={s.contacts}>
            <div className={s.contactsCaption}>Контакты:</div>
                {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key}
                                                                   contactValue={profile.contacts[key]}/>)}
        </div>

    </div>
}
const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.infoStringsItem}>
        <span className={s.contactTitle}> {contactTitle}: </span> <span> {contactValue} </span>
    </div>
}
export default ProfileInfo;