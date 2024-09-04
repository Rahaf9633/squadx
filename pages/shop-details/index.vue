<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-three
      title=" Ticket DETAILS"
      subtitle="TICKETs"
    ></breadcrumb-three>
    <!-- breadcrumb area end -->

    <!-- shop details area start -->
    <shop-details-area :product="product"></shop-details-area>
    <!-- shop details area end -->
  </div>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";

useSeoMeta({ title: "Ticket Details" });
const product = [...product_data][0];
</script>
