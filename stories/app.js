const React = require('react');

const { storiesOf } = require('@storybook/react');

const { action } = require('@storybook/addon-actions');

const SongInput = require('./../public/js/SongInput');

const App = require('./../public/js/app');

require('bootstrap/dist/css/bootstrap.css');

function func() {
  action('function!');
}

storiesOf('App', module)
  .add('app', () => {
    return (
      <div>
        <App />
      </div>
    )
  });


