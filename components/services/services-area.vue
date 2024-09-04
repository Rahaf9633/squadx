<template>
  <section class="services-area services__bg-color section-pt-120 section-pb-120">
    <div class="container">
        <div class="row align-items-end align-items-xl-start">
            <div class="col-lg-6">
                <div class="section__title text-start mb-65">
                    <span class="sub-title tg__animate-text">Our Mission</span>
                    <h3 class="title">one epic match at a time</h3>
                </div>
                <div class="services__wrapper">
                    <div v-for="(item,i) in service_items" :key="i" class="services__item" @mouseenter="handleMouseOver(i)" @mouseout="handleMouseOver(i)">
                        <div class="services__icon">
                            <i :class="item.icon"></i>
                        </div>
                        <div class="services__content">
                            <h4 class="title">
                              <nuxt-link to="">{{item.title}}</nuxt-link>
                            </h4>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="services__images">
                    <div v-for="(s,i) in service_images" :key="i" :class="`services__images-item ${activeIndex === i ? 'active' : ''}`">
                        <img :src="s" alt="img" />
                        <nuxt-link to="" class="services__link">
                            <i class="flaticon-next"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
let activeIndex = ref<number | null>(0);
  const handleMouseOver = (index: number) => {
    activeIndex.value = index;
  };

  const handleMouseOut = (index: number) => {
    activeIndex.value = index;
  };
// service images
const service_images = [
  '/images/others/services_img01.jpg',
  '/images/others/services_img02.jpg',
  '/images/others/services_img03.jpg',
  '/images/others/services_img04.jpg'
];
const service_items:{
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id:1,
    icon:'flaticon-diamond',
    title:'Building a Strong Community',
    desc:'Our active Discord server and engaging events bring together players from across the Arab world.'
  },
  {
    id:2,
    icon:'flaticon-user-profile',
    title:'Supporting Player Growth',
    desc:'We believe in nurturing talent and helping players improve themselves.'
  },
  {
    id:3,
    icon:'flaticon-ethereum',
    title:'Prizes and Rewards',
    desc:'Cash Prizes, VIP Perks, Roles, Badges, Nitro, Exclusive In-Game Items and Much More.'
  },
  {
    id:4,
    icon:'flaticon-settings-1',
    title:'Elevating Competitive',
    desc:'We strive to host the most thrilling and professional PUBG Mobile tournaments.'
  }
];
</script>
