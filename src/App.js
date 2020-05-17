import React, { Component } from 'react';
import './App.css';
import LoanCalculatorForm from './components/LoanCalculatorForm';
import InterestDisplay from './components/InterestDisplay';

class App extends Component {
  state = {
    interestRate: 0,
    monthlyPayment: 0,
  };
  setInterest = (interestRate, monthlyPayment) => {
    this.setState({ interestRate, monthlyPayment });
  };
  render() {
    return (
      <div className='container'>
        <h1 className='heading'>Loan Calculator</h1>
        <LoanCalculatorForm setInterest={this.setInterest} />
        <InterestDisplay
          interestRate={this.state.interestRate}
          monthlyPayment={this.state.monthlyPayment}
        />
      </div>
    );
  }
}

export default App;
