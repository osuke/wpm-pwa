<template>
  <div>
    <v-tabs centered>
      <v-tab @click="showReading">READING</v-tab>
      <v-tab @click="showEditor">EDITING</v-tab>
    </v-tabs>
    <div class="pa-3">
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
