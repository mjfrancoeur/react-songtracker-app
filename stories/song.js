const React = require('react');

const { storiesOf } = require('@storybook/react');

const { action } = require('@storybook/addon-actions');

// const ShadedStar = require('./../public/js/ShadedStar');
const StarRating = require('./../public/js/StarRating');

const Song = require('./../public/js/Song');

require('bootstrap/dist/css/bootstrap.css');

const func = function(key) {
  action(`sending back ${key}`);
}

storiesOf('Song', module)
  .add('just a single song', () => {
    return (
      <div className='container'>
      <Song 
        title={'Dancing in the Moonlight'}
        artist={'King Harvest'}
        rating={4}
        deleteComponent={func}
        key={'song-1'}
      />
    </div>
    )
  });


