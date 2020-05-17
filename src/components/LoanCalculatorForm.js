import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import axios from 'axios';

class LoanCalculatorForm extends Component {
  state = {
    loanAmount: 500,
    duration: 6,
  };

  getInterest = async () => {
    const res = await axios(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.loanAmount}&numMonths=${this.state.duration}`
    );
    this.props.setInterest(res.data.interestRate, res.data.numPayments);
  };

  render() {
    return (
      <div class='loan-calculator-form'>
        <label>Loan Amount</label>
        <div className='input-range'>
          <InputRange
            maxValue={5000}
            minValue={500}
            value={this.state.loanAmount}
            onChange={(loanAmount) => this.setState({ loanAmount })}
            onChangeComplete={this.getInterest}
          />
        </div>
        <label>Loan Duration</label>

        <div className='input-range'>
          <InputRange
            maxValue={24}
            minValue={6}
            value={this.state.duration}
            onChange={(duration) => this.setState({ duration })}
            onChangeComplete={this.getInterest}
          />
        </div>
      </div>
    );
  }
}

export default LoanCalculatorForm;
