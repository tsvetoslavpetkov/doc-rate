import { useAuth } from "../../contexts/AuthContext";
import './Avatar.css'

export function Avatar({ size }) {
    const { user } = useAuth();
    let url = user.avatarUrl ? user.avatarUrl : '/user.png';

    console.log(url);

    return (
        <div className="user-avatar align-middle d-inline-block" style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundImage: `url(${url})`,
        }}>

        </div>
    )
}