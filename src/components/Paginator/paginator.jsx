import React from 'react'

export let Pagination = ({totalUsersCount, pageSize, onPageChanged}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => <button onClick={() => { onPageChanged(p) }}>{p}</button>)}
        </div>
    )
}
