<template>
  <b-dropdown
    size="xl" variant="link" toggle-class="text-decoration-none" no-caret right
    style="position: absolute;
    top: 100%;
    right: -30px;
    z-index: 99;"
  >
    <div
      style="
        min-width: 350px;
        box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px !important;
        background: white;
      "
    >
      <div class="d-flex flex-column">
        <div class="col-12 p-3 border-bottom" 
        style="border-bottom: 1px solid #dee2e6!important;
    text-align: left">
          <span style="font-weight: 700"> Cart </span>
        </div>
        <div class="col-12 px-1 mt-3" style="max-height: 200px; overflow: auto">
          <div v-if="cartItems && cartItems.length > 0">
            <div
              v-for="(item, index) in cartItems"
              :key="index"
              class="d-flex flex-row justify-content-between my-3"
            >
              <div class="col-8 px-1 d-flex flex-column">
                <div>
                  <span style="font-size: 14px; position: relative; right: 15px" class="text-muted">
                    {{ item.name }}
                  </span>
                </div>
                <div>
                  <span style="font-size: 15px; position: relative; left: 130px; top: -25px;" class="text-muted">
                    {{ item.price }}
                  </span>
                </div>
                <div class="col-1 px-1" style="position: relative; left: 290px; top: -51px;">
                <span @click="this.deleteItem(item, index)">
                  <img src="image/icon-delete.svg" alt="" />
                </span>
              </div>
              </div>
              
            </div>
          </div>
          <div v-else>
            <div
              class="row justify-content-center align-items-center"
              style="min-height: 200px"
            >
              <div class="col-12 text-center">
                <span class="text-muted" style="font-weight: 700">
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
    </div>
  </b-dropdown>
</template>

<script>
export default {
  name: "Modal",

  props: {
    cartItems: Array,
  },

  methods: {
    hasProduct() {
      if (this.cartItems == null) {
        return 0;
      }
      return this.cartItems.length;
    },
    deleteItem(item, index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('myCart', JSON.stringify(this.cartItems));
    },
  },

};
</script>

<style scoped>
.image {
  border-radius: 10px;
}

@media (max-width: 768px) {
  .image {
    border-radius: 0px !important;
  }
}

.discount {
  /* border-radius: 10px; */
  background-color: hsl(25, 100%, 94%);
}

.bg-quantity {
  background-color: #f1f1f1;
  border-radius: 10px;
  font-size: 16px;
  padding: 14px;
}

.bg-add-cart {
  background-color: hsl(26, 100%, 55%);
  color: white !important;
  border-radius: 10px;
  font-size: 15px;
  padding: 14px;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0px 23px 19px 10px hsl(25, 100%, 94%);
}

.bg-add-cart:hover {
  background-color: hsl(24, 91%, 86%);
}

.plus-minus {
  color: hsl(26, 100%, 55%);
  cursor: pointer;
}

.thumbnail img {
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
}

.thumbnail:hover img {
  /* background-color: #d2d2d2 !important;  */
  opacity: 0.3 !important;
}

.activess {
  opacity: 0.4 !important;
  border: 3px solid hsl(26, 100%, 55%) !important;
}

i {
  transition: 0.3s;
}

i:hover {
  color: hsl(24, 91%, 86%);
}

/* navbar */
.avatar:hover {
  border: 2px solid hsl(26, 100%, 55%) !important;
}

.category {
  transition: 0.1s;
}

.category:hover {
  border-bottom: 3px solid hsl(26, 100%, 55%);
}

.category:hover .text {
  color: black !important;
}

.checkout-btn {
  transition: 0.3s;
}

.checkout-btn:hover {
  background-color: hsl(24, 91%, 86%) !important;
}

.cart-count {
  position: absolute;
  top: 3px;
  left: 22px;
  padding: 0px 7px;
  font-size: 9px;
  background-color: hsl(26, 100%, 55%);
  color: white;
  border-radius: 5px;
}
</style>
<style>
.dropdown-menu.dropdown-menu-right.show {
  padding: 0px !important;
  border: 0px !important;
}

.appbar-mobile .dropdown-menu.show {
  position: absolute;
  left: -220px;
  border: none;
  padding: 0px;
  border-radius: 15px;
}

.modal-content {
  background-color: transparent !important;
  border: none !important;
}

.modal-header {
  border: none !important;
}

.modal-header .close {
  opacity: 1 !important;
}

.carousel-control-prev {
  opacity: 1 !important;
  align-items: center !important;
  position: absolute;
  left: 0px !important;
}

.carousel-control-next {
  opacity: 1 !important;
  align-items: center !important;
  position: absolute;
  right: 0px !important;
}

.carousel-control-prev-icon {
  width: 30px !important;
  height: 30px !important;
}

.carousel-control-next-icon {
  width: 30px !important;
  height: 30px !important;
}

.navbar-toggler.collapsed {
  border: none;
  padding: 0px;
}

@media (max-width: 768px) {
  .carousel-item .img-fluid {
    border-radius: 0px !important;
  }
}
.carousel-item .img-fluid {
  border-radius: 30px;
}
</style>