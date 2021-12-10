
export default function CommentsSection(props) {
    return (<div>
        {
            props.comments.map((comment) => {
                return <div key={comment._id} class="alert alert-secondary" role="alert">
                    {'@' + comment.user} - {comment.comment}
                </div>
            })
        }
    </div>
    )
}