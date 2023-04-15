<template>
  <header>
    <nav>
      <ul></ul>
      <ul>
        <li><router-link to="/">Home</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <ul></ul>
    </nav>
  </header>
  <main class="container"><router-view /></main>
  <footer class="container">© nearOrbit.app 2023</footer>
</template>

<style>
main, footer {
  text-align: center;
}
</style>