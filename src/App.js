import React, { Component } from 'react';
import './App.css';
import CardCountry from './components/CardCountry';
import Header from './components/Header';
import Search from './components/Search';
import Country from "./CountryDb";

class App extends Component {
  constructor() {
    super()
    this.state = {
      paises: undefined,
      pais: '',
      local: '',
      meta: '',
      cards: [
        { name: 'Brasil', flag: 'https://restcountries.eu/data/bra.svg' , local: 'João Pessoa' , meta: '2021-07-04' },
        { name: 'Chile', flag: 'https://restcountries.eu/data/afg.svg' , local: 'Bariloche' , meta: '2021-12-20' }
      ],
      edit: 0,
      indiceEdit: 0,
    }
  }
  
  async componentDidMount() {
    const paises = await Country();
    this.setState({ paises: paises })
  }

  dateToEN(date) {	
    return date.split('/').reverse().join('-');
  }

  handleInput(e) {
    const value = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: value })
  }

  handleAdd() {
    const { paises, pais, local, meta, cards } = this.state;
    const umPais = paises.filter(item => item.translations.pt === pais);
    const newName = umPais[0]
    this.setState({
      cards: [...cards, { name: newName.translations.pt, flag: newName.flag , local: local , meta: meta } ],
      edit: 0,
      pais: '',
      local: '',
      meta: '',
    })
  }

  handleEdit(e) {
    const card = this.state.cards[e.target.name]
    console.log(card);
    this.setState({
      edit: 1,
      indiceEdit: e.target.name,
      pais: card.name,
      local: card.local,
      meta: this.dateToEN(card.meta)
     })

  }

  handleDel(e) {
    let arrayCards = this.state.cards;
    arrayCards.splice(e.target.name,1);
    this.setState({ 
      cards: arrayCards,
      edit: 0,
      pais: '',
      local: '',
      meta: '',
    })
  }

  handleChange() {
    const { paises, pais, local, meta, cards } = this.state;
    const umPais = paises.filter(item => item.translations.pt === pais);
    const newName = umPais[0]
    const indiceEdit = this.state.indiceEdit; 
    cards[indiceEdit] = { name: pais, flag: newName.flag , local: local , meta: meta }
    console.log(cards);
    this.setState({
      cards: [...cards ],
      edit: 0,
      pais: '',
      local: '',
      meta: '',
    })
}

  render() { 
    console.log('Render');
    const { paises, pais, local, meta, cards, edit } = this.state
    return ( 
      <div className="App">
        <Header />
        {paises &&
          <Search 
            paises={ paises } 
            pais={ pais } 
            local={ local } 
            meta={ meta } 
            handleInput={ this.handleInput.bind(this) } 
            handleAdd={ this.handleAdd.bind(this) } 
            handleChange={ this.handleChange.bind(this) } 
            edit={ edit } 
           />
         }
        <CardCountry
          cards={ cards }
          handleEdit={ this.handleEdit.bind(this) }
          handleDel={ this.handleDel.bind(this)}  
        />
      </div>
     );
  }
}
 
export default App;




