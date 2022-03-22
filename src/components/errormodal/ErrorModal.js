import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import styles from './ErrorModal.module.css'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.onClick} />)
}

const ErrModal = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>Invalid Input</h2>
            </header>
            <div className={styles.content}>
                <p>{props.error}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClick}>Close</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    const closeModal = () => {
        props.onModalClose()
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={closeModal} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ErrModal error={props.error} onClick={closeModal} />, document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErrorModal