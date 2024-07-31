<!-- eslint-disable no-undef -->
<template>
  <div class="about">
    <img src="@/assets/other/bigmember.png" alt="" class="about-img">
    <ALotOfCard1></ALotOfCard1>
    <ALotOfCard2></ALotOfCard2>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 576px) {
.about-img{
  width: 50%;
}
}
@media only screen and (max-width: 992px) and (min-width: 576px) {
.about-img{
  width: 25%;
}
}
@media (min-width: 992px) {
.about-img{
  width: 15%;
}
}

</style>
