import { createStore } from "vuex";

export default createStore({
  state: {
    isSideBarOpen: false,
    isApplyFormOpen: false,
    isFilterOpen: false,
  },
  mutations: {
    toggleSideBar(state, status) {
      state.isSideBarOpen = status;
    },
    toggleApplyForm(state, status) {
      state.isApplyFormOpen = status;
    },
    toggleFilter(state, status) {
      state.isFilterOpen = status;
    },
  },
  actions: {},
  modules: {},
});
