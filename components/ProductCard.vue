<template>
  <!-- Whole card -->
  <div
    class="card flex flex-col lg:flex-row items-center lg:gap-8 gap-0 relative"
  >
    <!-- IMG -->
    <img :src="product.img" :alt="product.title" class="rounded-md mb-3" />
    <!-- Info -->
    <div class="flex flex-col gap-2">
      <!-- Title -->
      <p
        class="lg:text-lg text-sm font-bold text-itemTitleColor w-[50%] sm:text-wrap lg:text-nowrap"
      >
        {{ product.title }}
      </p>
      <!-- Desc -->
      <p
        class="text-sm text-itemDescriptionColor h-16 invisible lg:visible text-justify"
      >
        {{ product.description }}
      </p>
      <p
        class="lg:text-lg font-bold text-sm text-itemPriceHighlight absolute bottom-14 right-8 lg:my-3 lg:static"
      >
        {{ product.price }} Linuxeum
      </p>
      <button class="btn" @click="addToBasket()" :disabled="isPending">
        <!-- Loading Stuff -->
        <span v-show="!isPending">Add to Card</span>
        <span v-show="isPending">Adding...</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartStore";

const { product } = defineProps(["product"]);
const cartStore = useCartStore();

// For loading
const isPending = ref(false);

const addToBasket = async () => {
  isPending.value = true;
  await cartStore.addToCart(product);
  setTimeout(() => {
    isPending.value = false;
  }, 2000);
};
</script>

<style scoped></style>
