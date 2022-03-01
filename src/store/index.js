import { createStore } from "vuex";
import api from "@/service/api";

export default createStore({
  state: {
    isSideBarOpen: false,
    searchWord: "",
    isSearch: false,
    cardID: "",
    commentsData: [],
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
    changeCardID(state, wanna_know_id) {
      state.cardID = wanna_know_id;
    },
    getComments(state, comments) {
      state.commentsData = comments;
    },
  },
  actions: {
    changeCardID({ state, dispatch }, wanna_know_id) {
      console.log(state, dispatch);
      state.cardID = wanna_know_id;
      dispatch("getComments", wanna_know_id);
    },
    getCardComments({ commit, state }, wanna_know_id) {
      console.log(wanna_know_id);
      if (wanna_know_id === state.cardID) {
        console.log("一樣的cardID");
        return;
      } else {
        commit("changeCardID", wanna_know_id);
        api
          .getComments(wanna_know_id)
          .then((res) => commit("getComments", res.data));
      }
    },
  },
  modules: {},
});
