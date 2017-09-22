const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../css/app.css');
const StarRating = require('./StarRating');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello world</h1>
        <StarRating />
      </div>
    );
  }
})

// Wait for the window to load
window.onload = function () {
  const storyApp = document.querySelector('#story-app');

  ReactDOM.render(
    <App/>,
    storyApp
  );
}
