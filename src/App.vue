<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style lang="scss">
@import "../node_modules/bulma/bulma";
</style>

<script>
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";

export default {
  components: {
    Navbar: NavbarVue,
    Footer: FooterVue,
  },
};
</script>