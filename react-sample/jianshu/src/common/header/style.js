import styled from "styled-components";
import logoImage from "../../static/image/logo.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/",
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoImage});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box; 
  padding-right: 190px;
  padding-left: 70px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  display: inline-block;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    width: 30px;
    line-height: 30px;
    position: absolute;
    right: 10px;
    top: 12px;
    text-align: center;
    border-radius: 15px;

    &.focused {
       background: #777;
       color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: 1px solid #eee;
  border-radius: 40px;
  font-size: 14px;
  background: #eee;
  padding: 0 40px 0 20px;
  margin-top: 8px;
  margin-left: 15px;

  &.focused {
    width: 240px;
  }
  &.search-enter {
    transition: all .2s ease-out
  }
  &.search-enter-active {
    width: 240px;
  }
  &.search-exit {
    transition: all .2s ease-out
  }
  &.search-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute; 
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  height: 38px;
  line-height: 38px;
  margin-top: 8px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 20px;
  border: 1px solid rgba(236,97,73,.7);
  font-size: 14px;
  background-color: transparent;

  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149
  }
`;