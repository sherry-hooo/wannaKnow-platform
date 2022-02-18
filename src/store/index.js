import { createStore } from "vuex";

export default createStore({
  state: {
    isSideBarOpen: false,
    isApplyFormOpen: false,
  },
  mutations: {
    toggleSideBar(state, status) {
      state.isSideBarOpen = status;
    },
    toggleApplyForm(state, status) {
      state.isApplyFormOpen = status;
    },
  },
  actions: {},
  modules: {},
});
