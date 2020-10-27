import React, {FC} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Pagination } from '../Paginator/paginator';
import { UsersType } from '../../types/types';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const UserCard = styled.div`
        width: 100px;
        margin: 10px;
        border: solid 2px;
        border-color: #C9F4F1;
        border-radius: 5px;
`
let Avatar = styled.img`
    height: 100px;
`

type PropsType = {
    totalUsersCount: number
    pageSize: number
    followingInProgress: Array<number>
    onPageChanged: (p: number) => void
    users: Array<UsersType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFetching: boolean
}

export let Users: FC<PropsType> = ({totalUsersCount, pageSize, followingInProgress, onPageChanged, users, follow, unfollow}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <Wrapper>
        <Pagination totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}/>
        {users.map(el => <UserCard key={el.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + el.id}>
                        <Avatar src={el.photos.small ? el.photos.small : 'https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/07/get-ad-users-from-text-file---user-2517433_960_720.png'} />
                    </NavLink>
                </div>
                <div>
                    {el.followed
                        ? <button 
                        disabled={followingInProgress.some(id => id === el.id)} 
                        onClick={() => unfollow(el.id)    
                        } >UNFOLLOW</button>
                        : <button 
                        disabled={followingInProgress.some(id => id === el.id)} 
                        onClick={() => follow(el.id)
                        } >FOLLOW</button>}
                </div>
            </div>
            <div>
                <span>
                    <div>
                        {el.name}
                    </div>
                    <div>
                        {el.name}
                    </div>
                </span>
                <span>
                    {/* <div>{el.location.city}</div>
        <div>{el.location.country}</div> */}
                </span>
            </div>


        </UserCard>)}
    </Wrapper>
}
