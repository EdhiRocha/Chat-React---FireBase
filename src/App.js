import React, { Component } from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import NewComent from './Comments/NewComent'
import Comments from './Comments/Comments'

import base from './base'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments:{ }
    }

    this.refsComments = base.syncState('comments', {
      context: this,
      state: 'comments'
    })
  }

  postNewComment(comment){
    const comments =  { ...this.state.comments }
    const timestamp = Date.now()

    comments[`comm-${timestamp}`] = comment

    this.setState({
        comments: comments
    })
  }
  render() {
    return (
      <div className="container">
        <NewComent postNewComment={ this.postNewComment }/>
        <Comments comments={ this.state.comments }/>
      </div>
    );
  }
}

export default App;
