<template>
  <!-- Whole card -->
  <div
    class="card flex flex-col lg:flex-row items-center lg:gap-8 gap-0 relative"
  >
    <!-- IMG -->
    <img
      :src="product.img"
      :alt="product.title"
      class="w-full h-32 rounded-md mb-3"
    />
    <!-- Info -->
    <div class="flex flex-col gap-2">
      <!-- Title -->
      <p
        class="lg:text-lg text-sm font-bold text-itemTitleColor w-[50%] sm:text-wrap lg:text-nowrap"
      >
        {{ product.title }}
      </p>
      <!-- Desc -->
      <p class="text-sm text-itemDescriptionColor h-16 invisible lg:visible">
        {{ product.description }}
      </p>
      <p
        class="lg:text-lg font-bold text-sm text-itemPriceHighlight absolute bottom-14 right-4 lg:my-3 lg:static"
      >
        {{ product.price }} Linuxeum
      </p>
      <button class="btn">
        <span>Add to Card</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
