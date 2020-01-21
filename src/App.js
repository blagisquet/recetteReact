import React, { Component } from 'react';
import Admin from './Components/Admin/Admin';
import Card from './Components/Card/Card';
import recettes from './recettes';
import Header from './Components/Header/Header';
// CSS
import './App.css';

import base from './base';

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this, 
      state: 'recettes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  ajouterRecette = recette => {
    const recettes = {...this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette;
    this.setState({ recettes })
  }

  chargerExample = () => {
    this.setState({recettes})
  }

  render () {
    const cards = Object.keys(this.state.recettes).map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
            {cards}
        </div>
        <Admin 
        ajouterRecette={this.ajouterRecette} 
        chargerExample={this.chargerExample} 
        pseudo={this.state.pseudo}
        >

        </Admin>
      </div>
    )
  }
}

export default App
