import React, { Component } from 'react'

//function stateless components

const Comment = (props) => {
    return (
        <div>
            <div className="green lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s1">
                        <img src={ props.comment.user.photo } alt="props.comment.user.name" class="responsive-img" width="60" height="60" />
                    </div>
                    <div className="col s11">
                        <span class="black-text">
                            {props.comment.comment}
                        </span>
                    </div>
                </div>
            </div>            
        </div>    
    )
}

export default Comment