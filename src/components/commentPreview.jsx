import { Card, CardContent, Typography } from '@material-ui/core'

const CommentPreview = () => {
    const comments = [
        {
            poster: 'poster1',
            comment: 'comment1'
        },
        {
            poster: 'poster2',
            comment: 'comment2'
        },
        {
            poster: 'poster3',
            comment: 'comment3'
        }
    ]
    return <>
        {comments.map(cmt => (
            <Card>
                <CardContent>
                    <Typography>
                        {cmt.poster}
                    </Typography>
                    <Typography>
                        {cmt.comment}
                    </Typography>
                </CardContent>
            </Card>
        ))}
    </>
}

export default CommentPreview
