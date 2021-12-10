import { Alert } from "react-bootstrap"

export default function ErrorNotification(props) {
    return (
        <Alert variant='danger'>
            {props.message}
        </Alert>
    )
}