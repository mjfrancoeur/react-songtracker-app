const React = require('react');

// Require React Components
const ShadedStar = require('./ShadedStar');

const ClearStar = require('./ClearStar');

// Counter class
const Counter = require('../../utilities/Counter')

// Instance of Counter class
const myCounter = new Counter();

// Bind the generateKey function
const generateKey = myCounter.generateKey.bind(myCounter);


// Component: StarRating
// ---------------------
// TODO: comments
class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    }

    // Bind context of class methods
    this.onClick = this.onClick.bind(this);
  }

  onClick(rating) {
    if (rating !== this.state.rating) {
      this.setState({ rating: rating });
    }
  }

  // Function: Push Star Component
  // -----------------------------
  // Takes an array and a react component as parameters
  // Returns the same array after pushing the componenet w/ props
  pushStarComponent(componentArray, StarComponent) {
    const keyPlus = `star-${generateKey()}`;
    componentArray.push(<StarComponent className={`star-${componentArray.length + 1}`} onClick={this.onClick} key={keyPlus} />);
    return componentArray;
  }

  render() {

    let starsArray = [];
    // Add shaded stars correlated to rating
    for (let i = 0; i < this.state.rating; i++) {
      this.pushStarComponent(starsArray, ShadedStar);
    }
    // If rating < 5, fill with unshaded stars
    while (starsArray.length < 5) {
      this.pushStarComponent(starsArray, ClearStar);
    }

    return (
      <span>{starsArray}</span>
    );
  }
}

module.exports = StarRating;
