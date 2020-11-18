import React from 'react';
import './original.css'
import './transition.css'

// 安装：npm install react-transition-group --save
import { CSSTransition } from 'react-transition-group';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      list: []
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* 使用CSS3实现动画 */}
        <div className={this.state.isShow ? 'show' : 'hide'}>
          Hello Animation!
        </div>
        {/* 使用CSSTransition实现动画 */}
        <CSSTransition
          in={this.state.isShow}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => {
            el.style.color = 'blue'
          }}
          appear={true}>
          <div>Hello CSSTransition!</div>
        </CSSTransition>
        <button onClick={this.toggle.bind(this)}>CSSTransition测试</button>
      </React.Fragment>
    );
  }

  toggle() {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
      list: [...prevState.list, 'item']
    }));
  }
}

export default App;
