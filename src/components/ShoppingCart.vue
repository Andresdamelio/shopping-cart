<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="(product, item) in products" :key="item">
                {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
            </li>
        </ul>
        <p>
            Total: {{ total | currency }}
        </p>
        <p v-if="status">{{ status }}</p>
        <button @click="checkout">Checkout</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {

    methods: mapActions(['checkout']),

    computed:{
        ...mapState({
            status: 'checkoutStatus'
        }),

        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotal'
        })
    },


    /* computed: {
        products(){
            return this.$store.getters.cartProducts
        },

        total(){
            return this.$store.getters.cartTotal
        },

        status(){
            return this.$store.state.checkoutStatus
        }
    }, */

    /* methods: {
        checkout(){
            this.$store.dispatch('checkout')
        }
    } */
}
</script>