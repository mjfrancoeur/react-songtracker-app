const React = require('react');

const storiesOf = require('@storybook/react').storiesOf;

require('bootstrap/dist/css/bootstrap.css');

storiesOf('A Greeting', module) // start stories
  .add('with Hello', () => (
    <h1>
      Hellos...
    </h1>
  ))
  .add('with Goodbye', () => {
    return (
      <h1>Goodbye!</h1>
    )
  })
  .add('with Styling', () => {
    return (
      <h1 style={{color: 'blue'}}>Hellos...</h1>
    );
  })
  .add('with Bootstrap', () => {
    return (
      <div className='container'>
        <div className='row'>
          <h1 className='col-xs-4 col-xs-offset-4'>Hello world</h1> 
        </div>
      </div>
    )
  });


