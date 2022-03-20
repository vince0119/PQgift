<template>
  <div class="product-item" v-bind:class="this.list_item.key">
    <div class="product product_filter">
      <div class="product_image">
        <img v-bind:src="this.list_item.image" />
      </div>
      <div>
        <div class="product_info">
          <h6 class="product_name">
            <router-link to="/#">{{ this.list_item.name }}</router-link>
          </h6>
          <div class="product_price">{{ this.list_item.price }}</div>
        </div>
      </div>
    </div>
    <div @click="addToCart()" class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
</div>
  
</template>

<script>
export default {
    name: "ItemProduct",
    props: {
        list_item: {
          default: {}
        }
    },
    methods: {
      addToCart() {
        this.$emit('add-shop-cart', this.list_item)
      }
    }

};
</script>

<style>
</style>