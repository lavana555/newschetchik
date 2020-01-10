import React from 'react';
import InputValue from './InputValue'
import ButtonsBlock from './ButtonsBlock'
import Button from './Button'
import SetValue from './SetValue'

import './App.css';

class App extends React.Component {

  componentDidMount() {
    let returnstate = JSON.parse(localStorage.getItem("state"))
  this.setState((returnstate === "undefind")?returnstate=this.state : returnstate)

  }

  state = {
    counter: 1,
    min: 0,
    max: 5,
  disabled:true
  }
  IncClick = () => {
    let newcounter = this.state.counter + 1
    this.setState({
      counter: newcounter,
      
    })
  }

  ResetClick = () => {
   // let resetcounter = 0;
    this.setState({
      counter: this.state.min
    })
  }

  changeMaxValue = (maxValue) => {
    localStorage.setItem('maxValue', maxValue);
  let disabled= (maxValue<0)||(maxValue===this.state.min)?true:false

    this.setState({
      max: maxValue,
      disabled:disabled
    }, this.setStateValue)
  }

  changeMinValue = (minValue) => {
    localStorage.setItem('minValue', minValue);
    let disabled= (minValue<0)||(minValue===this.state.max)||(minValue > this.state.max)?true:false
    this.setState({ min: minValue,disabled:disabled }, this.setStateValue)
  }

  SetValue = () => {
    let newcounter = this.state.min
    let newmax = this.state.max

    this.setState({
      counter: newcounter,
      max: newmax

    }, () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    })
  }

  setStateValue = () => {
    let newcounter = (this.state.max === this.state.min) ||
      (this.state.max < this.state.min) ||
      (this.state.min < 0) || (this.state.max < 0)
      ? "incorect value" : "press set"
    this.setState({
      counter: newcounter
    }, () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    })
  }

  render = () => {

let changeStatus=(this.state.counter===this.state.max)?true:false


    return (
      // component GETVALUE
      <div className="App">
        <div className="GetValue">
          <InputValue state={this.state}
           checkValue={this.checkValue} />
          <Button buttonname="INC" callback={this.IncClick}
           state={this.state} 
           disabled={(this.state.max === this.state.min) ||
            (this.state.max < this.state.min) ||
            (this.state.min < 0) || (this.state.counter ===this.state.max )|| (this.state.max < 0) || (this.state.counter ==="press set" )?true:false} />



          <Button buttonname="Reset"
           callback={this.ResetClick} 
           state={this.state} 
           disabled={(this.state.max === this.state.min) ||
            (this.state.max < this.state.min) ||
            (this.state.min < 0) || (this.state.max < 0)?true:false}   />
        </div>
        {/* component SET */}
        <div className="SetValue">
          <SetValue changeMaxValue={this.changeMaxValue}
            changeMinValue={this.changeMinValue}
             state={this.state}
          />
          <Button buttonname="Set" 
          callback={this.SetValue} 

           disabled={this.state.disabled}   

          
            />
        </div>
      </div>
    );
  }
}

export default App;
