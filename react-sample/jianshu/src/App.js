import React from 'react';
import { GlobalStyle } from "./global";
import { IconFont } from "./static/iconfont/iconfont";
import Header from './common/header'

function App(props) {
  return (
    <div className="App">
      <GlobalStyle />
      <IconFont />
      <Header />
    </div>
  );
}

export default App;