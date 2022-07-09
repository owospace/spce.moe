<template>
    
    <Navigation />
    <router-view />
    <Footer />
    
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>

<style>
body {
  background-color: #323232;
}
</style>
