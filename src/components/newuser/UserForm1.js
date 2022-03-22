import React, {useState, useRef} from 'react'
import styles from './UserForm.module.css'
import Button from '../ui/Button'

const UserInput = (props) => {
    const nameInput = useRef()
    const ageInput = useRef()

    const formSubmit = (e) => {
        e.preventDefault()

        const enteredName = nameInput.current.value
        const enteredAge = ageInput.current.value

        const userData = ({
            name: enteredName.trim(),
            age: enteredAge.trim()
        })

        const ifNull = Object.entries(userData).filter(entry => {
            return entry[1].length < 1
        })

        if(ifNull.length > 0) {
            props.onError('Please make sure to enter both your name and age.')
            return;
        }
        
        if(+userData.age < 1) {
            props.onError('Please enter an age greater than 0.')
            return;
        }

        nameInput.current.value = ''
        ageInput.current.value = ''
        
        props.onUserAdd(userData)
    }

    return (
        <form onSubmit={formSubmit}>
            <div className={styles.userform}>
                <div className={styles.formdiv}>
                    <label htmlFor='name'>Name *</label>
                    <input id="name" type="text" ref={nameInput} />
                </div>
                <div className={styles.formdiv}>
                    <label htmlFor='age'>Age (Years) *</label>
                    <input id="age" type="number" step="1" ref={ageInput} />
                </div>
            </div>
            <div className={styles.actiondiv}>
                <Button type='submit'>Add User</Button>
            </div>
        </form>
    )
}

export default UserInput