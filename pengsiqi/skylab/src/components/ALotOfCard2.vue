<template>
  <div class="about">
    <div class="ceshi3">
    </div>
    <div class="ceshi3">
      <span class="span1"> 未毕业成员 </span>
    </div>
    <div class="buttonBx" @click="auto1(),auto2()">
      <img :src="buttonImg" alt="">
    </div>
    <div class="ceshi4">
    </div>
      <div class="container">
        <div class="row">
            <div v-for="item1 in AllMembers1" :key="item1.id1" class="col-lg-3 col-sm-6 auto-margin" id="img2">
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
      const x2 = document.querySelectorAll('#img2')
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
          id1: 2021,
          indexx: 0,
          Member: [
            { id2: 1, name: '高铮', discipline: '软件工程', text: 'sky工作室UI设计师，sky工作室官网UI创建者。曾获《蓝桥杯海报设计一等奖》《蓝桥杯吉祥物设计二等奖》奖项，从事UI设计，3D模型，PIXIV画师，海报设计，网站前端等。', url1: new URL('@/assets/member/高铮.jpg', import.meta.url).href },
            { id2: 2, name: '李秋瑜', discipline: '软件工程', text: '主要学习后端go语言方向，大一学年综测专业第一，曾获得第十三届蓝桥杯省级一等奖，日常喜欢打打排球，在平衡学习和生活的道路上仍在努力中。', url1: new URL('@/assets/member/李秋瑜.jpg', import.meta.url).href },
            { id2: 3, name: '刘晏榕', discipline: '计科', text: '目前选择前端方向，也有点健忘，大一学年商务分析专业方向智育第二，综测第二，曾获“创新创意及创业挑战赛”校级二等奖，“传智杯全国大学生IT技能大赛”全国区域赛三等奖，没有天赋异禀，所以愿意努力翻山越岭。有点社恐，但乐意为新的一轮月亮和日落欢呼。', url1: new URL('@/assets/member/刘晏榕.jpg', import.meta.url).href },
            { id2: 4, name: '王鹤蒙', discipline: '网络工程', text: '目前选择golang语言方向 大一学年智育综测均专业第一曾获第十三届“蓝桥杯”辽宁省赛三等奖 三创赛校级一等奖“互联网+”创业创新赛校级铜奖 是个“自由”主义派 永远快乐才是人生真谛想吹风 想自由 去看海 绕世界流浪 有一些小小的梦想计划着一点点去靠近实现 始终相信 心之所愿 定能如愿～', url1: new URL('@/assets/member/王鹤蒙.jpg', import.meta.url).href },
            { id2: 5, name: '闫正心', discipline: '计科', text: '本人性格开朗，热情活泼，喜欢画画，旅游和做一些手工。我很荣幸加入了skylab成为了一名skyer，在这一年里我学习到了很多专业知识，也有了自己的学习方向，收获颇丰，积累了很多经验。“星光不问赶路人,时光不负有心人”我会一直努力向前。期待大家加入skylab，成为我们的一员！', url1: new URL('@/assets/member/闫正心.jpg', import.meta.url).href },
            { id2: 6, name: '祖铭鸿', discipline: '计科师范', text: '后端golong方向。性格上适应力强，初识时比较腼腆，爱好广泛，大一期间曾获各个级别的比赛和志愿活动奖项六项，对算法很感兴趣，愿意从头思考。', url1: new URL('@/assets/member/祖铭鸿.jpg', import.meta.url).href },
            { id2: 7, name: '李毅', discipline: '网络工程', text: '待人友好，性格开朗，适应力强，心理素质良好。主要学习后端java和golang语言，对电脑接触较早，动手能力强，对电脑硬件方面比较感兴趣，平时有尝试给硬件超频。平时爱好打乒乓球，玩游戏。', url1: new URL('@/assets/member/李毅.jpg', import.meta.url).href },
            { id2: 8, name: '曹君如', discipline: '计科', text: '平时喜欢研究关于电脑的一切东西，无论是软件还是硬件都略有了解。大一学年综测排名第四，《第十三届蓝桥杯大赛》省级三等奖。很荣幸成为skylab的一名成员，期待大家的加入！', url1: new URL('@/assets/member/曹君如.jpg', import.meta.url).href },
            { id2: 9, name: '戴佳昊', discipline: '计科', text: '来自江苏，性格开朗热情，幽默诙谐，大一学年曾获《第四届传智杯全国大学生IT技能大赛全国区域赛三等奖》《第十三届蓝桥杯辽宁省赛二等奖》《互联网+校级铜奖》奖项；并取得了智育第四，综测第五的成绩，积极进取，思想上进；学习能力强，喜欢钻研；“吾生也有涯，而知也无涯”是我的座右铭。', url1: new URL('@/assets/member/戴佳昊.jpg', import.meta.url).href },
            { id2: 10, name: '王昕哲', discipline: '计科', text: '我是王昕哲，曾获蓝桥杯省级三等奖、第十二届全国大学生电子商务“创新、创意及创业”挑战性校级一等奖，软件学院2021--2022计算机专业智育测评第6，德育测评第3综合素质测评第4，基本掌握了c/c++语言，略掌握pr技巧，欢迎学弟学妹加入我们的工作室。', url1: new URL('@/assets/member/王昕哲.jpg', import.meta.url).href },
            { id2: 11, name: '秦梓轩', discipline: '计科', text: '来自沈阳，性格开朗，幽默，曾获《第四届传智杯全国大学生IT技能大赛全国区域赛三等奖》 《互联网+校级铜奖》等奖项；我喜欢健身，打篮球，打游戏；期待大家加入skylab，彼此共同进步！', url1: new URL('@/assets/member/秦梓轩.jpg', import.meta.url).href },
            { id2: 12, name: '李俊奕', discipline: '计科', text: '喜欢编程、游泳、健身、web3、FPS、动漫，一些莫名其妙奖学金的获得者，蓝桥杯、传智杯、全国大学生电子商务等一些莫名其妙比赛的获奖者。个人技术方向为go开发，对web3非常感兴趣。', url1: new URL('@/assets/member/李俊奕.jpg', import.meta.url).href }
          ]
        },
        {
          id1: 2022,
          indexx: 0,
          Member: [
            { id2: 1, name: '张瀚聪', discipline: '计科', text: '曾获第十四届蓝桥杯省级一等奖、“互联网+”省级二等奖、校级优秀团员、社会实践先进个人等省、校、院级奖项共计二十余项。现任职软件学院第二十届团学组织学生会执行主席。感谢sky的包容与开放，给予每个灵魂滚烫发光的机会。', url1: new URL('@/assets/member/张瀚聪.jpg', import.meta.url).href },
            { id2: 2, name: '孙治宇', discipline: '计科', text: '曾获得大学生创新创业比赛国家级奖项，计算机设计大赛省奖，互联网+银奖铜奖，挑战杯校级，传智杯优秀奖，大一曾获得学习奖学金，并通过了英语的四六级，爱好篮球足球和kpop。人生就是旷野，旷野的规则是永不回头，所以继续勇敢地向前走吧。', url1: new URL('@/assets/member/孙治宇.jpg', import.meta.url).href },
            { id2: 3, name: '彭思齐', discipline: '软件工程', text: '23辽宁省数学建模竞赛省级一等奖、23年美赛s奖、24年蓝桥杯c++组省级二等奖、24年东三省数学建模竞赛省级二等奖、24年三创赛校级二等奖。个人技术主攻前端方向，兴趣爱好涉猎广泛，喜爱音乐，在网易云平台上有beat发行。喜好运动，如篮球，跑步等。个人座右铭:落彩赋寒川，翻山逐暖阳。', url1: new URL('@/assets/member/彭思齐.jpg', import.meta.url).href }
          ]
        },
        {
          id1: 2023,
          indexx: 0,
          Member: [
            { id2: 1, name: '宋瑞涵', discipline: '网络工程', text: '目前获得蓝桥杯省三奖项，大创校级奖，日常热情开朗，有点抽象，喜欢打羽毛球，希望在sky度过难忘的岁月！', url1: new URL('@/assets/member/宋瑞涵.jpg', import.meta.url).href },
            { id2: 2, name: '周晓函', discipline: '计科', text: '目前获得大创校级奖，海报校级一等奖，校园心理情景剧二等奖，性格开朗大方，希望学弟学妹们可以在工作室不断学习，努力提高 ，超越自己 ，成就梦想', url1: new URL('@/assets/member/周晓函.jpg', import.meta.url).href },
            { id2: 3, name: '苑文浩', discipline: '网络工程', text: '个人荣誉：23年创新创业大赛省级三等奖、23年创新创业大赛校级三等奖、24年“21世纪杯”英语演讲校级一等奖。希望新生们抓住机会，筚路蓝缕·栉风沐雨，做自己想做的，花香蝶自来。', url1: new URL('@/assets/member/苑文浩.jpg', import.meta.url).href },
            { id2: 4, name: '于佳禾', discipline: '计科', text: '个人荣誉：2023年辽宁省大学生体育+创新创业大赛省级三等奖、2024年大学生创新创业校奖；喜欢写书法、弹古筝、旅行……希望在sky这个大家庭和大家共同学习进步，收获、成长，度过美好充实的大学时光！山高路远，道阻且长，行则将至！', url1: new URL('@/assets/member/于佳禾.jpg', import.meta.url).href },
            { id2: 5, name: '胡安媛', discipline: '计科', text: '个人荣誉:24年东北三省数学建模省级二等奖；24年大学生创新创业校级立项；23年第六届传智杯比赛校级三等奖；祝你明亮，任由阳光盈满，祝你道路悠长，得见旷野繁星，长街灯光。', url1: new URL('@/assets/member/胡安媛.jpg', import.meta.url).href },
            { id2: 6, name: '崔心甜', discipline: '网络工程', text: '个人荣誉：蓝桥杯省二奖项、大创校级。喜欢听歌追剧，期望与大家共谱绚丽篇章，留下美好回忆！', url1: new URL('@/assets/member/崔心甜.jpg', import.meta.url).href },
            { id2: 7, name: '张智涵', discipline: '计科', text: '计科三班班长，获蓝桥杯省二，23年第六届传智杯比赛校级三等奖，三创赛校二，对FPS游戏、小说、历史都有浓厚的兴趣，喜欢旅游，想在读万卷书的同时行万里路，努力丰富自己，会在帮助别人的同时获得快乐，坚信文字具有力量，会经常记录生活！希望学弟学妹能加入我们Sky这个大家庭，成为一个新的skyer！', url1: new URL('@/assets/member/张智涵.jpg', import.meta.url).href }
          ]
        },
        {
          id1: 2024,
          indexx: 0,
          Member: [
            { id2: 1, name: 'Your', discipline: 'discipline', text: 'This vacancy is reserved for you！' }
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
.imgmove{
  animation: opac-1 0.5s;
}
.buttonBx img {
  width:100%;
  height:100%;
}
.buttonBx:hover {
  cursor: pointer;
  transform: rotate(360deg);
}
.ceshi3{
  height: 80px;
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
    transition-duration:0.8s ;
}

</style>
