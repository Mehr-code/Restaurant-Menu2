import { defineStore } from "#build/imports";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    async getCard() {
      const data = await $fetch("https://localhost:4000/cart");
      this.cart = data;
      console.log(this.cart);
    },
  },
});
