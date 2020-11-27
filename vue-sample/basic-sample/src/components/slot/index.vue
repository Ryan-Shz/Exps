<template>
  <div id="app">
    <slot-component>
      这里是slot内容
      <!-- #header 是 v-slot:header 的缩写 -->
      <template #header>自定义Header</template>
      <!-- 默认插槽，即没有给slot指定name属性的插槽 -->
      <template #default>
        <ul>
          <li>123</li>
          <li>456</li>
          <!-- 可以访问当前组件的数据 -->
          <li>{{ name }}</li>
        </ul>
      </template>
      <template v-slot:footer>
        这里是Footer
      </template>
      <!-- 作用域插槽，使用插槽绑定的数据 -->
      <template #scope="scopeProps"> {{ scopeProps.content }}123 </template>
      <!-- 解构插槽的prop -->
      <template #desconstruct="{content}">
        {{content}}
      </template>
    </slot-component>
  </div>
</template>

<script>
import SlotComponent from "./components/SlotComponent.vue";

export default {
  name: "App",
  components: {
    SlotComponent,
  },
  data() {
    return {
      name: "Ryan",
    };
  },
};
</script>

<style scoped></style>
