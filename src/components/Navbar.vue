<template>
  <nav class="navbar is-white topNav">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          <!-- <img src="" width="112" height="28"> -->
        </a>
        <div class="navbar-burger burger" data-target="topNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="topNav" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/"> New </router-link>
          <router-link class="navbar-item" to="/search"> Search</router-link>
          <router-link class="navbar-item" to="/ask">Ask</router-link>
          <router-link class="navbar-item" to="/show">Show</router-link>
          <router-link class="navbar-item" to="/jobs">Jobs</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-small">
                  <span> Register </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-small is-info is-outlined">
                  <span>Login</span>
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
export default {};
</script>
