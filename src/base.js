import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCg076g39l1zfiI0YWILX5nn34fdUN1iEg",
    authDomain: "chat-5e20a.firebaseapp.com",
    databaseURL: "https://chat-5e20a.firebaseio.com",
    projectId: "chat-5e20a",
    storageBucket: "chat-5e20a.appspot.com",
    messagingSenderId: "1032590200355"
}
)
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base