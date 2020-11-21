// 创建一个异步组件

import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"), // loader返回一个同步组件
  loading() { // 异步组件加载完成前显示
    return <div>正在加载...</div>;
  },
});

// 导出后就可以代替原来的Detail组件使用了
export default () => <LoadableComponent />;
