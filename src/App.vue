<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/login">Login</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
body {
  background-color: rgb(28, 25, 30);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b3b3b3;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #b3b3b3;
}

nav a.router-link-exact-active {
  color: #42b983;
}

div.about, div.home{
  padding: 30px;
}
</style>
