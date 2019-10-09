import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: []
    },

    getters:{
        availableProducts ( state, getters ) {
            return state.products.filter( product => product.inventory > 0 );
        },

        productsCount(){

        }
    },

    actions:{
        fetchproducts( { commit } ){
            return new Promise((resolve, reject) => {
                shop.getProducts( products => {
                    commit('setProducts', products)
                    resolve()
                })
            })
        },
    },

    mutations:{
        setProducts(state, products){
            state.products = products
        }
    }
})