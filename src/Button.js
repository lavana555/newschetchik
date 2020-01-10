import React from 'react';


class Button extends React.Component {
    render = () => {
           

        return (
            <div className="Button">
                <button
                    onClick={this.props.callback}
                    disabled={this.props.disabled}
                >{this.props.buttonname}</button>

            </div>
        );
    }
}

export default Button;
