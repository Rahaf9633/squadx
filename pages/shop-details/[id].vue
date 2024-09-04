<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-three
      title="TOURNAMENT DETAILS"
      subtitle="TOURNAMENT DETAILS"
    ></breadcrumb-three>
    <!-- breadcrumb area end -->

    <!-- shop details area start -->
    <shop-details-area :product="product"></shop-details-area>
    <!-- shop details area end -->
  </div>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";

useSeoMeta({ title: "TOURNAMENT DETAILS" });
const route = useRoute();
const product = [...product_data].find(p => Number(p.id) === Number(route.params.id))!;
</script>
