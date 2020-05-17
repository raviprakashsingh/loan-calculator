import React, { Component } from 'react';

class InterestDisplay extends Component {
  render() {
    return (
      <div>
        <h2>Interest</h2>
        <p>
          <strong>Interest Rate</strong> :{' '}
          <small>{this.props.interestRate}</small>
        </p>
        <p>
          <strong>Monthly Payment</strong> :{' '}
          <small>{this.props.monthlyPayment}</small>
        </p>
      </div>
    );
  }
}

export default InterestDisplay;
