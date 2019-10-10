import shop from '@/api/shop'

const state = {
    items:[],
    checkoutStatus: null
}

const getters = {
    cartProducts( state, getters, rootState  ){
        return state.items.map( cartItem => {
            const product = rootState.products.items.find(product => product.id === cartItem.id )

            return {
                title: product.title,
                price: product.price,
                quantity: cartItem.quantity
            }
        })
    },

    cartTotal( state, getters) {
        return getters.cartProducts.reduce( (total, cartItem) => total + (cartItem.price*cartItem.quantity), 0 )
    },
}

const mutations = {
    pushProductToCart(state, productId){
        state.items.push({
            id: productId,
            quantity: 1
        })
    },

    incrementItemQuantity(state, cartItem){
        cartItem.quantity++
    },

    setCheckoutStatus(state, status){
        state.checkoutStatus = status
    },

    emptycart(state) {
        state.items = []
    }
}

const actions = {
    addProductToCart({ commit, state, getters, rootGetters }, product ){
        if( rootGetters['products/productIsInStock'](product) ){
            const cartItem = state.items.find( item => item.id === product.id)

            if ( !cartItem ){
                commit('pushProductToCart', product.id)
            }else{
                commit('incrementItemQuantity', cartItem)
            }

            commit('products/decrementProductInventory', product, {root: true})
        }
    },

    checkout( { commit, state } ) {
        shop.buyProducts( state.items, ()=>{
            commit('emptycart')
            commit('setCheckoutStatus', 'success')
        },()=>{
            commit('setCheckoutStatus', 'fail')
        })
    }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}