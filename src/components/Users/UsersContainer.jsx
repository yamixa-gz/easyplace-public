import React from 'react'
import {connect} from 'react-redux'
import {requestUsers, toggleUserFollow,} from '../../redux/users-reducer'
import Users from './Users'
//import withAuthRedirect from '../../HOC/withAuthRedirect'
import {compose} from 'redux'
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPagesCount,
    getPageSize,
    getUsers
} from '../../redux/users-selectors'
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageClick = (p) => {
        this.props.requestUsers(p, this.props.pageSize)
    }
    render() {
        return <Users
                onPageClick={this.onPageClick}
                users={this.props.users}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                isFollowingInProgress={this.props.isFollowingInProgress}
                toggleUserFollow={this.props.toggleUserFollow}
                pagesCount={this.props.pagesCount}
                />
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pagesCount: getPagesCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}
// export default connect(mapStateToProps, { setCurrentPage,
//     toggleUserFollow, getUsers}) (withAuthRedirect(UsersContainer))
export default compose(
    connect(mapStateToProps, { toggleUserFollow, requestUsers }),
    //withAuthRedirect
)(UsersContainer)