const React = require('react');

const { storiesOf } = require('@storybook/react');

const { action } = require('@storybook/addon-actions');

// const ShadedStar = require('./../public/js/ShadedStar');
const StarRating = require('./../public/js/StarRating');

const Song = require('./../public/js/Song');
const SongList = require('./../public/js/SongList');

require('bootstrap/dist/css/bootstrap.css');

const func = function(key) {
  action(`sending back ${key}`);
}

function deleteComponent() {
  action('delete component');
}



const songs = [
  {
    title: 'Dancing in the Moonlight',
    artist: 'King Harvest',
    rating: 3,
    deleteComponent: deleteComponent,
    key: 'star-1',
  },
  {
    title: 'Good morning sun',
    artist: 'Beatles',
    rating: 2,
    deleteComponent: deleteComponent,
    key: 'star-2',
  },

]

storiesOf('SongList', module)
  .add('SongList', () => {
    return (
      <div className='container'>
        <SongList songs={songs}/>
      </div>
    )
  });


