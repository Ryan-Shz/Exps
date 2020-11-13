import {Component} from 'react';
import './game.css'

// 函数组件不支持组件导出
// function Square(props) {
//     return (
//         <button
//             className="square"
//             onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }

class Square extends Component {
    render() {
        return (
            <button
                className="square"
                onClick={this.props.onClick}>
                {this.props.value}
            </button>
        ); 
    }
}

export default Square