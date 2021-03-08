<template>
  <nav class="navbar is-white topNav">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" @click="toggle" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
            width="28"
            height="28"
          />
          Hacker News
        </router-link>
        <div class="navbar-burger burger" @click="toggle" data-target="topNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="topNav" class="navbar-menu" :class="active ? 'is-active' : null">
        <div class="navbar-start">
          <router-link class="navbar-item" @click="toggle" to="/show"
            >Show</router-link
          >
          <router-link class="navbar-item" @click="toggle" to="/ask"
            >Ask</router-link
          >
          <router-link class="navbar-item" @click="toggle" to="/search">
            Search</router-link
          >
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-small is-info is-outlined">
                  <span>Code</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggle: function() {
      this.active = !this.active;
    }
  }
};
</script>
