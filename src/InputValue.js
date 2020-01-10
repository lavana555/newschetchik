import React from 'react';


class InputValue extends React.Component { 

   
  render =()=>{
   const colorValue=(this.props.state.counter===this.props.state.max)?"active":""
    
  return (
    <div className={colorValue}>
       {this.props.state.counter}
      
    </div>
  );
}
}

export default InputValue;
