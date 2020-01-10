import React from 'react';


class SetValue extends React.Component {
    constructor(props) {
        super(props)

    }




    render = () => {
let colorValue=(this.props.state.max === this.props.state.min) ||
(this.props.state.max < this.props.state.min) ||
(this.props.state.min < 0) || (this.props.state.max < 0)?"active":""
        return (
            <div className="SetValue">
                <p><b>Максимальное значение:</b></p>
                <input className={colorValue} type="number" size="40" onChange={(e) => { this.props.changeMaxValue(Number(e.currentTarget.value)) }} />
                <p><b>Минимальное  значение:</b></p>
                <input  className={colorValue} onChange={(e) => { this.props.changeMinValue(Number(e.currentTarget.value)) }} type="number" size="40" />
            </div>
        );
    }
}

export default SetValue;
