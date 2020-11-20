import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfoWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from "./style";

class Header extends React.Component {
  render() {
    let { focused, onFocus, onBlur, list } = this.props;
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
                onFocus={() => {
                  onFocus(list);
                }}
                onBlur={onBlur}
                className={focused ? "focused" : ""}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe69d;
            </i>
            {this.createSearchInfoComponent(focused, list)}
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

  createSearchInfoComponent(focused, list) {
    let { onMouseEnter, onMouseLeave, isMouseEnter, pageIndex, pageSize, onChangeSearchListPage } = this.props;
    let itemList = [];
    if (list && list.size) { 
      let start = pageIndex * 10;
      let end = start + pageSize;
      list = list.toJS();
      for (let i = start; i < end; i++) {
        itemList.push(<SearchInfoItem key={i}>{list[i]}</SearchInfoItem>)
      }
    }
    return (
      (focused || isMouseEnter) && (
        <SearchInfoWrapper
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={onChangeSearchListPage}>
              <i className="iconfont refresh">&#xe610;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{itemList}</SearchInfoList>
        </SearchInfoWrapper>
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    isMouseEnter: state.getIn(["header", "isMouseEnter"]),
    pageIndex: state.getIn(["header", "pageIndex"]),
    pageSize: state.getIn(["header", "pageSize"]),
    totalPageSize: state.getIn(["header", "totalPageSize"])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFocus(list) {
      let action = actionCreators.createChangeFocusAction(true);
      dispatch(action);
      // 只有第一次展开时才请求搜索热词
      if (list.size === 0) {
        dispatch(actionCreators.loadSearchInfoItems());
      }
    },
    onBlur() {
      let action = actionCreators.createChangeFocusAction(false);
      dispatch(action);
    },
    onMouseEnter() {
      dispatch(actionCreators.createChangeMouseEnterAction());
    },
    onMouseLeave() {
      dispatch(actionCreators.createChangeMouseLeaveAction());
    },
    onChangeSearchListPage() {
        console.log(123);
      dispatch(actionCreators.createChangeSearchListChangeAction());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
