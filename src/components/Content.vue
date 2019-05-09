<template>
  <div class="container">
    <div class="tabs">
      <span class="tab" @click="showReading">R</span>
      <span class="tab" @click="showEditor">E</span>
    </div>
    <div class="content">
      <Reading v-if="tabIndex === 0" :sentence="sentence" />
      <Editor v-if="tabIndex === 1" :sentence="sentence" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Editor from '@/components/Editor.vue';
import Reading from '@/components/Reading.vue';

type TabIndexType = 0 | 1;

@Component({
  components: {
    Editor,
    Reading,
  },
})
export default class Content extends Vue {
  private tabIndex: TabIndexType = 0;

  private showReading() {
    this.tabIndex = 0;
  }

  private showEditor() {
    this.tabIndex = 1;
  }

  get sentence() {
    return this.$store.state.content.text;
  }
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
  padding: 12px 12px 68px;
  box-sizing: border-box;
  line-height: 1.5;
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
.tab {
  display: block;
  width: 100px;
  height: 32px;
  line-height: 32px;
  background: #333;
  text-align: center;
}
</style>
