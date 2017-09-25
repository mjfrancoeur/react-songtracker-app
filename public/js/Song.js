const React = require('react');
const StarRating = require('./StarRating');

// Component: Song
// ---------------
// Takes props: title, artist, rating, key, deleteComponent
class Song extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteComponent(this.props.key);
  }

  render() {
    return (
      <div class='song-row row'>
        <span className='col-xs-3'>{this.props.title}</span>
        <span className='col-xs-3'>{this.props.artist}</span>
        <span className='col-xs-3'><StarRating rating={this.props.rating}/></span>
        <span className='col-xs-3'><button onClick={this.onClick}>Delete</button></span>
      </div>
    );
  }
}

module.exports = Song;
