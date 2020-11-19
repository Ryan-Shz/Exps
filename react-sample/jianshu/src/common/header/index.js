import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store"
 
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from "./style";

function Header(props) {
  let { focused, onFocus, onBlur } = props;
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={focused} timeout={200} classNames="search">
            <NavSearch
              onFocus={onFocus}
              onBlur={onBlur}
              className={focused ? "focused" : ""}
            />
          </CSSTransition>
          <i className={focused ? "focused iconfont" : "iconfont"}>&#xe69d;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writing">
          <i className="iconfont">&#xe6e5;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

function mapStateToProps(state) {
  return {
    focused: state.header.focused,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFocus() { 
      let action = actionCreators.createChangeFocusAction(true);
      dispatch(action);
    },
    onBlur() {
      let action = actionCreators.createChangeFocusAction(false);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
