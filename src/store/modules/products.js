import shop from '@/api/shop'

const state = {
    items: [],
}

const getters = {
    availableProducts ( state, getters ) {
        return state.items.filter( product => product.inventory > 0 );
    },

    productIsInStock(){
        return ( product ) => {
            return product.inventory > 0
        }
    }
}

const mutations = {
    setProducts(state, products){
        state.items = products
    },


    decrementProductInventory(state, product){
        product.inventory--
    },
}

const actions = {
    fetchproducts( { commit } ){
        return new Promise((resolve, reject) => {
            shop.getProducts( products => {
                commit('setProducts', products)
                resolve()
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}