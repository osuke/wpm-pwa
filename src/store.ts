import Vue from 'vue';
import Vuex from 'vuex';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Calc from './stores/Calc';

Vue.use(Vuex);

@Module
class Content extends VuexModule {
  private text = 'This is awesome sentence';

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
    calc: Calc,
  },
});
