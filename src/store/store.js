import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: []
    },

    getters:{
        productsCount(){

        }
    },

    actions:{
        fetchproducts(){

        }
    },

    mutations:{
        setProducts(state, products){
            state.products = products
        }
    }
})