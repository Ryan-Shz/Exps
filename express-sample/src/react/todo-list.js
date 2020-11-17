import {Component, Fragment} from 'react';
import TodoItem from './todo-item'
import './style.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className='red-btn' onClick={this.handleAdd}>add</button>
                </div>
                <TodoItem list={this.state.list} handleItemClick={this.handleItemClick}/>
            </Fragment>
        );
    }

    handleAdd() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: '',
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleItemClick(index) {
        // 拷贝数组
        const list = [...this.state.list];
        // 删除数组中index位置的元素
        list.splice(index, 1);
        this.setState({list});
    }
}

export default TodoList