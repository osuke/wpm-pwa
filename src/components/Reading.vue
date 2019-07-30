<template>
  <div class="body-1 pt-4 pl-3 pr-3">
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
