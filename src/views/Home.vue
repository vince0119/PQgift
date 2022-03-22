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
            <!-- <div class="new_arrivals_sorting">
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
                    flex-column
                    justify-content-center
                    align-items-center
                    active
                    is-checked
                  "
                  data-filter="*"
                >
                  all
                </li>
                <li
                  class="
                    grid_sorting_button
                    button
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                  data-filter=".Fasionable"
                >
                  Fashionable bag
                </li>
                <li
                  class="
                    grid_sorting_button
                    button
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                  data-filter=".Hat"
                >
                  Hat
                </li>
                <li
                  class="
                    grid_sorting_button
                    button
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                  data-filter=".Jewels"
                >
                  Jewels
                </li>
                <li
                  class="
                    grid_sorting_button
                    button
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                  data-filter=".Keychain"
                >
                  Keychain
                </li>
                <li
                  class="
                    grid_sorting_button
                    button
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                  data-filter=".Specialties"
                >
                  Specialties
                </li>
              </ul>
            </div> -->
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div
              class="product-grid"
              data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows"}'
            >
              <!-- Product -->
              <div class="d-flex flex-row">
                <Item v-for="(item, id) in products" :key="id" :item="item"  @add-shop-cart="addProductToCart"></Item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination class="pagination" :totalPage="this.totalPage" @update-page="updatePage" :pageOfItems="this.pageOfItems"></Pagination>
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
import DealWeek from '@/views/DealWeek';
import Pagination from '@/views/Pagination';
import axios from 'axios';

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
    Pagination
  },

  data() {
    return {
      products: [],
      categories: [],
      cart: [],
      pageOfItems: 1,
      totalPage: 1,
    };
  },
  watch: {
    pageOfItems() {
      axios
      .get(`https://qtpq.azurewebsites.net/api/product/getList?pageNum=${this.pageOfItems}&pageSize=${5}`)
      .then(response => {
        this.products = response.data.data.content // 1 array
        
    })
    .catch(error => console.log(error))
    },
  },
  created() {
    axios
    .get(`https://qtpq.azurewebsites.net/api/product/getList?pageNum=${this.pageOfItems}&pageSize=${5}`)
    .then(response => {
      this.products = response.data.data.content // 1 array
      this.totalPage = response.data.data.totalPages
      this.products.forEach((cate) => {
        cate.categories.categoryName
        cate.description
        cate.id
        cate.imgLink
        cate.products
        cate.quanlity
        cate.unitPrice
        this.categories.push(cate.categories)
      },
      console.log(this.products, '123'));
      
    })
    .catch(error => console.log(error))
  },

  methods: {
      addProductToCart(item) {
        var existingEntries = JSON.parse(localStorage.getItem("myCart"));
        if(existingEntries == null) existingEntries = [];
      
        localStorage.setItem("latestItem", JSON.stringify(item));
        
        // Save allEntries back to local storage
        existingEntries.push(item);
        localStorage.setItem("myCart", JSON.stringify(existingEntries));
        this.cart = JSON.parse(localStorage.getItem('myCart'));
        // this.cartItems = JSON.parse(localStorage.getItem('myCart')); lay gia tri
      },
      updatePage(page) {
        this.pageOfItems = page
      }
      
    },
};
</script>

<style scoped>
.pagination{
  padding-left: 930px !important;
}
.product-grid{
  position: relative !important;
  height: 500px !important;
}
@import "../assets/main_styles.css";
</style>

