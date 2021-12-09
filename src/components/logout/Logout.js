import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { logout } from "../../services/authService";

export default function Logout(props) {

    const { onLogout, user } = useContext(AuthContext);

    (async function () {
        logout(user.accessToken).then(() => {
            onLogout();
            props.history.push('/login')
        });
    })()

    return (
        null
    )
}
