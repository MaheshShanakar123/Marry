import React, { Component, useContext } from 'react'
import NamesContainer from './NamesContainer';
import './cssfiles/Search.css'

export class Search extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    var name = props.names[0];
    console.log(name);
    this.state = {
      names: name,
      //  [
      //     'John', 'Abigail', 'X Æ A-Xii', 'Beyonce', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
      //   ],
      searchTerm: ''
    }
    console.log(this.state.names);
  }
  placedata() {
    return 'Search ' + localStorage.getItem('vendor') + ' Name';
  }
  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )

  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <input type='text' className="searchbox" value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder={this.placedata()} />
        <br></br>
        <NamesContainer names={this.dynamicSearch()} />
      </div>
    )
  }
}

export default Search
