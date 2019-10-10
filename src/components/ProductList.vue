<template>
    <div>
        <h1>Product List</h1>
        <img
            v-if="loading"
            src="https://loading.io/spinners/azure/index.azure-round-loader.svg"
        >

        <ul v-else>
            <li v-for="(product, item) in products" :key="item">
                {{ product.title }} - {{ product.price | currency }} - {{ product.inventory }}
                <button
                    :disabled="!productIsInStock(product)"
                    @click="addProductToCart(product)"
                >
                    Add to cart
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import shop from '@/api/shop'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            loading: false,
        }
    },

    methods:mapActions({
        fetchproducts: 'products/fetchproducts',
        addProductToCart: 'cart/addProductToCart',
    }),

    computed: {
        ...mapState('products',{products: 'items'}),
        ...mapGetters('products',['productIsInStock']),
    },

    created(){
        this.loading = true,
        this.fetchproducts()
        .then(() => this.loading = false)
    },

    /* methods:{
        addProductToCart(product){
            this.$store.dispatch('addProductToCart', product)
        }
    },

    computed: {
        products(){
            //return this.$store.getters.availableProducts
            return this.$store.state.products
        },

        productIsInStock(){
            return this.$store.getters.productIsInStock
        }
    },

    created(){
        this.loading = true,
        this.$store.dispatch('fetchproducts')
        .then(() => this.loading = false)
    } */
}
</script>