const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../css/app.css');
const StarRating = require('./StarRating');

const SongList = require('./SongList');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      songs = [];
    }
  }

  //TODO: write DeleteComponent and AddComponent
  //
  render() {
    return (
      <div>
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
