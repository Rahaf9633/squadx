<template>
  <section class="shop-area shop-details-area">
      <div class="container">
          <div class="row">
              <!-- shop details images -->
              <shop-details-images/>
              <!-- shop details images -->
              <div class="shop__details-content">
                  <div class="shop__details-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span class="rating-count"></span>
                  </div>
                  <h2 class="title">PUBG MOBILE TICKET</h2>
                  <div class="shop__details-price">
                      <span class="amount">${{product.price.toFixed(2)}}</span>
                  </div>
                  <div class="shop__details-short-description">
                      <p>{{product.description}}</p>
                  </div>
                  <div class="shop__details-model d-flex align-items-center">
                      
                      <ul class="list-wrap d-flex align-items-center">
                          <li @click="model = 'Gat'" :class="model=== 'Gat'?'active':''">
                            SOLO
                          </li>
                          <li @click="model = 'dat4'" :class="model=== 'dat4'?'active':''">
                            SQUAD
                          </li>
                      </ul>
                  </div>
                  <div class="shop__details-qty">
                      <div class="cart-plus-minus d-flex flex-wrap align-items-center">
                          <nuxt-link href="https://donate.stripe.com/dR6g1AgmM0axenmaEH" class="tg-btn-1">
                                    <span>Buy Ticket Now</span>
                                 </nuxt-link>
                      </div>
                  </div>
                  
                  <div class="shop__details-bottom">
                      <div class="posted_in">
                      </div>
                      <div class="tagged_as">
                          <b></b>
                          <nuxt-link to="/">PUBG MOBILE,</nuxt-link>
                          <nuxt-link to="/">SQUADX CLUB,</nuxt-link>
                          <nuxt-link to="/">GAMING</nuxt-link>
                        
                          <nuxt-link to="https://twitter.com/squadxorg/"><i class="fab fa-twitter"></i></nuxt-link>
                         
                          <nuxt-link to="https://discord.gg/Szr3GBhjBD"><i class="fab fa-discord"></i></nuxt-link>
                          <nuxt-link to="https://www.youtube.com/@SquadXorg/"><i class="fab fa-youtube"></i></nuxt-link>
                          
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-12">
                  <div class="product__desc-wrap">
                      <ul class="nav nav-tabs" id="descriptionTab" role="tablist">
                         
                          <li class="nav-item" role="presentation">
                              <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true" :tabindex="-1">Discord INFO</button>
                          </li>
                      </ul>
                      <div class="tab-content" id="descriptionTabContent">
                          <div class="tab-pane animation-none fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                          </div>
                          <div class="tab-pane animation-none fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                              <table class="table table-sm">
                                  <tbody>
                                      <tr>
                                          <th scope="row">🚪︱Room</th>
                                          <td>Check the Room Details</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">🎫︱Ticket</th>
                                          <td>Reserve your seat</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">🩸︱Live</th>
                                          <td>Watch the game going live</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">🥇︱Mt9dr</th>
                                          <td>Win and check the leaderboard</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">📞︱D3m-support</th>
                                          <td>Connect directly to the Managers</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/product-type";

defineProps<{product:IProduct}>();
const model = ref<string>('Gat');
const incValue = ref<number>(1);

//hanle increment 
const handleIncrement = (value:string) => {
    if(value === 'inc'){
      incValue.value += 1
    }
    else {
        if(incValue.value > 1){
          incValue.value -= 1
        }
    }
}
</script>
