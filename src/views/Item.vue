<template>
  <div class="product-item" v-bind:class="item.categories.categoryName">
    <div class="product product_filter">
      <div class="product_image">
        <img v-bind:src="item.imgLink" />
      </div>
      <div>
        <div class="product_info">
          <h6 class="product_name">
            <router-link to="/#">{{ item.productName }}</router-link>
          </h6>
          <div class="product_price">{{ item.unitPrice }}</div>
        </div>
      </div>
    </div>
    <div @click="addToCart(item)" class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
</div>
  
</template>

<script>
export default {
    name: "ItemProduct",
    props: {
        item: {
          default: {}
        }
    },
    methods: {
      addToCart(item) {
        this.$emit('add-shop-cart', item)
      }
    },
};
</script>

<style>
</style>