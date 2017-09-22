const React = require('react');

class ClearStar extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // console.log('inside onclick',props)
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <span
        onClick={this.onClick}
      >
        ☆
      </span>
    );
  }
}

module.exports = ClearStar;
