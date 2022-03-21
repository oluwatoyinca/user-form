import React from 'react'
import styles from './ErrorModal.module.css'
import Card from '../ui/Card'
import Button from '../ui/Button'

const ErrorModal = (props) => {
    const closeModal = () => {
        props.onModalClose()
    }

    return (
        <div className={styles.backdrop} onClick={closeModal}>
            <Card className={styles.modal}>
                <div className={styles.header}>
                    Invalid Input
                </div>
                <div className={styles.content}>
                    {props.error}
                </div>
                <div className={styles.actions}>
                    <Button onClick={closeModal}>Close</Button>
                </div>
            </Card>
        </div>
    )
}

export default ErrorModal