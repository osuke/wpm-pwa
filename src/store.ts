import Vue from 'vue';
import Vuex from 'vuex';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

Vue.use(Vuex);

@Module
class Content extends VuexModule {
  private text = 'paste your english text here';

  @Mutation
  private mutateSentence(payload: string) {
    this.text = payload;
  }

  @Action
  private updateSentence(payload: string) {
    this.context.commit('mutateSentence', payload);
  }
}

export default new Vuex.Store({
  modules: {
    content: Content,
  },
});
