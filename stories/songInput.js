const React = require('react');

const { storiesOf } = require('@storybook/react');

const { action } = require('@storybook/addon-actions');

const SongInput = require('./../public/js/SongInput');

require('bootstrap/dist/css/bootstrap.css');

function func() {
  action('function!');
}

storiesOf('SongInput', module)
  .add('SongInput', () => {
    return (
      <div>
        <SongInput onSubmit={action('hello')}/>
      </div>
    )
  });


