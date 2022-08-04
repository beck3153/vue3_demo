<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg border-bottom navbar-light bg-light bg-opacity-75">
    <div class="container-fluid">
      <router-link to="/" class="nav-link">
        <img src="../assets/images/logo_web.png"
         alt="首頁" width=""
         class="logo d-inline-block align-text-top"/>
      </router-link>
      <button class="navbar-toggler" type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">LIMI WoodWork</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link">NEWS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/cart" class="nav-link">Wooden</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.$router.push('/login');
          }
        });
    },
  },
};
</script>
