<template>
  <v-app>
    <div id="app">
      <Content />
      <Controller />
    </div>
  </v-app>
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
  height: 100%;
}

body {
  background: #222;
  height: 100%;
}
</style>
