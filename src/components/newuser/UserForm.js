import React, {useState} from 'react'
import styles from './UserForm.module.css'
import Button from '../ui/Button'

const UserInput = (props) => {
    const [user, setUser] = useState({
        name: '',
        age: ''
    })

    const nameChange = (e) => {
        setUser((prevState) => {return {...prevState, name: e.target.value}})
    }

    const ageChange = (e) => {
        setUser((prevState) => {return {...prevState, age: e.target.value}})
    }

    const formSubmit = (e) => {
        e.preventDefault()

        const userData = ({
            name: user.name.trim(),
            age: +user.age.trim()
        })

        const ifNull = Object.entries(userData).filter(entry => {
            return !entry[1]
        })

        if(ifNull.length > 0) {
            props.onError('Both fields must be filled')
            return;
        }
        
        if(userData.age < 1) {
            props.onError('Age cannot be less than 0')
            return;
        }

        setUser({
            name: '',
            age: ''
        })
        props.onUserAdd(userData)
        // console.log('hii')
    }

    return (
        <form onSubmit={formSubmit}>
            <div className={styles.userform}>
                <div className={styles.formdiv}>
                    <label htmlFor='name'>Name</label>
                    <input id="name" type="text" value={user.name} onChange={nameChange} />
                </div>
                <div className={styles.formdiv}>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id="age" type="number" step="1" value={user.age} onChange={ageChange} />
                </div>
            </div>
            <div className={styles.actiondiv}>
                <Button type='submit'>Add User</Button>
            </div>
        </form>
    )
}

export default UserInput