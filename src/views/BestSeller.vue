<template>
  <div class="best_sellers">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <div class="section_title new_arrivals_title">
            <h2>Best Sellers</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="product_slider_container">
            <div class="owl-carousel owl-theme product_slider">
              <!-- Slide 2 -->

              <div class="owl-item product_slider_item">
                <div class="product-item women">
                  <div class="product">
                    <div class="product_image">
                      <img src="image/Black ancohol.jpeg" alt="" />
                    </div>
                    <div class="favorite"></div>
                    <div
                      class="
                        product_bubble product_bubble_left product_bubble_green
                        d-flex
                        flex-column
                        align-items-center
                      "
                    >
                      <span>new</span>
                    </div>
                    <div class="product_info">
                      <h6 class="product_name">
                        <a href="/#"
                          >Black ancohol</a
                        >
                      </h6>
                      <div class="product_price">₫365.000</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 4 -->

              <div class="owl-item product_slider_item">
                <div class="product-item accessories">
                  <div class="product">
                    <div class="product_image">
                      <img src="image/Brocade crossbody bag ver1.png" alt="" />
                    </div>
                    <div
                      class="
                        product_bubble product_bubble_right product_bubble_red
                        d-flex
                        flex-column
                        align-items-center
                      "
                    >
                      <span>sale</span>
                    </div>
                    <div class="favorite favorite_left"></div>
                    <div class="product_info">
                      <h6 class="product_name">
                        <a href="#"
                          >Brocade crossbody bag ver1</a
                        >
                      </h6>
                      <div class="product_price">₫169.000</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 5 -->

              <div class="owl-item product_slider_item">
                <div class="product-item women men">
                  <div class="product">
                    <div class="product_image">
                      <img src="/image/Dolphin pearl keychain .PNG" alt="" />
                    </div>
                    <div class="favorite"></div>
                    <div class="product_info">
                      <h6 class="product_name">
                        <a href="/#"
                          >Dolphin pearl keychain</a
                        >
                      </h6>
                      <div class="product_price">₫60.000</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 6 -->

              <div class="owl-item product_slider_item">
                <div class="product-item accessories">
                  <div class="product discount">
                    <div class="product_image">
                      <img src="image/seashell starfish keychain .PNG" alt="" />
                    </div>
                    <div class="favorite favorite_left"></div>
                    <div
                      class="
                        product_bubble product_bubble_right product_bubble_red
                        d-flex
                        flex-column
                        align-items-center
                      "
                    >
                      <span>-20%</span>
                    </div>
                    <div class="product_info">
                      <h6 class="product_name">
                        <a href="#"
                          >seashell starfish keychain</a
                        >
                      </h6>
                      <div class="product_price">
                        ₫315.000<span>₫590.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 8 -->

              <div class="owl-item product_slider_item">
                <div class="product-item accessories">
                  <div class="product">
                    <div class="product_image">
                      <img src="image/sea turtle pearl keychain.PNG" alt="" />
                    </div>
                    <div class="favorite"></div>
                    <div class="product_info">
                      <h6 class="product_name">
                        <a href="#"
                          >sea turtle pearl keychain</a
                        >
                      </h6>
                      <div class="product_price">₫34.000</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 9 -->

              <div class="owl-item product_slider_item">
                <div class="product-item men">
                  <div class="product">
                    <div class="product_image">
                      <img src="image/Brown bow hat ver1.PNG" alt="" />
                    </div>
                    <div
                      class="
                        product_bubble product_bubble_right product_bubble_red
                        d-flex
                        flex-column
                        align-items-center
                      "
                    >
                      <span>sale</span>
                    </div>
                    <div class="favorite favorite_left"></div>
                    <div class="product_info">
                      <h6 class="product_name">
                        <a href="#"
                          >Brown bow hat ver1</a
                        >
                      </h6>
                      <div class="product_price">₫159.000</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 10 -->

              <div class="owl-item product_slider_item">
                <div class="product-item men">
                  <div class="product">
                    <div class="product_image">
                      <img src="image/Clamshell silver bracelet.png" alt="" />
                    </div>
                    <div class="favorite"></div>
                    <div class="product_info">
                      <h6 class="product_name">
                        <a href="#"
                          >Clamshell silver bracelet</a
                        >
                      </h6>
                      <div class="product_price">₫514.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slider Navigation -->

            <div
              class="
                product_slider_nav_left product_slider_nav
                d-flex
                align-items-center
                justify-content-center
                flex-column
              "
            >
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div
              class="
                product_slider_nav_right product_slider_nav
                d-flex
                align-items-center
                justify-content-center
                flex-column
              "
            >
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Best",
  props:{
    product:{
      default:{}
    }
  },
};
</script>

<style>
</style>