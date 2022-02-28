import { createStore } from "vuex";

export default createStore({
  state: {
    isSideBarOpen: false,
    searchWord: "",
    isSearch: false,
  },
  mutations: {
    toggleSideBar(state, status) {
      state.isSideBarOpen = status;
    },
    changeSearchWord(state, status) {
      state.searchWord = status;
      state.isSearch = true;
    },
    toggleSearch(state) {
      state.isSearch = false;
    },
  },
  actions: {},
  modules: {},
});
