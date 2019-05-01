<template>
  <div class="container">
    {{ sentence }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Reading extends Vue {
  @Prop() private sentence!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  color: #adadad;
  font-size: 1.6rem;
  padding: 12px;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>
