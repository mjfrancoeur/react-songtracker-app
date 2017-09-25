const React = require('react');
const StarRating = require('./StarRating');

class SongInput extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const song = {
      artist: e.target.artist.value,
      title: e.target.title.value,
      rating: e.target.rating.value,
    };

    this.props.onSubmit(song);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type='text'
          name='title'
          placeholder='title'
        />
        <input 
          type='text'
          name='artist'
          placeholder='artist'
        />
        <input
          type='number'
          name='rating'
          min='1'
          max='5'
          placeholder='rating'
        />
        <button>Submit</button>
      </form>
    );
  }
}

module.exports = SongInput;
