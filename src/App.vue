<template>
  <div id="app">
    <router-link to="/">Home</router-link> <!--Just to see all the page links at the moment-->
    <router-link to="/browse">Browse</router-link> <!--Later we can remove links-->
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
