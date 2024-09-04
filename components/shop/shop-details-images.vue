<template>
 <div class="shop__details-images-wrap">
     
          
 
      <div class="tab-content" id="imageTabContent">
          <div v-for="(item,index) in active_images" :key="item.id" :class="`tab-pane ${item.id === 'one'?'show active':''}`" :id="item.id" role="tabpanel" :aria-labelledby="`${item.id}-tab`">
              <a class="popup-image cursor-pointer" @click.prevent="handleShowImage(index)">
                <img :src="item.img" alt="img" />
              </a>
          </div>
      </div>
  </div>

  <!-- image lightbox start -->
  <popup-image-lightbox :images="active_images.map(p => p.img)" :indexVal="index" :visible="visible" @handleHide="handleHide"></popup-image-lightbox>
  <!-- image lightbox end -->
</template>

<script setup lang="ts">
const active_images = [
    {id:'one',img:'/images/products/shop_details01.jpg'},
    {id:'two',img:'/images/products/shop_details02.jpg'},
    {id:'three',img:'/images/products/shop_details03.jpg'}
]

// image popup
const visible = ref(false);
const index = ref(0);
function handleHide() {
  visible.value = false;
}
const handleShowImage = (indexNum: number) => {
  index.value = indexNum;
  visible.value = true;
};
</script>