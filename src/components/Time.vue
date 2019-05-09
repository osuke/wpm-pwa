<template>
  <div class="time">{{ formattedTime }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component
export default class Time extends Vue {
  @Prop() private time!: number;

  get formattedTime() {
    const time = this.time / 100;
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = Math.floor(time - hours * 60 * 60 - minutes * 60);
    const milliseconds = this.time - (hours * 60 * 60 + minutes * 60 + seconds ) * 100;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}:${this.pad(milliseconds)}`;
  }

  private pad(num: number) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.time {
  color: #fff;
}
</style>
