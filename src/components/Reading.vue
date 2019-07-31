<template>
  <div class="body-1 pt-4 pl-3 pr-3 pb-12" v-html="formattedText" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Reading extends Vue {
  @Prop() private sentence!: string;

  private get formattedText(): string {
    return this.sentence.replace(/\r?\n/g, '<br>');
  }
}
</script>
