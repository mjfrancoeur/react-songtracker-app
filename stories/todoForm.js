const React = require('react')

const { storiesOf } = require('@storybook/react')

const ToDoForm = require('./../public/js/todoForm');

const {action} = require('@storybook/addon-actions');

const FAKE_TODO = { value: 'FAUX' };
const ERROR = 'Incomplete'

storiesOf('Todo Form', module)
  .add('a todo form', () => {
    return (
      <ToDoForm todo={FAKE_TODO} save={action('Save the todo!')} update={action('This is where we would update!')} />
    );
  });
