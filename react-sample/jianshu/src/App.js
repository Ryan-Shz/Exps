import React from 'react';
import { GlobalStyle } from "./global";
import { IconFont } from "./static/iconfont/iconfont"

import Header from './common/header'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconFont />
      <Header />
    </div>
  );
}

export default App;
