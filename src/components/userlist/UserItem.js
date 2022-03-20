import React, {useState} from 'react'
import styles from './UserItem.module.css'

const UserItem = (props) => {
    return (
        <div className={styles.userItem}>
            {`${props.user.name} (${props.user.age} years old)`}
        </div>
    )
}

export default UserItem