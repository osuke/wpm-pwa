<template>
  <div>
    <textarea v-model="text" @change="update"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Editor extends Vue {
  private text = '';

  @Prop() private sentence!: string;

  private created() {
    this.text = this.sentence;
  }

  private update() {
    this.$store.dispatch('updateSentence', this.text);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  color: #adadad;
  background: #333;
  font-size: 1.6rem;
  padding: 12px;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>
