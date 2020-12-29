import React from 'react'
import {connect} from 'react-redux'
import Profile from './Profile'
import {withRouter} from 'react-router-dom'
// import withAuthRedirect from '../../HOC/withAuthRedirect'
import {compose} from 'redux'
import {getProfile, getStatus, updateStatus, savePhoto, toggleEditMode} from '../../redux/profile-reduser'

const setUserById = (props) => {
    let userId = props.match.params.userId  // from withRouter returned object, in params
        || props.authorizedUserId
        || props.history.push('/login')
    if ( userId ) {
        props.getProfile(userId)
        props.getStatus(userId)
    }
}
class ProfileContainer extends React.Component {

    componentDidMount() {
        setUserById( this.props )
    }
    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.match.params.userId !== this.props.match.params.userId) {
            setUserById( this.props )
            console.log(this.props.match);
        }
    }

    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    editMode: state.profilePage.editMode
})
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, toggleEditMode}),
    withRouter
)(ProfileContainer)