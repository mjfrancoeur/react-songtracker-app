const React = require('react');

const storiesOf = require('@storybook/react').storiesOf;

require('bootstrap/dist/css/bootstrap.css');

storiesOf('A Cooler Greeting', module)
  .addDecorator(story => (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-4 col-xs-offset-4'>{story()}</div> 
        </div>
      </div>
  ))
  .add('a hello', () => {
    return (
      <h1>Hello World!!!</h1>
    );
  });

storiesOf('A Cooler Greeting', module) // start stories
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
      <h1>Hello world</h1> 
    )
  });


