<template>
  <div>
    <!-- Header -->
    <Header :cart="this.cart"></Header>

    <!-- New Arrivals -->
    <div class="new_arrivals">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="section_title new_arrivals_title">
              <h2>New Arrivals</h2>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col text-center">
            <div class="new_arrivals_sorting">
              <ul
                class="
                  arrivals_grid_sorting
                  clearfix
                  button-group
                  filters-button-group
                "
              >
                <li
                  class="
                    grid_sorting_button
                    button
                    d-flex
                    flex-row
                    justify-content-center
                    align-items-center
                    active
                    is-checked
                  "
                  v-for="(key, idx) in list" :key="idx"
                  v-bind:data-filter="'.' + key"
                >
                  {{key}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div
              class="product-grid"
              data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows"}'
            >
              <!-- Product -->
                <Item
                  v-for="(item, id) in products"
                  :key="id"
                  :item="item"
                  @add-shop-cart="addProductToCart"
                ></Item>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Pagination class="pagination" :totalPage="this.totalPage" @update-page="updatePage" :pageOfItems="this.pageOfItems"></Pagination> -->
    <!-- Deal of the week -->
    <deal-week></deal-week>
    <!-- Best Seller -->
    <best-seller :product="this.product"></best-seller>
    <!-- Benefit -->
    <benefit></benefit>
    <!-- Newsletter -->
    <newsletter></newsletter>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/views/Header";
import Footer from "@/views/Footer";
import Item from "@/views/Item";
import Benefit from "@/views/Benefit";
import Newsletter from "@/views/Newsletter";
import BestSeller from "@/views/BestSeller";
import DealWeek from "@/views/DealWeek";
import Pagination from "@/views/Pagination";
import axios from "axios";

export default {
  name: "Home",

  components: {
    Header,
    Footer,
    Item,
    Benefit,
    Newsletter,
    BestSeller,
    DealWeek,
    Pagination,
  },

  data() {
    return {
      check: false,
      products: [],
      cart: [],
      list: [],
    };
  },

  created() {
    axios
      .get(`https://qtpq.azurewebsites.net/api/menu/getMenus`)
      .then((response) => {
        this.products = response.data.data; // 1 array
        this.products.forEach((item) => {
          this.cart.push(item)
          this.list.push(item.menuName);
        });
      })
      .catch((error) => console.log(error));
  },
mounted(){
    console.log(this.cart,'cart')
  },
  methods: {
    addProductToCart(item) {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if (existingEntries == null) existingEntries = [];

      localStorage.setItem("latestItem", JSON.stringify(item));

      existingEntries.push(item);
      localStorage.setItem("myCart", JSON.stringify(existingEntries));
      this.cart = JSON.parse(localStorage.getItem("myCart"));
    },
  },

};
</script>

<style scoped>
/* .pagination{
  padding-left: 930px !important;
} */
.product-grid{
  display: flex;
  position: relative !important;
  height: 500px !important;
}
</style>

