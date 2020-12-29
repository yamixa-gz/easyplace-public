import {connect} from 'react-redux'
import Dialogs from './Dialogs'
import {addPostDialogsActionCreator} from '../../redux/dialogs-reduser'
import withAuthRedirect from '../../HOC/withAuthRedirect'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addDialogsPost: (newPostMessage) => {
            dispatch(addPostDialogsActionCreator(newPostMessage))
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)