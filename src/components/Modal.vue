<template>
  <transition name="result">
    <div class="modal" v-if="visibility">
      <div class="bg" @click="closeHandler" />
      <div class="content">
        <div class="button" @click="closeHandler">x</div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  private isShow = false;

  @Prop() private visibility!: boolean;
  @Prop() private closeHandler!: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  opacity: 0.5;
}
.content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 200px;
  background: #222;
}
.modal {
  color: #fff;
}
</style>
