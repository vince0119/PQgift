<template>
  <div class="main_nav_container">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-right">
          <div class="logo_container">
            <img src="/image/logo.png" />
            <router-link to="/">Phú Quốc Gift</router-link>
          </div>
          <nav class="navbar">
            <ul class="navbar_user">
              <li>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <a href="#"> <i class="fa fa-search"></i></a>
                </form>
              </li>
              <li>
                <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
              </li>
              <li class="checkout">
                <a href="#">
                  <span id="checkout_items" class="checkout_items">{{ total }}</span>
                  <btn class="fa fa-shopping-cart" aria-hidden="true">
                    <!-- <div class="box">
                      <span v-if="!hasProduct()">No products</span>
                      <div
                        v-for="(item, index) in cartItems"
                        :key="index"
                        class="box-item"
                      >
                        <h3 class="item-name">{{ item.name }}</h3>
                        <span class="item-price">{{ item.price }}</span>
                      </div>
                      <div class="cart-info" v-if="hasProduct()"></div>
                    </div> -->
                  </btn>
                </a>
              </li>
            </ul>
            <div class="hamburger_container">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/views/Model.vue";

export default {
  name: "Header",

  components: {
    Modal,
  },

  data() {
    return {
      cartItems: [],
      total: 0,
    };
  },

  props: {
    cart: [],
  },

  computed: {
    total() {
      this.cartItems = JSON.parse(localStorage.getItem("myCart"));
      if (this.cartItems == null) {
        return 0;
      }
      return this.cartItems.length;
    },
    showPopupCart() {},
  },

  mounted() {
    console.log(this.cartItems, "item");
  },

  watch: {
    cart() {
      this.cartItems = JSON.parse(localStorage.getItem("myCart"));
    },
  },

  methods: {
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
  },
};
</script>

<style>
.form-control mr-sm-2 {
  width: 500px;
}
</style>