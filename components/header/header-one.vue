<template>
  <header>
    <div id="sticky-header" :class="`tg-header__area transparent-header ${isSticky?'tg-sticky-menu':''} ${isStickyVisible?'sticky-menu__show':''}`">
      <div class="container custom-container">
        <div class="row">
          <div class="col-12">
            <div class="mobile-nav-toggler" 
             @click="handleOpenMobileOffCanvas('/audio/click.wav')">
              <i class="fas fa-bars"></i>
            </div>
            <div class="tgmenu__wrap">
              <nav class="tgmenu__nav">
                <div class="logo">
                  <nuxt-link to="/">
                    <img src="/images/logo/logo.png" alt="Logo" />
                  </nuxt-link>
                </div>
                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                  <ul class="navigation">
                    <template v-for="menu in menu_data" :key="menu.id">
                      <li 
                        v-if="menu.sub_menu"
                        :class="{'menu-item-has-children active': menu.sub_menu && menu.sub_menu.some(sub => route.path === sub.link) }"
                      >
                        <nuxt-link to="#">
                          {{ menu.title }}
                        </nuxt-link>
                        <ul v-if="menu.sub_menu" class="sub-menu">
                          <li v-for="(sub, i) in menu.sub_menu" :key="i" :class="{ active: route.path === sub.link }">
                            <nuxt-link :to="sub.link">{{ sub.title }}</nuxt-link>
                          </li>
                        </ul>
                      </li> 
                      <li v-else :class="{ active: route.path === menu.link }">
                        <nuxt-link :to="menu.link">
                          {{ menu.title }}
                        </nuxt-link>
                      </li>
                    </template>
                  </ul>
                
                </div>
                <div class="tgmenu__action d-none d-md-block">
                  <ul class="list-wrap">
                    <li class="search">
                      <a class="cursor-pointer" @click="handleOpenSearch('/audio/click.wav')">
                        <i class="flaticon-search-1"></i>
                      </a>
                    </li>
                    <li class="side-toggle-icon" @click="handleOpenOffCanvas('/audio/click.wav')">
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- header-search --> 
    <popup-search :isActive="isActive" @closeSearch="handleCloseSearch"></popup-search>
     <!-- header-search-end -->

    <!--  off canvas start -->
    <off-canvas :isOffCanvasOpen="isOffCanvasOpen" @closeOffcanvas="handleCloseOffCanvas" />
    <!--  off canvas end -->

    <!-- mobile off canvas start -->
    <mobile-offcanvas :isMobileOffCanvasOpen="isMobileOffCanvasOpen" @closeMobileOffcanvas="handleCloseMobileOffCanvas" />
    <!-- mobile off canvas end -->
  </header>
</template>

<script setup lang="ts">
import menu_data from '@/data/menu-data';
defineProps<{style_2?:boolean}>();
const {isSticky,isStickyVisible} = useSticky();
const route = useRoute();
const isActive = ref<boolean>(false);
const isOffCanvasOpen = ref<boolean>(false);
const isMobileOffCanvasOpen = ref<boolean>(false);

const handleOpenSearch = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isActive.value = !isActive.value;
};

const handleCloseSearch = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isActive.value = !isActive.value;
};
// off canvas
const handleOpenOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};

const handleCloseOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};
// mobile off canvas
const handleOpenMobileOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isMobileOffCanvasOpen.value = !isMobileOffCanvasOpen.value;
};

const handleCloseMobileOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isMobileOffCanvasOpen.value = !isMobileOffCanvasOpen.value;
};
</script>
