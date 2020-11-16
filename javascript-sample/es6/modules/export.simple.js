// 使用 export 导出的示例

let author = {
    name: 'Ryan',
    age: 30
};

const str = 'this is a const value';

let testFunc = () => {
    console.log('execute in export.js function');
}

let testVar = 'test variant';

// export 只能导出对象
export {
    author,
    str
}

// 可以写多个export, 导出的对象最终会被合并成一个
export {
    testFunc
}

export {
    testVar
}