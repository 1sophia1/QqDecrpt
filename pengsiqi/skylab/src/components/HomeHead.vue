<template>
    <div class="container bottem">
                    <span class="box ifshow1"> </span>
                    <span> WELCOM </span>
                    <span class="blue">TO </span>
                    <span style="color: #fac830">JOIN </span>
                    <span>US</span>
                    <span class="long-box ifshow1"></span>
                    <span class="box ifshow1"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 1000px) {
  .ifshow1{
    display: none;
  }
}
@media (min-width: 1000px) {
  .ifshow1{
    display: inline-block;
  }
}
</style>
