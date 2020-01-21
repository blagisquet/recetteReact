import React, { Component } from 'react';
import AjouterRecette from '../AjouterRecette/AjouterRecette';

import firebase from 'firebase/app';
import 'firebase/auth';
import base, {firebaseApp} from '../../base'; 

class Admin extends Component {
  state = {
    uid: null,
    chef: null
  }

  handleAuth = authData => {
    console.log(authData);
  }

  authenticate = () => {
    firebaseApp.auth().signInWithPopup('gmailAuthProvider').then(this.handleAuth)
  }

  render() {
    return (
      <div className="cards">
        <AjouterRecette ajouterRecette={this.props.ajouterRecette} />
      <footer>
        <button onClick={this.props.chargerExample}>Remplir</button>
      </footer>
      </div>
    )
  }
}

export default Admin;
