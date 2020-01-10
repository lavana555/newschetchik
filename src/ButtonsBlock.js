import React from 'react';
import logo from './logo.svg';
import './App.css';

class   ButtonsBlock extends React.Component { 
  render =()=>{
    const disabledInc=(this.props.state.counter===this.props.state.max)?true:false
    const disabledReset=(this.props.state.counter<this.props.state.max)?true:false
  return (
    <div className="ButtonBlock">
      <button onClick={this.props.IncClick} disabled={disabledInc}>Inc</button>
      <button onClick={this.props.ResetClick} disabled={disabledReset}>Reset</button>
    </div>
  );
}
}

export default ButtonsBlock;
