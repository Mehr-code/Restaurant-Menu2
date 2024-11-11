<template>
  <div class="card flex items-center gap-8">
    <img
      :src="product.img"
      :alt="product.title"
      class="w-full h-32 rounded-md mb-3"
    />
    <div>
      <p class="text-lg text-itemTitleColor">
        {{ product.title }}
      </p>
      <p class="text-sm text-itemDescriptionColor">{{ product.description }}</p>
      <p class="text-lg font-bold text-itemPriceHighlight my-3">
        {{ product.price }} Linuxeum
      </p>
      <button class="btn">
        <span>Add to Basket</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
