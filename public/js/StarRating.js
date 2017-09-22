const React = require('react');

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
      console.log('HEYYYY');
      this.setState({ rating: rating });
    }
  }

  render() {
    let StarsArray = [];
    for (let i = 0; i < this.state.rating; i++) {
      StarsArray.push(<ShadedStar id={i + 1} onClick={this.onClick} />);
    }
    while (StarsArray.length < 5) {
      StarsArray.push(<ClearStar id={StarsArray.length + 1} onClick={this.onClick} />);
    }

    return (
      <div>
        <p>{StarsArray}</p>
      </div>
    );
  }
}

//class ClearStar extends React.Component {
//  constructor(props) {
//    super(props);
//  }
//
//  onClick(e) {
//    this.props.onClick(this.props.id);
//  }
//
//  render() {
//    return (
//      <span
//        onClick={this.onClick}
//      >
//        ☆
//      </span>
//    );
//  }
//}

// class ShadedStar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
// 
//   onClick(e) {
//     this.props.onClick(this.props.id);
//   }
// 
//   render() {
//     return (
//       <span
//         onClick={this.onClick}
//       >
//         ★
//       </span>
//     );
//   }
// }


module.exports = StarRating;
