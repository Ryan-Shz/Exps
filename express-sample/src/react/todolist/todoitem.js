import React from 'react';

class TodoItem extends React.Component {

    render() {
        return (
            <ul>
                {this.props.list.map((item, index) => {
                    return <li key={index} onClick={this.props.handleItemClick.bind(this, index)}>{item}</li>;
                })}
            </ul>
        );
    }
}

export default TodoItem