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
                  <span id="checkout_items" class="checkout_items">{{this.cartItemsCount}}</span>
                  <btn class="fa fa-shopping-cart" aria-hidden="true">
                    <!-- <div
                      style="
                        min-width: 350px;
                        box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
                        border-radius: 15px !important;
                      "
                    >
                      <div class="d-flex flex-column">
                        <div
                          class="col-12 px-1 mt-3"
                          style="max-height: 200px; overflow: auto"
                        >
                          <div v-if="this.cartItems.length > 0">
                            <div
                              v-for="(item, index) in this.cartItems"
                              :key="index"
                              class="
                                d-flex
                                flex-row
                                justify-content-between
                                my-3
                              "
                            >
                              <div class="col-3 px-0 text-center">
                                <img
                                  :src="item.image"
                                  alt="product Image"
                                  width="70%"
                                  height="50px"
                                  style="object-fit: cover; border-radius: 10px"
                                />
                              </div>
                              <div class="col-8 px-1 d-flex flex-column">
                                <div>
                                  <span
                                    style="font-size: 14px"
                                    class="text-muted"
                                  >
                                    {{ item.title }}
                                  </span>
                                </div>
                                <div>
                                  <span
                                    style="font-size: 15px"
                                    class="text-muted"
                                  >
                                    ${{ parseFloat(item.price).toFixed(2) }} X
                                    {{ item.quantity }}
                                  </span>
                                  <span class="" style="font-weight: 700">
                                    ${{ calcPrice(item) }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-1 px-1">
                                <span @click="deleteItem(item, index)">
                                  <img src="/assets/icon-delete.svg" alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div v-else>
                            <div
                              class="
                                row
                                justify-content-center
                                align-items-center
                              "
                              style="min-height: 200px"
                            >
                              <div class="col-12 text-center">
                                <span
                                  class="text-muted"
                                  style="font-weight: 700"
                                >
                                  Your cart is empty.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 my-3">
                          <button
                            class="p-3 text-white border-0 w-100 checkout-btn"
                            style="
                              background-color: hsl(26, 100%, 55%);
                              font-weight: 700;
                              font-size: 14px;
                              border-radius: 10px;
                            "
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
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

export default {
  name: "Header",
  
  data(){
    return{
      cartItems: [],
    }
  },

  props: {
    list_product: {
      type: Array,
    },
    itemsAdd: {
      default: []
    },
  },

  computed: {
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsAdd() {
      console.log(this.itemsAdd, 'item_add')
    }

  },
  watch:{
    itemsAdd() {
      console.log(this.itemsAdd, 'item_add')
    }
  },

  methods:{
    calcPrice(item){
      return parseFloat(parseFloat(item.price).toFixed(2) * item.quantity).toFixed(2);
    },
  },
};
</script>

<style>
.form-control mr-sm-2 {
  width: 500px;
}
</style>