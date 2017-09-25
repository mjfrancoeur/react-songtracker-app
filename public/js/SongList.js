const React = require('react');

const Song = require('./Song');

// Component: SongList
// -------------------
// Takes props: songs
class SongList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const songComponents = this.state.songs.map((song) => {
      return <Song 
        artist={song.artist}
        title={song.title}
        rating={song.rating}
        key={song.key}
        deleteComponent={this.props.deleteComponent}
      />;
    });
    <div className='container'>
      {songComponents}
    </div>
  }

}

module.exports = SongList;
