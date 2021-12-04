import { useContext } from "react"
import { Redirect } from "react-router"
import { AuthContext } from "../../contexts/AuthContext"
import { logout } from "../../services/authService";

export default function Logout() {

    const { onLogout, user } = useContext(AuthContext);

    (async function () {
        let res = await logout(user.accessToken);
        console.log(res);
        onLogout();
    })()

    return (
        <Redirect to="/login"></Redirect>
    )
}
