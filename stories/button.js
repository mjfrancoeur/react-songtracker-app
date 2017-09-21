const React = require('react');

const { storiesOf } = require('@storybook/react');

const { action } = require('@storybook/addon-actions');

//const style = {
//  backgroundColor: ,
//  
//};

require('bootstrap/dist/css/bootstrap.css');

storiesOf('A Button', module)
  .add('with a click', () => {
    return (
      <button onClick={action('handle click!')}>
        Click Me!
      </button>
    );
  })
  .add('with styling', () => {
    return (
      <div className='container'>
        <div className='row'>
            <button className='col-xs-4 col-xs-offset-4 btn btn-primary' onClick={action('handle click!')}>
              Click Me!
            </button>
        </div>
      </div>
    );
  });

