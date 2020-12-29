import {addPostProfile} from '../../../redux/profile-reduser'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addProfilePost: (newMyPostsText) => {
                dispatch(addPostProfile(newMyPostsText))
            }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)