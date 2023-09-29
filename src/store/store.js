import { createStore } from 'vuex';
import { useNotification } from "@kyvg/vue3-notification";
import apiClient from '../api/api';

const { notify }  = useNotification()
export default createStore({
  state: {
    searchQuery: '',
    searchResults: [],
    randomImages: [],
    isSearchLoading: false,
    active: {},
    savedImages: JSON.parse(localStorage.getItem('images')) || [],
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setSearchResults(state, repos){
      state.searchResults = repos;
    },
    setImages(state, res){
      state.randomImages = res;
    },
    setIsSearchLoading(state, res){
      state.isSearchLoading = res;
    },
    setActiveImage(state, res){
      state.active = res;
    },
    setImagesToStorage(state, res){
      state.savedImages = res;
    }
  },
  actions: {
    async searchImages({ commit }, query) {
      commit('setSearchQuery', query);
      commit('setIsSearchLoading', true);
      const res = await apiClient.get(`/search/photos?query=${query}&client_id=${import.meta.env.VITE_ACCESS_KEY}&per_page=8`);
      commit('setSearchResults', res.data.results);
      commit('setIsSearchLoading', false);
    },
    async getRandomImages({ commit }) {
      commit('setIsSearchLoading', true);
      const res = await apiClient.get('/photos/random' + `?client_id=${import.meta.env.VITE_ACCESS_KEY}&count=8`);
      commit('setImages', res.data);
      commit('setIsSearchLoading', false);
    },
    async makeActiveImage({commit}, res){
      commit('setActiveImage', res);
    },
    async addImageToStorage({ commit, state}, res){
      const images = JSON.parse(localStorage.getItem('images')) || [];
      const isSaved = images.find(item => item.id === res.id);
      if(isSaved){
        notify({
          title: "Add Images",
          text: "You have  added yet!",
          type: 'warn'
        });
      } else {
        images.push(res);
        localStorage.setItem('images', JSON.stringify(images));
        commit('setImagesToStorage', images);
        notify({
          title: "Add Images",
          text: "You have  added!",
          type: "success"
        });
      }
    }
  },
  getters: {
    searchQuery(state) {
      return state.searchQuery;
    },
    searchResults(state) {
      return state.searchResults;
    },
    getImages(state){
      return state.randomImages;
    },
    getLoading(state){
      return state.isSearchLoading
    },
    getActiveImage(state){
      return state.active
    },
    getSavedImages(state){
      return state.savedImages
    }
  },
});
