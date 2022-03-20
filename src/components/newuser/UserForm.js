import React, {useState} from 'react'
import styles from './UserForm.module.css'

const UserInput = (props) => {
    const [user, setUser] = useState({
        name: '',
        age: ''
    })
    const [isValid, setIsValid] = useState({
        name: true,
        age: true
    })

    const nameChange = (e) => {
        setUser((prevState) => {return {...prevState, name: e.target.value}})
        setIsValid((prevState) => {return {...prevState, name: true}})
    }

    const ageChange = (e) => {
        setUser((prevState) => {return {...prevState, age: e.target.value}})
        setIsValid((prevState) => {return {...prevState, age: true}})
    }

    const formSubmit = (e) => {
        e.preventDefault()

        const userData = ({
            name: user.name.trim(),
            age: user.age.trim()
        })

        const ifNull = Object.entries(userData).filter(entry => {
            return !entry[1]
        })

        if(ifNull.length === 0) {
            setUser({
                name: '',
                age: ''
            })
            props.onUserAdd(userData)
        }
        else {
            ifNull.map(data => {
                return setIsValid((prevState) => {return {...prevState, [data[0]]: false}})
            })
        }
    }

    return (
        <form onSubmit={formSubmit}>
            <div className={styles.userform}>
                <div className={styles.formdiv}>
                    <label>Title</label>
                    <input id="me" type="text" value={user.name} onChange={nameChange} required/>
                </div>
                <div className={styles.formdiv}>
                    <label>Amount</label>
                    <input type="number" min="18" step="1" value={user.age} onChange={ageChange} required/>
                </div>
            </div>
            <div className={styles.actiondiv}>
                <button type='submit' className={styles.button}>Add User</button>
            </div>
        </form>
    )
}

export default UserInput