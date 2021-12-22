import { useEffect, useState } from "react";
import { getCount } from "../services/commentService";

export default function useCommentsCount(id) {
    const [commentsCount, setcommentsCount] = useState(null);

    useEffect(() => {
        getCount(id).then(data => {
            setcommentsCount(data)
        });
    }, [id])

    if (commentsCount === null) {
        return '...';
    }

    return commentsCount;
}