import Vue from 'vue'
import Vuex from 'vuex'

// modules
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    getters:{},
    actions:{},
    mutations:{},
    modules:{
        products,
        cart,
    }
})