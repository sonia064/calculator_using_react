import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component 
{
  constructor() 
  {
    super();
    this.state = 
    {
      input: '',
      result: '',
    };
  }

  handleInput = (event) => 
  {
    this.setState({ input: event.target.value });
  };

  calculate = () => 
  {
    try 
    {
      let input = this.state.input;
      input = input.replace('^2', '**2');
      input = input.replace('%', '/100*');

      input = input.replace(/√\(([^)]+)\)/g, (_, number) => 
      {
        return Math.sqrt(eval(number));
      });
  
      const result = eval(input);
      this.setState({ result });
    } 
    catch (error) 
    {
      this.setState({ result: 'Error' });
    }
  };
  

  addToInput = (value) => 
  {
    if (value === '=') 
    {
      this.calculate();
    } 
    else if (value === 'C') 
    {
      this.clearInput();
    } 
    else 
    {
      this.setState({ input: this.state.input + value });
    }
  };

  clearInput = () => 
  {
    this.setState({ input: '', result: '' });
  };

  handleOpenParentheses = () => 
  {
    this.setState({ input: this.state.input + '(' });
  };

  handleCloseParentheses = () => 
  {
    this.setState({ input: this.state.input + ')' });
  };

  render() 
  {
    return (
      
      <div className="calculator">
        <div className="display">
          <input
            type="text"
            placeholder="0"
            value={this.state.input}
            onChange={this.handleInput}
          />
          <div className="result">{this.state.result}</div>
        </div>
        <div className="buttons">
          <button onClick={this.calculate}>=</button>
          <button onClick={this.clearInput}>C</button>
          <button onClick={() => this.addToInput('1')}>1</button>
          <button onClick={() => this.addToInput('2')}>2</button>
          <button onClick={() => this.addToInput('3')}>3</button>
          <button onClick={() => this.addToInput('4')}>4</button>
          <button onClick={() => this.addToInput('5')}>5</button>
          <button onClick={() => this.addToInput('6')}>6</button>
          <button onClick={() => this.addToInput('7')}>7</button>
          <button onClick={() => this.addToInput('8')}>8</button>
          <button onClick={() => this.addToInput('9')}>9</button>
          <button onClick={() => this.addToInput('+')}>+</button>
          <button onClick={() => this.addToInput('-')}>-</button>
          <button onClick={() => this.addToInput('*')}>*</button>
          <button onClick={() => this.addToInput('0')}>0</button>
          <button onClick={() => this.addToInput('.')}>.</button>
          <button onClick={() => this.addToInput('/')}>/</button>
          <button onClick={() => this.addToInput('√')}>√</button>
          <button onClick={() => this.addToInput('^2')}>^2</button>
          <button onClick={() => this.addToInput('%')}>%</button>
          <button onClick={this.handleOpenParentheses}>(</button>
          <button onClick={this.handleCloseParentheses}>)</button>
          <button onClick={() => this.addToInput('.')}>.</button>
          <button onClick={() => this.addToInput('log(10, )')}>log(10) </button>

        </div>
      </div>
    );
  }
}

export default App;
