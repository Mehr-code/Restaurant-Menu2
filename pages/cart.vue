<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Your Basket</h2>

    <div
      class="bg-itemBackground shadow-xl rounded-sm p-6 flex flex-col gap-8"
      v-if="cartStore.cart.length"
    >
      <!-- Product List -->
      <div
        class="items-center text-xl grid grid-cols-4"
        v-for="product in cartStore.cart"
      >
        <img :src="product.img" :alt="product.title" />
        <p class="text-white">{{ product.title }}</p>
        <p class="text-itemPriceHighlight text-lg ml-8">
          {{ product.price * product.quantity }} Linuxeum
        </p>

        <!-- delete -->
        <button class="ml-auto" @click="cartStore.deleteFromCart(product)">
          <span class="material-symbols-outlined text-red-500"> delete </span>
        </button>
      </div>
      <!-- cart total -->
      <div class="text-right pt-4 pr-5 mt-4 border-t-2">
        <span class="text-white">Total amount to pay: </span>
        <span class="text-white">{{ cartStore.cartTotal }} Linuxeum</span>
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
