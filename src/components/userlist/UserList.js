import React, {useState} from 'react'
import UserItem from './UserItem'
import Card from '../ui/Card'

const UserList = (props) => {
    let content = <h4 className='expenses-list__fallback'>No User Yet</h4>

    if (props.users.length > 0) {
        content = props.users.map(user => {
            return <UserItem key={user.id} user={user} />
        })
    }

    return (
        <Card>
            <ul>
                {content}
            </ul>
        </Card>
    )
}

export default UserList