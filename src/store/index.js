import { createStore } from "vuex";
import api from "@/service/api";

export default createStore({
  state: {
    isSideBarOpen: false,
    searchWord: "",
    isSearch: false,
    cardID: "",
    commentsData: [],
    cardInfo: {},
    isCommentLoading: false,
    filteredWannaKnow: [],
    searchResultCount: 0,
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
    targetCardInfo(state, cardInfo) {
      state.cardInfo = cardInfo;
    },
    changeCommentLoadingStatus(state, loadingStatus) {
      state.isCommentLoading = loadingStatus;
    },
    mutateWannaKnowData(state, response) {
      state.filteredWannaKnow = response;
    },
    mutateSearchResultCount(state, response) {
      state.searchResultCount = response;
    },
  },
  actions: {
    changeCardID({ state, dispatch }, wanna_know_id) {
      state.cardID = wanna_know_id;
      dispatch("getComments", wanna_know_id);
    },
    getWannaKnowComments({ commit, state }, wanna_know_id) {
      if (wanna_know_id === state.cardID) {
        console.log("一樣的cardID");
        return;
      } else {
        commit("changeCardID", wanna_know_id);
        commit("changeCommentLoadingStatus", true);
        api
          .getComments(wanna_know_id)
          .then((res) => commit("getComments", res.data))
          .then(() => commit("changeCommentLoadingStatus", false));
      }
    },
    async getWannaKnowByTag({ commit }, tagName) {
      commit("changeSearchWord", tagName.tags);
      let wannaKnowByTag = await api.getWannaKnowByTag(tagName);
      commit("mutateWannaKnowData", wannaKnowByTag.data.data);
      commit("mutateSearchResultCount", wannaKnowByTag.data.total_item);
    },
    async getWannaKnowByCategory({ commit }, queryParams) {
      let wannaKnowByCategory = await api.getWannaKnowByCategory(queryParams);
      commit("mutateWannaKnowData", wannaKnowByCategory.data.data);
    },
  },
  modules: {},
});
