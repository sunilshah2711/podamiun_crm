<script setup>
import Navbar from "@/components/Navbar.vue";
import EmailBuilder from "../components/EmailBuilder/EmailBuilder.vue";
</script>

<template>
  <Navbar />
  <div class="page-wrap">
    <EmailBuilder />
  </div>
</template>

<style scoped>
.page-wrap {
  display: block;
}
</style>
