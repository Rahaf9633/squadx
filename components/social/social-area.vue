<template>
 <section class="social__area social-bg" style="background-image: url(/images/bg/social_bg.png);">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10">
                <div class="section__title text-center mb-60">
                    <text-animation title='connect with us'/>
                    <h3 class="title">stay connected</h3>
                </div>
            </div>
        </div>
        <div class="row justify-content-center gutter-20 row-cols-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-3">
            <div v-for="(s,i) in social_data" :key="i" class="col">
                <div class="social__item">
                    <nuxt-link :to="s.link" target='_blank'>
                        <i :class="s.icon"></i>
                        <span>{{s.title}}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5">
                          <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)" />
                        </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">

// social item 
const social_data:{
    id: number;
    link: string;
    icon: string;
    title: string;
}[] = [
    {
        id:2,
        link:'https://twitter.com/squadxorg/',
        icon:'flaticon-twitter',
        title:'twitter'
    },
    {
        id:4,
        link:'https://www.youtube.com/@SquadXorg/',
        icon:'flaticon-youtube',
        title:'youtube'
    },
    {
        id:5,
        link:'https://discord.gg/Szr3GBhjBD',
        icon:'flaticon-discord',
        title:'discord'
    },
  
]

</script>
