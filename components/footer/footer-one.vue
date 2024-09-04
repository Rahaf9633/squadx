<template>
 <footer class="footer-style-one">
    <div class="footer__top-wrap">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-7">
            <div class="footer-widget">
              <div class="footer-logo logo">
                <nuxt-link to="/contact">
                  <img src="/images/logo/logo.png" alt="Logo" />
                </nuxt-link>
              </div>
              <div class="footer-text">
                <p class="desc"></p>
                <p class="social-title">Join For <span>FREE <i class="fas fa-angle-double-right"></i></span></p>
                <div class="footer-social">
                  <nuxt-link to="https://discord.gg/Szr3GBhjBD"><img src="/images/icons/social_icon01.png" alt="iocn"/></nuxt-link>
                  <nuxt-link to="https://twitter.com/squadxorg/"><img src="/images/icons/social_icon02.png" alt="iocn"/></nuxt-link>
                  <nuxt-link to="https://www.youtube.com/@SquadXorg/"><img src="/images/icons/social_icon03.png" alt="iocn"/></nuxt-link>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
            <div class="footer-widget widget_nav_menu">
              <h4 class="fw-title">quick link</h4>
              <ul class="list-wrap menu">
                <li><nuxt-link to="/">HOME</nuxt-link></li>
                <li><nuxt-link to="/shop-details">Ticket</nuxt-link></li>
                <li><nuxt-link to="/road-map-area">Roadmap</nuxt-link></li>
                <li><nuxt-link to="/terms">TERMS OF SERVICE</nuxt-link></li>
               </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
            <div class="footer-widget widget_nav_menu">
              <h4 class="fw-title">Supports</h4>
              <ul class="list-wrap menu">
                <li><nuxt-link to="/about">About us</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact us</nuxt-link></li>
                <li><nuxt-link to="/service-details">FAQ</nuxt-link></li>
                <li><nuxt-link to="/privacy">PRIVACY POLICY</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-7">
            <div class="footer-widget">
              <h4 class="fw-title">Newsletter</h4>
              <div class="footer-newsletter">
                <p></p>
                <form action="#" class="footer-newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit"><i class="flaticon-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright__wrap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="copyright__text">
              <p>Copyright © {{new Date().getFullYear()}} - All Rights Reserved By <span>SQUADX LTD</span></p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="copyright__card text-center text-md-end">
              <img src="/images/others/payment_card.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>
