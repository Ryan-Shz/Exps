import React from "react";
import './transition.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TransitionGroupTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                key={item}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                appear={true}
              >
                <div>item</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.submit.bind(this)}>TransitionGroup测试</button>
      </React.Fragment>
    );
  }

  submit() {
    this.setState((prevState) => ({
      list: [...prevState.list, "item"],
    }));
  }
}

export default TransitionGroupTest;
