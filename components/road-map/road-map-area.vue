<template>
  <section
    class="roadMap__area roadMap-bg section-pt-150 section-pb-150"
    style="background-image: url(/images/bg/roadmap_bg.jpg)">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="roadMap__inner">
            <div class="row">
              <div class="col-xl-5 col-lg-6">
                <div class="roadMap__content">
                  <h2 class="title">RoadMap</h2>
                  <p>
                    From the spark of an idea to the final applause.
                  </p>
                  <nuxt-link to="https://discord.gg/Szr3GBhjBD" class="tg-btn-1 -btn-yellow">
                    <span><svg xmlns="http://www.w3.org/2000/svg" x="1px" y="1px" width="39" height="39" viewBox="0 0 48 48">
<radialGradient id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1" cx="5" cy="1" r="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8c9eff"></stop><stop offset=".368" stop-color="#889af8"></stop><stop offset=".889" stop-color="#7e8fe6"></stop><stop offset="1" stop-color="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse></svg></span>
                  </nuxt-link>
                </div>
                <div class="roadMap__img">
                  <img
                    src="/images/others/roadmap.png"
                    class="tg-parallax"
                    data-scale="1.5"
                    data-orientation="down"
                    alt="roadMap__img"
                  />
                </div>
              </div>
              <div class="col-xl-7 col-lg-6">
                <div class="roadMap__steps-wrap" ref="roadMap_target">
                  <div
                    v-for="item in road_map_lists"
                    :key="item.id"
                    :class="`roadMap__steps-item ${item.active ? 'active' : ''}`"
                  >
                    <h3 class="title">{{item.title}}</h3>
                    <ul class="roadMap__list list-wrap">
                      <li
                        v-for="(l, i) in item.lists"
                        :key="i"
                        :class="`${l.active ? 'active' : ''} tg__animate-text style2`"
                      >
                        {{ l.text }}
                      </li>
                    </ul>
                    <img
                      src="/images/others/roadmap_img.png"
                      alt="img"
                      class="roadMap__steps-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const roadMapTarget = ref<HTMLElement | null>(null);
// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "Q1 Launchpad",
    lists: [
      { active: true, text: "Making Website" },
      { active: true, text: "Social Media" },
      { active: true, text: "Ticket " },
      { active: true, text: "Testing " },
    ],
  },
  {
    id: 2,
    active: false,
    title: "Q2 PArk",
    lists: [
      { active: true, text: "Discord Community Building" },
      { active: true, text: "Twitter Community Building" },
      { active: false, text: "Team and Ambassadors" },
      { active: false, text: "Match Preparation" },
    ],
  },
  {
    id: 3,
    active: false,
    title: "Q3 WorkShop",
    lists: [
      { active: false, text: "Store" },
      { active: false, text: "UC" },
      { active: false, text: "NFT" },
      { active: false, text: "Token" },
    ],
  },
];
import { useIntersectionObserver } from '@vueuse/core'

const roadMap_target = ref(null);
const roadMapAnimView = ref(false);

const { stop } = useIntersectionObserver(
  roadMap_target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      roadMapAnimView.value = isIntersecting;
    }
  },
)

  watch(roadMapAnimView, (newValue) => {
    if (newValue) {
      useTextAnimation()
    }
  })
</script>
