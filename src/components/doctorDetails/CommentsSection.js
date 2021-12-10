import { Alert } from "react-bootstrap"

export default function CommentsSection(props) {
    return (<div>
        {
            props.comments.map((comment) => {
                return <Alert key={comment._id} variant="secondary" className="p-2 pb-0 mb-2" style={{textAlign: "left"}} role="alert">
                    <Alert.Heading className="px-2" style={{fontSize: '16px'}}>{'@' + comment.user.split('@')[0]}</Alert.Heading>
                    <p className="px-2 py-0 mb-1">{comment.comment}</p>
                </Alert>
            })
        }
    </div>
    )
}