<template>
  <div>
    <header>
      <nuxt-link to="/"><h1>Linux Ali</h1></nuxt-link>
      <nuxt-link to="/cart"
        ><span class="material-symbols-outlined">
          shopping_bag
        </span></nuxt-link
      >
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
