import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus, match, savePhoto, isOwner, editMode, toggleEditMode}) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         userId={match.params.userId}
                         savePhoto={savePhoto}
                         isOwner={isOwner}
                         editMode={editMode}
                         toggleEditMode={toggleEditMode}
            />
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;