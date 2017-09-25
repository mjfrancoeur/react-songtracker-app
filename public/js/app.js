const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../css/app.css');
const StarRating = require('./StarRating');

const Counter = require('./../../utilities/Counter');
const myCounter = new Counter();

const SongList = require('./SongList');
const SongInput = require('./SongInput');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [],
    }

    this.addSong = this.addSong.bind(this);
    this.deleteComponent = this.deleteComponent.bind(this);
  }

  addSong(song) {
    song.key = myCounter.generateKey();
    this.setState((prevState) => {
      console.dir(song);
      return {
        songs: prevState.songs.concat(song),
      };
    });
  }

  deleteComponent(key) {
    this.setState((prevState) => {
      const remaining = prevState.songs.filter((song) => {
        return song.key !== key;
      });
      console.log(remaining);
      return {
        songs: remaining
      }
    });
  }

  //TODO: write DeleteComponent and AddComponent
  //
  render() {
    return (
      <div>
        <SongInput onSubmit={this.addSong}/>
        <SongList songs={this.state.songs}
          deleteComponent={this.deleteComponent}
        />
      </div>
    );
  }
}

// Wait for the window to load
window.onload = function () {
  const storyApp = document.querySelector('#story-app');

  ReactDOM.render(
    <App/>,
    storyApp
  );
}

module.exports = App;
