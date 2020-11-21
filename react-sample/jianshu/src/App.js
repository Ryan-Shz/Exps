import React from "react";
import { GlobalStyle } from "./global";
import { IconFont } from "./static/iconfont/iconfont";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";

import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <GlobalStyle />
      <IconFont />
      <BrowserRouter>
        <Header />
        {/* 路由配置 */}
        <Route path="/" exact component={Home}></Route>
        {/* 动态路由，表示后面需要传递id值 */}
        <Route path="/detail/:id" exact component={Detail}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
