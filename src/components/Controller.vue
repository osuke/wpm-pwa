<template>
  <div class="container">
    <Time :time="time" />
    <div class="buttons">
      <div class="button">
        <Button :callbackFunc="reset">x</Button>
      </div>
      <div class="button" v-if="!isPlay">
        <Button :callbackFunc="start">></Button>
      </div>
      <div class="button" v-if="isPlay">
        <Button :callbackFunc="stop">■</Button>
      </div>
    </div>
    <Modal
      :visibility="showResult"
      :closeHandler="hideResult"
    >
      <div>{{ result }}</div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Time from '@/components/Time.vue';
import Modal from '@/components/Modal.vue';
import calcResult from '@/utils/calcResult';

@Component({
  components: {
    Button,
    Time,
    Modal,
  },
})
export default class Controller extends Vue {
  private isPlay = false;
  private showResult = false;
  private timerID!: number;

  private start() {
    this.isPlay = true;

    this.timerID = setInterval(() => {
      this.$store.dispatch('startMeasurement');
    }, 10);
  }

  private stop() {
    this.isPlay = false;
    this.showResult = true;
    clearInterval(this.timerID);
  }

  private reset() {
    this.isPlay = false;
    this.showResult = false;
    clearInterval(this.timerID);
    this.$store.dispatch('resetMeasurement');
  }

  private hideResult() {
    this.showResult = false;
  }

  get time() {
    return this.$store.state.calc.time;
  }

  get result() {
    return calcResult(this.$store.state.content.text, this.$store.state.calc.time);
  }
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
  background: #222;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}
.button {
  margin-left: 8px;
}
</style>
