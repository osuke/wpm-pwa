<template>
  <div id="app">
    <Content />
    <Controller />
  </div>
</template>

<script lang="ts">
import 'reset.css';
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/Content.vue';
import Controller from '@/components/Controller.vue';

@Component({
  components: {
    Content,
    Controller,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
html {
  font-family: sans-serif;
  font-size: 10px;
  color: #1e1e1e;
  height: 100%;
}

body {
  background: #222;
  padding: 12px;
  height: 100%;
  box-sizing: border-box;
}
</style>
