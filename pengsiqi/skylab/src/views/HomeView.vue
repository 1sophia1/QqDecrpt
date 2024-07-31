<script>
export default {
  name: 'HomeView',
  data () {
    return {
      currentYear
    }
  }
}
const currentYear = new Date().getFullYear() - 2004
</script>
<template>
  <div class="Totop container">
    <div class="row">
      <div class="col-md-8 p-3 center1">
          <div class="width08 moveup move-card">
          <div class="littel-star star-0-ud">
            <img src="@/assets/decoration/A4.png" alt="" title="" style="">
          </div>
          <h1 class="vw-1">这是我们的工作室</h1>
          <p class="vw-2">
            具有 {{currentYear}} 年历史，拥有丰富、完善的培养机制，专业老师带领，对学生进行阶梯式培养让人欲罢不能的自学模式，颠覆你的想象。
          </p>
          <p class="vw-2">
            这里卧虎藏龙，充满着青春和自律的的味道。独立的学习空间，让你的学习更有效率，工作室拥有千兆宽带，晚自习在工作室进行，可以使用电脑，学习更广泛。
          </p>
          </div>
      </div>
      <div class="col-md-4 p-3 ifshow">
        <div class="littel-star-right">
          <img src="@/assets/other/gzs.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="Totop container">
      <div class="row">
        <div class="col-md-8 p-4">
          <div class="row">
            <div class="col-md-4 col-6  ">
              <div class="h5-spin img1">
                <img src="@/assets/other/h5.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6 ">
              <div class="css-spin img1">
                <img src="@/assets/other/css.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6  ">
              <div class="js-spin img1">
                <img src="@/assets/other/javascript.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6 ">
              <div class="vue-spin img1">
                <img src="@/assets/other/vue.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6  ">
              <div class="react-roll img1">
                <img src="@/assets/other/react.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6 ">
              <div class="webpack-roll img1">
                <img src="@/assets/other/webpack.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="move-2 col-md-4 p-4 width08 moveup move-card">
          <div class="rerere">
            <img
              src="@/assets/decoration/A4.png"
              alt=""
              class="star-0 star-0-ud" />
          </div>
          <h1 class="vw-1">在这里你能学到什么?</h1>
          <h1 class="vw-1">① 前端:</h1>
              <p class="vw-2">
                你正在访问的网站。内容设计、图像、段落和线条之间的间距，左上角的公司徽标，以及右下角的小通知按钮——所有这一切都是前端。
              </p>
              <p class="vw-2">
                Html5，Css3，JavaScript，Bootstrap，Angular，Vue，jQuery，React.js 是用于前端开发的一些工具和技术。
                前端开发人员构建所有的这些。它们创造了你在屏幕上看到的外观和触摸到的体验。
              </p>
        </div>
      </div>
    </div>

    <div class="Totop container">
      <div class="row">
        <div class="move-2 col-md-4 p-4 width08 moveup move-card">
          <h1 class="vw-1">② 后端</h1>
              <p class="vw-2">
                后端负责处理用户数据和业务逻辑，包括服务器架设、操作数据库、在高并发场景中保证服务性能、保证服务安全性、集群管理等。
              </p>
              <p class="vw-2">
                需要开发者至少掌握一种高级语言，并掌握Linux、MySQL、Redis、Kafka、Nginx等技术的使用方法和底层原理。
                看不到但又被用来为前端提供支持的东西就是后端。
              </p>
        </div>
        <div class="col-md-8 p-4">
          <div class="row">
            <div class="col-md-4 col-6  ">
              <div class="img1 img2">
                <img src="@/assets/other/c.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6 ">
              <div class="img1 img2">
                <img src="@/assets/other/java.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6  ">
              <div class="img1 img2">
                <img src="@/assets/other/go-zero.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6 ">
              <div class="img1 img2">
                <img src="@/assets/other/python.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6  ">
              <div class="img1 img2">
                <img src="@/assets/other/centos.png" alt="" />
              </div>
            </div>
            <div class="col-md-4 col-6 ">
              <div class="img1 img2">
                <img src="@/assets/other/nginx.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="Totop container">
      <div class="row">
        <div class="col-md-8 p-4 ui-img">
          <div class="Ui-img">
            <img src="@/assets/decoration/gz.png" alt="" />
          </div>
        </div>
        <div class="move-2 col-md-4 p-4 width08 moveup move-card">
          <h1 class="vw-1">③ UI设计</h1>
              <p class="vw-2">
                我们身边的诸多事务都离不开UI，无论是我们浏览的APP、网站，还是现实生活中看到的广告海报，又或是游戏中的人物形象，形形色色的Logo。
              </p>
              <p class="vw-2">
                UI设计，即用户界面。负责使用户与产品间有机、高效地结合。好的UI设计不仅是让软件变得有个性有品位，还要让软件的操作变得舒适简单、自由。充分体现软件的定位和特点
              </p>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
@media (max-width: 768px) {
  .vw-1{
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
  }
  .vw-2{
    font-size: 15px;
    line-height: 26px;
    text-indent: 1.5em;
    text-align: left;
  }
  .ifshow{
    display: none;
  }
  .move-2{
    margin-top: 50px !important;
  }
}
@media (min-width: 768px) {
  .vw-1{
    padding: 15px;
    font-size: 36px;
    font-weight: 700;
  }
  .vw-2{
    font-size: 22px;
    line-height: 40px;
    text-indent: 2em;
    text-align: left;
  }
  .ifshow{
    display: block;
  }
}
.img2 {
  transition: transform 0.5s;
}
.Ui-img{
  float: left;
  width: 100%;
  height: 100%;
}
.Ui-img img{
  width: 100%;
  height: auto;
}
.img2:hover {
  transform: scale(1.2); /* 鼠标悬停时放大20% */
}
.rerere{
  float: right;
  width: 40%;
  aspect-ratio: 1 / 1;
}
.star-0 {
  width: 100%;
  height: auto;
  transform: rotateZ(270deg);
}
.img1{
  aspect-ratio: 1 / 1;
}
.img1 img{
  width: 100%;
  height: auto;
}
.center1{
  text-align: center;
}
.width08{
  display: inline-block;
  width: 90%;
    box-shadow: 1px 1px 10px #bababa;
  border-radius: 40px;
    transition: all .3s;
    background-color:#fff;
    padding: 15px;
}
.Totop{
  margin-top: 4vw;
}

.littel-star-right{
  box-shadow: 1px 1px 10px #bababa;
  width: 87%;
  aspect-ratio: 1 / 1;
  position: relative;
    border-radius: 40px;
    overflow: hidden;
}
.littel-star-right img{
  width: 100%;
  position: absolute;
  height: 100%;
  left: 0px;
}
.littel-star{
float: left;
  width: 27%;
  aspect-ratio: 1 / 1;
}
.littel-star img{
  transform: rotate(-10deg);
  width: 110%;
  position: absolute;
  height: auto;
  left:0px;
}
.fade-right-enter-to,
.fade-right-leave-from {
  opacity: 1;
  transform: none;
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s;
}

.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.moveup {
  transition: transform 0.5s;
}

.moveup:hover {
  transform: translateY(-10px);
}
.move-card {
  transition: all 0.5s;
}
.move-card:hover {
  box-shadow: 1px 1px 10px black;
}
@keyframes up-down {
  0% {
    translate: 0px 0px;
  }
  50% {
    translate: 0px 20px;
  }
  100% {
    translate: 0px 0px;
  }
}

@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes spinjs {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(45deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

@keyframes spinh5 {
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(90deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}

.star-0-ud {
  animation: up-down 5s linear 0s infinite normal;
}

.star-1-ud {
  animation: up-down 3s linear 0s infinite normal;
}

.react-roll {
  animation: roll 6s linear 0s infinite normal;
}

.webpack-roll {
  animation: roll 6s linear 0s infinite normal;
}

.vue-spin {
  animation: spin 6s linear 0s infinite normal;
}

.h5-spin {
  animation: spinh5 3s linear 1s infinite normal;
}

.css-spin {
  animation: spinh5 3s linear 0.5s infinite normal;
}

.js-spin {
  animation: spinjs 3s linear 0s infinite normal;
}
</style>
