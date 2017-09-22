const React = require('react')

const { storiesOf } = require('@storybook/react');

const { action } = require('@storybook/addon-actions');

const ShadedStar = require('./../public/js/ShadedStar');
const StarRating = require('./../public/js/StarRating');

storiesOf('Rating', module)
  .add('with 0 rating', () => {
    return (
      <StarRating rating={0}/>
    );
  })
  .add('with 1 rating', () => {
    return (
      <StarRating rating={1}/>
    )
  });

storiesOf('Shaded Star', module)
  .add('shaded star', () => {
    return (
      <p><ShadedStar id={1} onClick={action('this was clicked')}/></p>
    );
  });
