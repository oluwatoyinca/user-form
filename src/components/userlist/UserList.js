import React, {useState} from 'react'
import styles from './UserList.module.css'
import UserItem from './UserItem'
import Card from '../ui/Card'

const UserList = (props) => {
    if (props.users.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No User Yet</h2>
        )
    }

    return (
        <Card>
            {props.users.map(user => {
                return <UserItem key={user.id} user={user} />
            })}
        </Card>
    )
}

export default UserList