const React = require('react');

const Counter = require('../../utilities/Counter')

const myCounter = new Counter();

const generateKey = myCounter.generateKey.bind(myCounter);

const ShadedStar = require('./ShadedStar');

const ClearStar = require('./ClearStar');

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

  pushStarComponent(componentArray, StarComponent) {
    generateKey().then((key) => {
      keyPlus = `star-${key}`;
      componentArray.push(<StarComponent className={`star-${componentArray.length + 1}`} onClick={this.onClick} key={key} />);
      return componentArray;
    });
  }

  render() {

    let starsArray = [];
    // Add shaded stars correlated to rating
    for (let i = 0; i < this.state.rating; i++) {
      // this.pushStarComponent(starsArray, ShadedStar);
      // Generate a random key
      generateKey()
        .then((keyString) => {
          const key = `star-${keyString}`;
          StarsArray.push(<ShadedStar className={`star-${i + 1}`} onClick={this.onClick} key={key} />);
        })
        .catch((err) => {
          throw new Error('Problem with key-generator');
        });
      // Add new star component to the array
    }
    // If rating < 5, fill with unshaded stars
    while (starsArray.length < 5) {
      // this.pushStarComponent(starsArray, ClearStar);
      const key = generateKey()
        .then((keyString) => {
          const key = `star-${keyString}`;
          StarsArray.push(<ClearStar className={`star-${StarsArray.length + 1}`} onClick={this.onClick} key={key} />);
        })
        .catch((err) => {
          throw new Error('Problem with key-generator');
        });

    }

    return (
      <div>
        <p>{starsArray}</p>
      </div>
    );
  }
}

module.exports = StarRating;
