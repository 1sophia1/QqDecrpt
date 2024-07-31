<template>
  <div id="app">
    <nav>
      <SkyHead></SkyHead>
      <HomeHead></HomeHead>
    </nav>
    <router-view></router-view>
    <SkyFooter></SkyFooter>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 40px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #bd88ee;
    }
  }
}
</style>
