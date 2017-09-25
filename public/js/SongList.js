const React = require('react');

const Song = require('./Song');

const Counter = require('./../../utilities/Counter');

const songCounter = new Counter();

// Component: SongList
// -------------------
// Takes props: songs
class SongList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const songComponents = this.props.songs.map((song) => {
      console.log(song.key);
      return <Song 
        artist={song.artist}
        title={song.title}
        rating={song.rating}
        songKey={song.key}
        key={`song-${songCounter.generateKey()}`}
        deleteComponent={this.props.deleteComponent}
      />;
    });

    return (
    <div className='container'>
      {songComponents}
    </div>
    );
  }

}

module.exports = SongList;
