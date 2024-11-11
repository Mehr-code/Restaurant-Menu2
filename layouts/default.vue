<template>
  <div class="m-8">
    <header class="wrapper flex justify-between">
      <nuxt-link to="/"
        ><h1 class="text-siteNameAccent text-5xl">Linux Ali</h1></nuxt-link
      >
      <nuxt-link to="/cart"
        ><span class="material-symbols-outlined text-white text-5xl">
          shopping_bag
        </span></nuxt-link
      >
    </header>
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
