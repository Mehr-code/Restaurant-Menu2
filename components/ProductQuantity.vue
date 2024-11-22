<template>
  <div class="flex">
    <button class="btnBasket" @click="cartStore.decQuantity(product)">-</button>
    <p class="py-1 px-4 mx-1 rounded-sm text-lg bg-gray-300">
      {{ product.quantity }}
    </p>
    <button class="btnBasket" @click="cartStore.incQuantity(product)">+</button>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartStore";
const cartStore = useCartStore();

defineProps(["product"]);
</script>

<style scoped></style>
