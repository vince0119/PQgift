<template>
  <div class="product-item " v-bind:class="item.menuName" v-for="(element, id) in list" :key="id">
    <div class="product product_filter" >
      <div class="product_image">
        <img v-bind:src="element.imgLink" />
      </div>
      <div class="product_info">
        <h6 class="product_name">
          <router-link to="/#">{{ element.productName }}</router-link>
        </h6>
        <div class="product_price">₫{{ element.unitPrice }}.000</div>
      </div>
    </div>
    <div @click="addToCart(item)" class="red_button add_to_cart_button">
      <a href="#">add to cart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemProduct",
  data() {
    return {
      list: [],
    };
  },
  props: {
    item: {
      default: {},
    },
  },
  // created() {
  //   this.item.products.forEach((element) => {
  //     this.list.push(element);
  //   },
  //   );
  // },
  mounted() {
    this.item.products.forEach((element) => {
      this.list.push(element);
    });
  },
  methods: {
    addToCart(item) {
      this.$emit("add-shop-cart", item);
    },
  },
};
</script>

<style scoped>
/* .product-item {
  position: absolute;
  left: 0px;
  top: 0px;
}
.product product_filter{
  border-right: 1px solid rgb(233, 233, 233);
} */
</style>