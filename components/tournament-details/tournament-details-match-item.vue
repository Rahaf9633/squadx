<template>
  <div class="trending__matches-item">
    <div class="trending__matches-thumb">
      <nuxt-link to="#">
        <img :src="item.thumb" alt="img" />
      </nuxt-link>
    </div>
    <div class="trending__matches-content">
      <div class="info">
        <h5 class="title">
          <nuxt-link to="#">{{item.team_name}}</nuxt-link>
        </h5>
        <span class="price">$ {{item.box_price}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{item: {
    thumb: string;
    team_name: string;
    box_price: number;
    video_id:string;
  }}>();
const {playVideo} = useVideoPopup();
</script>

