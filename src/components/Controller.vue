<template>
  <div class="container">
    <div class="buttons">
      <div class="button">
        <Button>x</Button>
      </div>
      <div class="button">
        <Button>></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Controller extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
  padding: 12px;
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}
.button {
  margin-left: 8px;
}
</style>
