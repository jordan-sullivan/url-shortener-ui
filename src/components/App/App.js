import React, { Component } from 'react';
import './App.css';
import { getUrls, postURL } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }
  componentDidMount() {
    getUrls()
    .then(urlData => {
      this.setState({urls: urlData.urls})
    }
  )}

  submitURL = (urlData) => {
    postURL(urlData)
    .then(getUrls()
    .then(updatedURLs => this.setState({urls: updatedURLs.urls}) )
    .catch(error => console.error("Something went wrong posting", error)))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
