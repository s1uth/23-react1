import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name: "이인제",
        comment1: "안녕하세요 소플 입니다.",
    },
    {
        name: "유재석",
        comment1: "리액트 싫어요.",
    },
    {
        name: "강민경",
        comment1: "내마음의 원픽은 아님",
    },
]

function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment1 = {comment.comment1}/>
                )
            })}
        </div>
    )
}

export default CommentList;