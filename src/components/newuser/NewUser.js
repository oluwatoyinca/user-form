import React from 'react'
import './NewUser.module.css'
import UserForm from './UserForm'
import Card from '../ui/Card'

const NewUser = (props) => {
    const addUser = (user) => {
        const newUser = {
            id: Math.random().toString(),
            ...user
        }
        props.onAddNewUser(newUser)
    }

    const errorHandler = (error) => {
        props.onErrorFound(error)
    }

    return (
        <Card>
            <UserForm onUserAdd={addUser} onError={errorHandler} />
        </Card>
    )
}

export default NewUser