import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


// import GifList from './components/GifList';
// import GifModal from './components/GifModal';
// import SearchBar from './components/SearchBar';
// import request from 'superagent';
// import './styles/app.css'
//
// class App extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       gifs: [],
//       selectedGif: null,
//       modalIsOpen: false
//     }
//   }
//
//   openModal(gif) {
//     this.setState({
//       modalIsOpen: true,
//       selectedGif: gif
//     })
//   }
//
//   closeModal() {
//     this.setState({
//       modalIsOpen: false,
//       selectedGif: null
//     })
//   }
//
//   handleTermChange = (term) => {
//     const url = `https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=meAQD2mqIVAuFFa9DQRzMlMhExBUERPF`;
//
//     request.get(url, (err, res) => {
//       this.setState({ gifs: res.body.data});
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <SearchBar onTermChange={this.handleTermChange} />
//         <GifList  gifs={this.state.gifs}
//                   onGifSelect={selectedGif => this.openModal(selectedGif) } />
//         <GifModal modalIsOpen={this.state.modalIsOpen}
//                   selectedGif={this.state.selectedGif}
//                   onRequestClose={ () => this.closeModal() } />
//     </div>
//     )
//   }
// }
