const React = require('react');

const ErrorMsg = React.createClass({
  render: function() {
    return (
      <div style={{color: 'red'}}>
        {this.props.errorMessage}
      </div>
    );
  }
});

// Component: ToDoForm
// -------------------
// Props: save (function), todo ({ value })
const ToDoForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.submit}>
        <div className='formGroup'>
          <ErrorMsg errorMessage={this.props.error} />
          <input
            type='text'
            onChange={this.update}
            placeholder='Save ToDo'
            value={this.props.todo.value}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    );
  },
  update: function(e) {
    this.props.update(this.props.todo, {
      value: e.target.value
    })
  },
  submit: function(e) {
    e.preventDefault();
    this.props.save(this.props.todo);
  }
});

module.exports = ToDoForm;
