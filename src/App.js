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
//this.setState({state:returnstate})
  }

  state = {
    counter: 1,
    min: 0,
    max: 5,
    isHidden:true
  // disabled:true
  }
  IncClick = () => {
    let newcounter = this.state.counter + 1
    this.setState({
      counter: newcounter,
      
    })
  }

  ResetClick = () => {
    let resetcounter = 0;
    this.setState({
      counter: resetcounter
    })
  }

  changeMaxValue = (maxValue) => {
    localStorage.setItem('maxValue', maxValue);
    this.setState({
      max: maxValue,
      disabled:false
    }, this.setStateValue)
  }

  changeMinValue = (minValue) => {
    localStorage.setItem('minValue', minValue);
    this.setState({ min: minValue,disabled:false }, this.setStateValue)
  }

  SetValue = () => {
    let newcounter = this.state.min
    let newmax = this.state.max

    this.setState({
      counter: newcounter,
      max: newmax,
      isHidden:true

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
  onSHOWsET=()=>{
    this.setState({isHidden:false})
  }

  render = () => {

let changeStatus=(this.state.counter===this.state.max)?true:false



    return (


      <div>
      {/* // component GETVALUE */}
     <div className="App">
     {this.state.isHidden  && <div className="GetValue">
          <InputValue state={this.state}
           checkValue={this.checkValue} />
          <Button buttonname="INC" callback={this.IncClick}
           state={this.state} 
           disabled={(this.state.max === this.state.min) ||
            (this.state.max < this.state.min) ||
            (this.state.min < 0) || (this.state.counter ===this.state.max )|| (this.state.max < 0)?true:false} />



          <Button buttonname="Reset"
           callback={this.ResetClick} 
           state={this.state} 
           disabled={(this.state.max === this.state.min) ||
            (this.state.max < this.state.min) ||
            (this.state.min < 0) || (this.state.max < 0)?true:false}   />
             <Button buttonname="Set"
             callback={this.onSHOWsET}
              />
        </div>
  }
        // {/* component SET */}
        {!this.state.isHidden  &&    <div className="SetValue">
          <SetValue changeMaxValue={this.changeMaxValue}
            changeMinValue={this.changeMinValue}
             state={this.state}
          />
          <Button buttonname="Set" 
          callback={this.SetValue} 
           disabled={(this.state.max === this.state.min) ||
            (this.state.max < this.state.min) ||
            (this.state.min < 0) || (this.state.max < 0)?true:false}/>
        </div>
  }
      </div>
  }
      </div>
    );
  }
}

export default App;
