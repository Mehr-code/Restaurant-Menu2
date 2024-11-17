<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Your Basket</h2>

    <div class="flex gap-8 items-center" v-if="cartStore.cart.length">
      <!-- Product List -->
      <div class="card items-center text-xl" v-for="product in cartStore.cart">
        <img :src="product.img" :alt="product.title" />
        <p class="text-white">{{ product.title }}</p>
        <p class="text-white">{{ product.price * product.quantity }}</p>
      </div>
    </div>
    <div v-else>
      <p class="text-white">There are No items in your Basket :((</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
</script>

<style scoped></style>
