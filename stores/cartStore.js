import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    async getCard() {
      const data = await $fetch("http://localhost:4000/cart");
      this.cart = data;
    },
    async deleteFromCart(product) {
      this.cart = this.cart.filter((p) => {
        return p.id !== product.id;
      });
    },
    async incQuantity(product) {
      let updatedProduct;
      this.cart = this.cart.map((p) => {
        if (p.id === product.id) {
          p.quantity++;
          updatedProduct = p;
        }
        return p;
      });

      // make put REQ
      await $fetch("http://localhost:4000/cart/" + product.id, {
        method: "put",
        body: JSON.stringify(updatedProduct),
      });
    },
  },
});
