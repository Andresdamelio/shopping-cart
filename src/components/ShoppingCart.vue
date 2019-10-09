<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="(product, item) in products" :key="item">
                {{ product.title }} - {{ product.price }} - {{ product.quantity }}
            </li>
        </ul>
        <h2>
            {{totalCart}}
        </h2>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.getters.cartProducts
        },

        totalCart(){
            return this.$store.getters.cartTotal
        }

    }
}
</script>