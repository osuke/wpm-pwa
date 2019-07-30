<template>
  <div>
    <v-textarea v-model="text" @change="update" outlined></v-textarea>
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
