<template>
  <button @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private text!: string;
  @Prop() private callbackFunc!: () => void;

  get clickHandler() {
    if (this.callbackFunc) {
      return this.callbackFunc;
    } else {
      // tslint:disable-next-line
      return () => {};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  display: block;
  width: 44px;
  height: 44px;
  color: #adadad;
  font-size: 1.4rem;
  letter-spacing: 0.14em;
  border-radius: 50%;
  border: none;
  background: #333;
}
</style>
