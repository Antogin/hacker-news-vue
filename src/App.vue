<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style lang="scss">
// Set your brand colors
$vue-green: #3fb984;
$vue-black: #31475e;
$purple: #8A4D76;
$pink: #FA7C91; 
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $vue-green;

@import "../node_modules/bulma/sass/utilities/_all.sass";
@import "../node_modules/bulma/sass/base/_all.sass";
@import "../node_modules/bulma/sass/elements/_all.sass";
@import "../node_modules/bulma/sass/form/_all.sass";
@import "../node_modules/bulma/sass/components/_all.sass";
@import "../node_modules/bulma/sass/layout/_all.sass";
</style>

<script>
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";

export default {
  components: {
    Navbar: NavbarVue,
    Footer: FooterVue
  }
};
</script>
