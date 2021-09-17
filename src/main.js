import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: 'Do task 1', done: false},
      { id: 2, title: 'Do task 2', done: true},
      { id: 3, title: 'Do task 3', done: false},
    ],
    petList: []
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todos = [...state.todos, payload];
    },
    SET_PET_LIST(state, payload) {
      state.petList = payload;
    }
  },
  actions: {
    fetchPetList(store, status) {
      axios.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
        .then(({ data }) => {
          store.commit('SET_PET_LIST', data)
        })
        .catch((e) => {
          console.error(e);
        })
    }
  },
  getters: {
    totalTodos(state) {
      return state.todos.length;
    }
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
