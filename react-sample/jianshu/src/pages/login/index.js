import React from "react";
import { withRouter, Redirect } from "react-router-dom";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    // 如果已登录，重定向到主页
    if (this.state.isLogin) {
        return <Redirect to='/'></Redirect>
    } 
    return (
      <div> 
        <h1>Login Page</h1>
        <button onClick={this.login.bind(this)}>登录</button>
      </div>
    );
  }

  login() {
      this.setState((prevState) => ({
          isLogin: true
      }));
  }
}

export default withRouter(Login);
