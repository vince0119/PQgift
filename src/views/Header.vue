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
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <a href="#"> <i class="fa fa-search"></i></a>
               
              </form>
              </li>
              <li>
                <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
              </li>
              <li class="checkout">
                <router-link to="/single">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span id="checkout_items" class="checkout_items">{{cartQuantity}}</span>
                </router-link>
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
    name: "Header"
}
</script>

<style>
.form-control mr-sm-2{
  width: 500px;
}
</style>