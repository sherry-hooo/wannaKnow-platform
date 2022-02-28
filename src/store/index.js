import { createStore } from "vuex";

export default createStore({
  state: {
    isSideBarOpen: false,
    filterTag: "",
  },
  mutations: {
    toggleSideBar(state, status) {
      state.isSideBarOpen = status;
    },
    changeFilterTag(state, status) {
      state.filterTag = status;
    },
  },
  actions: {},
  modules: {},
});
