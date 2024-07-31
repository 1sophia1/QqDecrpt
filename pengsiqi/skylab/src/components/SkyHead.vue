<template>
  <div>
    <nav class="a1 navbar navbar-expand-md bg-dark navbar-dark fixed-top con">
      <div class="container">
      <!-- Brand -->
      <p class="text1">
        <span class="orange">Sk</span>
        <span class="blue">y</span>
        <span class="blue">L</span>
        <span>ab</span>
        <span class="long-box1"></span>
      </p>
      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon magin1"></span>
      </button>
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home">主页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">成员</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/honor">荣誉</router-link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SkyHead'
}
</script>

<style>
.magin1{
  margin-top: 0px !important;
}
@media (max-width: 768px) {
  .text1{
    font-family: 'Microsoft YaHei';
    font-size: 30px;
    font-weight: 700;
    margin-top: 20px;
  }
}
@media (min-width: 768px) {
  .text1{
    font-family: 'Microsoft YaHei';
    font-size: 48px;
    font-weight: 700;
    margin-top: 20px;
  }
}
</style>
