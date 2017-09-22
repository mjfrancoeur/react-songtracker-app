const React = require('react');

class ShadedStar extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <span
        onClick={this.onClick}
      >
        ★
      </span>
    );
  }
}

module.exports = ShadedStar;
