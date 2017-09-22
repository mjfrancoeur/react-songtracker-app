const React = require('react');

class ShadedStar extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  // When star is clicked, send id to parent component function onClick
  onClick(e) {
    let [id] = this.props.className.match(/\d$/);
    id = parseInt(id);
    this.props.onClick(id);
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
