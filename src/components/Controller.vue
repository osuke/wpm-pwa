<template>
  <div>
    <v-bottom-navigation fixed>
      <Time :time="time" />
      <v-btn @click="reset">
        <v-icon>mdi-loop</v-icon>
      </v-btn>
      <v-btn @click="start" v-if="!isPlay">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn @click="stop" v-if="isPlay">
        <v-icon>mdi-stop</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-layout
      justify-center
      wrap
    >
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">WPM SCORE</v-card-title>

          <v-card-text class="display-1">{{ result }}</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text
              @click="dialog = false"
            >
              CLOSE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
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
  @Prop() private value!: boolean;

  private dialog = false;
  private isPlay = false;
  private timerID!: number;

  private start() {
    this.isPlay = true;

    this.dialog = false;
    this.timerID = setInterval(() => {
      this.$store.dispatch('startMeasurement');
    }, 10);
  }

  private stop() {
    this.isPlay = false;
    this.dialog = true;
    clearInterval(this.timerID);
  }

  private reset() {
    this.isPlay = false;
    this.dialog = false;
    clearInterval(this.timerID);
    this.$store.dispatch('resetMeasurement');
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
