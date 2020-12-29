import React from 'react'
import s from './Users.module.css'
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "./Paginator/Paginator";

const Users = (props) => {

    let pages = []
        for(let i=1; i <= 20 ;i++) {
            pages.push(i)
        }
    return (
        <div className={s.usersWrapper}>
            <div className={s.messagesWrapper}>
                <Paginator
                    onPageClick={props.onPageClick}
                    currentPage={props.currentPage}
                    pagesCount={props.pagesCount}
                />
                { props.isFetching && <Preloader/>}

                {props.users.map((u) =>
                    <User key={ u.id }
                          userId={u.id}
                          followed={u.followed}
                          fullName={u.name}
                          photo={u.photos.small}
                          status={u.status}
                          city={"u.location.city"}
                          country={"u.location.country"}
                          isFollowingInProgress={props.isFollowingInProgress}
                          toggleUserFollow={props.toggleUserFollow}
                    />
                )}
            </div>
        </div>
    )
}

export default Users