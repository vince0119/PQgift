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
                <a href="#" @click="changeCheckout">
                  <div>
                  <span class="fa fa-shopping-cart"></span>
                  <span id="checkout_items" class="checkout_items">{{ total }}</span>
                  </div>
                  <Modal v-if="this.check == true" :cartItems="this.cartItems"></Modal>
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
      check: false,
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
    changeCheckout() {
      this.check = !this.check;
    },
    showModal() {
      let element = this.$refs.Modal.$el;
      $(element).Modal("show");
    },
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
  },
};
</script>

<style scoped>
/* .form-control mr-sm-2 {
  width: 500px;
}
.box {
  width: 400px;
  height: auto;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1em 0.5em;
  position: absolute;
  left: -300px;
  top: 75px;
  z-index: 1;
} */
@import "../assets/bootstrap.min.css";
</style>