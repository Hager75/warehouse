import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
const store = createStore({
    state () {
      return {
        showProduct: false
      }
    },
    // mutations: {
    //   increment (state) {
    //     state.showProduct = !state.showProduct
    //   }
    // }
  })
createApp(App).use(router).use(store).mount('#app')
