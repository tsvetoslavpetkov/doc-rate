import { useContext } from "react"
import { Redirect } from "react-router";
import { AuthContext } from "../../contexts/AuthContext"
import { logout } from "../../services/authService";

export default function Logout() {

    const { onLogout, user } = useContext(AuthContext);

    logout(user.accessToken)
        .then(res => {
            if (res.ok) {
                onLogout()
            }
        })

    return (
        <Redirect to='/login'></Redirect>
    )

}
