import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
      <h1> Count: {this.state.count}</h1>
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: +1
      </button>

      <button
        onClick={() => {
          this.setState({ count: this.state.count - 1 });
        }}
      >
        Count: -1
      </button>
      </div>
    );
  }
}
export default Counter;
