<template>
  <div class="about">
    <div class="ceshi1">
      <span class="span1"> 已毕业成员 </span>
    </div>
    <div class="buttonBx" @click="auto1(),auto2()">
      <img :src="buttonImg" alt="">
    </div>
    <div class="ceshi2">
    </div>
      <div class="container">
        <div class="row">
            <div v-for="item1 in AllMembers1" :key="item1.id1" class="col-lg-3 col-sm-6 auto-margin" id="img1">
              <div class="member-card">
                <div class="member-img">
                  <div class="member-lag"></div>
                  <div class="v1">
                      <img :src=" item1.Member[item1.indexx].url1 " alt="">
                  </div>
                  <span class="member-span">{{ item1.Member[item1.indexx].name }}</span>
                  <div class="age">{{item1.id1}}{{item1.Member[item1.indexx].discipline}}</div>
                </div>
                <div class="member-text">
                  <p class="p1">{{ item1.Member[item1.indexx].text }}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
</div>
</template>
<script>
export default {
  methods: {
    auto2 () {
      const x2 = document.querySelectorAll('#img1')
      for (let o = 0; o < x2.length; o++) {
        x2[o].classList.add('imgmove')
        x2[o].addEventListener('animationend', function () {
          x2[o].classList.remove('imgmove')
        }, { once: true })
      }
    },
    auto1 () {
      for (let i = 0; i < this.AllMembers1.length; i++) {
        if (this.AllMembers1[i].indexx < this.AllMembers1[i].Member.length - 1) {
          this.AllMembers1[i].indexx += 1
        } else {
          this.AllMembers1[i].indexx = 0
        }
      }
    }
  },
  data () {
    return {
      num: 0,
      buttonImg,
      AllMembers1: [
        {
          id1: 2017,
          indexx: 0,
          Member: [
            { id2: 1, name: '陈子豪', discipline: '软件工程', text: '大学时曾获得全国大学生计算机程序设计二等奖，大二时在滴滴实习，拥有丰富的实战经验，曾于小红书从事后端开发，现于百度就职。', url1: new URL('@/assets/member/陈子豪.jpg', import.meta.url).href },
            { id2: 2, name: '王东', discipline: '网络工程', text: '2019、2020届全国计算机设计大赛国家级三等奖获得者，目前就职百度 Palo数据库团队做的方向 数据库上云管控平台与数据库内核执行器调度器研发。', url1: new URL('@/assets/member/王东.png', import.meta.url).href }
          ]
        },
        {
          id1: 2018,
          indexx: 0,
          Member: [
            { id2: 1, name: '刘琦', discipline: '计科', text: '曾在度小满（原百度金融）实习八个月并获得最佳实习生奖项，大学时曾获得大创国家级奖项，多次获得学习一等奖学金、科学研究奖学金，2020年全国高校计算机能力挑战赛Java程序设计赛国家级二等奖，辽宁省“优秀大学毕业生“称号。目前保研至吉林大学软件工程专业，研究方向为深度学习和数据库内核。', url1: new URL('@/assets/member/刘琦.jpg', import.meta.url).href },
            { id2: 2, name: '龚雪莹', discipline: '软件工程', text: '研究生在读，曾获全国智能创新大赛国二、计算机设计大赛省三等七八项省奖、若干校奖、写了杂七杂八论文两篇，大四保研至东华大学。最喜欢就是疫情前和曹老师还有大三四届学长学姐吃饭唠嗑，也喜欢和sky工作室一起打比赛一起学习一起卷一起摆、无论带着飞还是被带飞，真好。', url1: new URL('@/assets/member/龚雪莹.jpg', import.meta.url).href },
            { id2: 3, name: '陈坤', discipline: '计科', text: '老家江西鹰潭，大学期间曾在高途教育、百度实习，后校招进入字节跳动，目前在互娱直播部门从事后端研发工程师的工作。十分怀念在sky学习的时光，希望刚刚踏入沈师的学弟学妹们也能够喜欢sky，加入sky。', url1: new URL('@/assets/member/陈坤.png', import.meta.url).href },
            { id2: 4, name: '靳智多', discipline: '计科', text: '大数据领域数据治理方向产品经理，任职于东方国信。大学期间，累计获得国家级4项、省级11项、市级1项、校级53项等荣誉。Sky是一个无比温暖与治愈的地方，相信我，Sky会改变你的人生！', url1: new URL('@/assets/member/靳智多.jpg', import.meta.url).href },
            { id2: 5, name: '练羽童', discipline: '软件工程', text: '重度代码洁癖患者，前端技术爱好者（JavaScript专治语言选择困难症~）目前就职于百度，担任前端开发工程师。', url1: new URL('@/assets/member/练羽童.jpg', import.meta.url).href },
            { id2: 6, name: '梁玥', discipline: '网络工程', text: '在竞赛方面：曾获得计算机设计大赛国家级三等奖，蓝桥杯省级二等奖等多项省级奖项。在学习方面：三年智育成绩专业第二，综合测评成绩专业第二，获得2020-2021学年辽宁省政府奖学金，多项校内奖学金，目前保研至东华大学。', url1: new URL('@/assets/member/梁玥.jpg', import.meta.url).href },
            { id2: 7, name: '张雨添', discipline: '网络工程', text: '毕业后在南安普顿大学读研，现在在京东工作，拿过cpcc铜奖。', url1: new URL('@/assets/member/张雨添.jpg', import.meta.url).href }
          ]
        },
        {
          id1: 2019,
          indexx: 0,
          Member: [
            { id2: 1, name: '张丹丹', discipline: '计科', text: '竞赛积极者，曾获第三届传智杯国赛二等奖，计算机设计大赛国赛二等奖，第十二届蓝桥杯国赛优秀奖，互联网+省级铜奖等十余项省级奖项，校奖若干。现已保研至杭州电子科技大学计算机科学与技术，知识图谱方向。', url1: new URL('@/assets/member/张丹丹.jpg', import.meta.url).href },
            { id2: 2, name: '曹晗', discipline: '计科师范', text: '一个喜欢摄影和电影的文艺女青年，在校期间获得多项个人荣誉，如“学创杯”校级二等奖，沈阳师范大学第十五届“计算机设计大赛”一等奖，2020“朔日杯”辽宁省高校计算机设计竞赛三等奖，第八届全国高校数字艺术设计大赛东北赛区二等奖，互联网+大赛省级三等奖等。', url1: new URL('@/assets/member/曹晗.jpg', import.meta.url).href },
            { id2: 3, name: '郑颂阳', discipline: '网络工程', text: '20，21，22三年蓝桥杯c语言活java组省二等奖，21，22两年计算机博弈大赛藏族久棋省三等奖，大一学习奖学金，大二学习+科研奖学金，爱好打游戏和球类运动。', url1: new URL('@/assets/member/郑颂阳.jpg', import.meta.url).href }
          ]
        },
        {
          id1: 2020,
          indexx: 0,
          Member: [
            { id2: 1, name: '李英嘉', discipline: '计科', text: '两年智育、综测均专业第一，平均学分绩点3.65。担任21级、22级新生助理辅导员，积极参加各类创新竞赛共获得国家级3项、省级10项、校级24项、其余奖项若干，现已保研至中央财经大学。加入Sky！一起摸鱼，一起卷，等你们来！', url1: new URL('@/assets/member/李英嘉.png', import.meta.url).href },
            { id2: 2, name: '王书琳', discipline: '应用数学', text: '原软件学院计算机科学与技术（师范）专业学生，平均学分绩点3.52，智育、综测均专业第一。曾任软件学院21级新生助理辅导员。大二转入数学学应用数学（师范）专业，智育排名前4%,获省级奖项四项，校级五余项。乐衷于参加大学数学建模竞赛及创新创业类竞赛，多次取得省、校级奖项，现已保研至东北师范大学。', url1: new URL('@/assets/member/王书琳.png', import.meta.url).href },
            { id2: 3, name: '李沅卿', discipline: '计科', text: '曾获2021年第十五届挑战杯红色专项活动国家级项目，辽宁省大学生创新创业训练项目省级项目，全国大学生电子商务“创新、创业及创意”挑战赛校级特等奖，光明大调研专项社会实践活动校级优秀团队。', url1: new URL('@/assets/member/李沅卿.png', import.meta.url).href },
            { id2: 4, name: '刘云鹤', discipline: '网络工程', text: '辽宁沈阳人，方向是JAVA后端。比较擅长钻研一件事情，曾获得过第十二届蓝桥杯省级一等奖，第三届传智杯二等奖等。以后的大概路线是走JAVA后端开发，现在还在努力学习中，望与君共勉。', url1: new URL('@/assets/member/刘云鹤.jpg', import.meta.url).href },
            { id2: 5, name: '刘兆源', discipline: '软件工程', text: '主要学习JAVA后端方向 曾获大学生创新创业大赛国家级项目曾在团学组织以综合成绩第一被录取 院优秀学生干部 多次取得奖学金。', url1: new URL('@/assets/member/刘兆源.jpg', import.meta.url).href },
            { id2: 6, name: '于博', discipline: '计科', text: '于博，2020级计算机科学与技术专业，曾获得20年软件学院计算机程序设计大赛二等奖，第十二届蓝桥杯全国软件和信息技术辽宁赛区c/c++程序设计一等奖。', url1: new URL('@/assets/member/于博.jpg', import.meta.url).href },
            { id2: 7, name: '郑赫', discipline: '计科', text: '方向go语言，热爱技术，极客。曾获计算机博弈竞赛三等奖。钻研技术是我最喜欢做的事情，希望能和工作室的大家一起探索技术，分享技术。用技术造福世界。', url1: new URL('@/assets/member/郑赫.jpg', import.meta.url).href }
          ]
        }
      ]
    }
  }
}
const buttonImg = new URL('@/assets/decoration/button.png', import.meta.url).href
</script>

<style>
@keyframes opac-1{
   0%{opacity: 0;}
   25%{opacity: 0.25;}
   50%{opacity: 0.5;}
   75%{opacity: 0.75;}
   100%{opacity: 1;}
  }
.span1{
font-size: 36px;
font-weight: 700;
}
.imgmove{
  animation: opac-1 0.5s;
}
.buttonBx {
  width: 10%;
  aspect-ratio: 1/1;
  margin: 20px auto 0;
  transition: .8s;
}
.buttonBx img {
  width:100%;
  height:100%;
}
.buttonBx:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
.ceshi1{
  height: 70px;
  width: 100%;
}
.member-lag{
  width: 100%;
  height: 125%;
}
.member-img{
    display: flex;
    justify-content: center;
    position: relative;
    text-align: center;
    margin-left: 30%;
    width: 40%;
    aspect-ratio: 1/1;
}
.member-img .v1 img{
    width: 100%;
    height: 100%;
}
.member-context{
    text-align: center;
}
.member-40{
  height: 40%;
  width: 100%;
}
.v1{
    position: absolute;
    height: 80%;
    width: 100%;
    box-shadow: 1px 1px 10px #bababa;
    border-radius: 10px;
    overflow: hidden;
    top: -40%;
    transition: transform 0.8s; /* 添加过渡效果 */
    transform-origin: center center; /* 设置变换的原点为中心点 */
}
.member-card:hover .v1{
    transform: scale(1.3); /* 均匀扩大50%面积 */
}
.member-context .p1{
    padding: 50px 5px;
    font-size: 16px;
}
.member-text{
    padding: 0px 20px;
    height: 0px;
    overflow: hidden;
    transition-property:height;
    transition-duration:0.8s;
}
.member-card:hover{
  box-shadow: 1px 1px 10px black;
  }
.member-card:hover .v1{
    box-shadow: 1px 1px 10px black;
}
@media (max-width: 576px) {
  .buttonBx {
  width: 30%;
  aspect-ratio: 1/1;
  margin: 20px auto 0;
  transition: .8s;
  }
  .member-card{
    margin-left: 12.5%;
    width: 75%;
    background-color:#54545422;
    border-radius: 20px;
    margin-top: 30%;
    transition: all 0.8s;
    box-shadow: 1px 1px 10px #bababa;
  }
  .ceshi4{
  height: 20px;
  width: 100%;
}
.ceshi2{
  height: 50px;
  width: 100%;
}
.member-span{
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    bottom: 30px;
}
.age{
  position: absolute;
  font-size: 12px;
  font-weight:700;
  bottom: 10px;
  width: 100%;
}
.member-card:hover .member-text{
    height: 360px;
}
}
@media only screen and (max-width: 992px) and (min-width: 576px) {
.buttonBx {
  width: 15%;
  aspect-ratio: 1/1;
  margin: 20px auto 0;
  transition: .8s;
  }
  .member-card{
    width: 100%;
    background-color:#54545422;
    border-radius: 20px;
    margin-top: 30%;
    transition: all 0.8s;
    box-shadow: 1px 1px 10px #bababa;
  }
  .member-span{
    font-size: 28px;
    font-weight: 600;
    position: absolute;
    bottom: 40px;
}
.age{
  position: absolute;
  font-size: 15px;
  font-weight:700;
  bottom: 10px;
}
.member-card:hover .member-text{
    height: 300px;
}
}
@media (min-width: 992px) {
.auto-margin{
    margin-top:0px ;
  }
  .buttonBx {
  width: 10%;
  aspect-ratio: 1/1;
  margin: 20px auto 0;
  transition: .8s;
  }
  .member-card{
    width: 100%;
    background-color:#54545422;
    border-radius: 20px;
    margin-top: 30%;
    transition: all 0.8s;
    box-shadow: 1px 1px 10px #bababa;
  }
  .member-span{
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    bottom: 40px;
}
.age{
  position: absolute;
  font-size: 15px;
  font-weight:700;
  bottom: 10px;
}
.member-card:hover .member-text{
    height: 338px;
}
}

</style>
