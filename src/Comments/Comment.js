import React, { Component } from 'react'

//function stateless components

const Comment = (props) => {
    return (
        <p className="card-panel teal lighten-5">{props.comment.comment}</p>
    )
}

export default Comment