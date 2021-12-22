import { useEffect, useState } from "react";
import { getLikes } from "../services/likesService";

export default function useLikesCount(id) {
    const [likesCount, setLikesCount] = useState(null);

    useEffect(() => {
        getLikes(id).then(data => {
            setLikesCount(data)
        });
    }, [id])

    if (likesCount === null) {
        return 'Зареждане...';
    }

    return likesCount;
}