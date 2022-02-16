import { createStore } from "vuex";

export default createStore({
  state: {
    isSideBarOpen: false,
  },
  mutations: {
    toggleSideBar(state, status) {
      state.isSideBarOpen = status;
    },
  },
  actions: {},
  modules: {},
});
