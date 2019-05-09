import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Calc extends VuexModule {
  private time = 0;

  @Mutation
  private mutateTime() {
    this.time++;
  }

  @Mutation
  private mutateReset() {
    this.time = 0;
  }

  @Action
  private startMeasurement() {
    this.context.commit('mutateTime');
  }

  @Action
  private resetMeasurement() {
    this.context.commit('mutateReset');
  }
}
