import React from 'react'
import styles from './ErrorModal.module.css'
import Card from '../ui/Card'
import Button from '../ui/Button'

const ErrorModal = (props) => {
    const closeModal = () => {
        props.onModalClose()
    }

    return (
        <div>
            <div className={styles.backdrop} onClick={closeModal} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>Invalid Input</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.error}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={closeModal}>Close</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal