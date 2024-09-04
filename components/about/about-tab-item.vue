<template>
  <div
    :class="`tab-pane ${isActive ? 'show active' : ''}`"
    :id="`about${id}`"
    role="tabpanel"
    :aria-labelledby="`about${id}-tab`"
  >
    <div class="row justify-content-center">
      <div class="col-xl-5 col-lg-10">
        <div class="about__img">
          <img :src="img" alt="img" />
        </div>
      </div>
      <div class="col-xl-7 col-lg-10">
        <div class="about__flex-wrap">
          <div class="about__content-wrap">
            <div class="about__content">
              <h4 class="title">{{ title }}</h4>
              <span class=""> {{  }}</span>
              <P></P>
              <P>Responsibilities, Skills and Qualities:</P>
              <p>● Event Planning</p>
              <p>● Promotion</p>
              <p>● Community Engagement</p>
              <p>● Passion for Gaming</p>
              <p>● Organizational Skills</p>
              <p>● Communication</p>
              <p>● Leadership</p>
              <p>● Adaptability</p>
              
            </div>
            <div class="about__content-list">
              <ul class="list-wrap">
                <li>
                  <img src="/images/icons/features_icon01.png" alt="img" /> Managers
                </li>
                <li>
                  <img src="/images/icons/features_icon02.png" alt="img" /> CFO/CEO
                </li>
                <li>
                  <img src="/images/icons/features_icon03.png" alt="img" /> Pubg & Discord 
                </li>
              </ul>
            </div>
          </div>
          <div class="about__btn-wrap">
            <ul class="list-wrap">
              <li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['id', 'img', 'title', 'rate', 'isActive']);
</script>
