<template>
    <div>
        <h1>Product List</h1>
        <img
            v-if="loading"
            src="https://loading.io/spinners/azure/index.azure-round-loader.svg"
        >

        <ul v-else>
            <li v-for="(product, item) in products" :key="item">
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script>
import shop from '@/api/shop'

export default {
    data(){
        return {
            loading: false,
        }
    },

    computed: {
        products(){
            return this.$store.getters.availableProducts
        }
    },

    created(){
        this.loading = true
        this.$store.dispatch('fetchproducts')
        .then(() => this.loading = false)
    }
}
</script>