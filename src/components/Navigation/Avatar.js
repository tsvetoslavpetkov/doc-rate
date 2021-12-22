import { useAuth } from "../../contexts/AuthContext";
import './Avatar.css'

export function Avatar({ size }) {
    const { userImage } = useAuth();
    let url = userImage ? userImage : '/user.png';

    return (
        <div className="user-avatar align-middle d-inline-block" style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundImage: `url(${url})`,
        }}>

        </div>
    )
}