import React, { Component } from 'react'

class NewComent extends Component {
    constructor(props){
        super(props)

        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event){
        if(event.keyCode === 13){
            this.props.postNewComment({
                comment: this.refs.comment.value
            })
            event.preventDefault()

            this.refs.comment.value = ''
        }
    }
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix"></i>
                            <textarea id="icon_prefix2" className="materialize-textarea" onKeyDown={ this.handleEnter } ref="comment"></textarea>
                            <label htmlFor="icon_prefix2">Message</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewComent
