<template>
  <div>
    这个一个slot示例组件
    <h1><slot name="header">默认Header</slot></h1>
    <h2>
      <!-- 后备内容 -->
      <slot>HelloWorld</slot>
    </h2>
    <slot name="footer"></slot>
    <h1>
      <slot name="scope" :content="content">{{ content }}</slot>
    </h1>
    <h2>
      <slot name="desconstruct" :content="content">{{ content }}</slot>
    </h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "这个是作用域插槽",
    };
  },
};
</script>
<style scoped></style>
