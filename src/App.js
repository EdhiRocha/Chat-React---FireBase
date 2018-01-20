import React, { Component } from 'react'
/*import 'materialize-css'*/
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import NewComent from './Comments/NewComent'
import Comments from './Comments/Comments'

import base from './base'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments:{ },
      isLoggedIn: false,
      user:{}
    }

    this.refsComments = base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user)=>{
      
      if(user){
        this.setState({ isLoggedIn: true, user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
  }

  postNewComment(comment){
    comment.user = { 
      uid: this.state.user.uid,
      name: this.state.user.displayName,
      photo: this.state.user.photoURL
    }
    const comments =  { ...this.state.comments }
    const timestamp = Date.now()

    comments[`comm-${timestamp}`] = comment

    this.setState({
        comments: comments
    })
  }
  auth(provider){
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        { 
          this.state.isLoggedIn && 
          <div className="row">
            <div className="col s12"><p className="center-align">{ this.state.user.displayName }</p></div>
          </div>      
        }
        {
          this.state.isLoggedIn &&
          <div className="row">
            <div className="col 2">
              <img src={ this.state.user.photoURL} auth={ this.state.user.displayName }/>
              <br />
              <a href="#" onClick={() => this.props.auth.signOut() }><i class="fa fa-user-circle-o" aria-hidden="true">sair</i></a>
            </div>
            <NewComent postNewComment={ this.postNewComment }/>
          </div>   
        }
        { this.state.isLoggedIn && <Comments comments={ this.state.comments }/> }
        {
          !this.state.isLoggedIn &&  
          <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Chat React</span>
                <p>Para logar no chat entre com uma das alternativas abaixo</p>
              </div>
              <div className="card-action">
                <a href="#" onClick={() => this.auth('facebook')}><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" onClick={() => this.auth('twitter')}><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>       
        }
      </div>
    );
  }
}

export default App;
