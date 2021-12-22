import { Alert } from "react-bootstrap"
import {useNotifContext, } from "../../contexts/NotifContext"
import './Notification.css'

export default function Notification (){

    const {notification, hideNotification} = useNotifContext()

    if(!notification.show){
        return null
    }

    return (
        <Alert className="notification" variant={notification.type} onClose={hideNotification} dismissible>
        <Alert.Heading>{notification.type === 'danger'? 'Грешка!' : 'Успех!' }</Alert.Heading>
        <p>
          {notification.message}
        </p>
      </Alert>
    )
}