<template>
  <div>
    <div class="top">
      <div class="topAll">
        <div>
          <img
            src="//static2.cnodejs.org/public/images/cnodejs_light.svg"
            alt
            class="logo"
            @click="goHome"
          />
        </div>
        <div class="iptAll">
          <input type="text" class="ipt" />
          <i class="el-icon-search"></i>
        </div>
        <div class="topNav">
          <div class="nav">首页</div>
          <div class="nav">新手入门</div>
          <div class="nav">API</div>
          <div class="nav">关于</div>
          <div class="nav">注册</div>
          <div class="nav" @click="login">登录</div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="footAll">
        <div class="wordAllOne">
          <div class="wordOne">RSS</div>
          <div class="wordTwo">丨</div>
          <div class="wordOne">源码地址</div>
        </div>
        <div class="wordTre">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
        <div class="wordTre">
          服务器赞助商为
          <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt class="imgOne" />，存储赞助商为
          <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt class="imgTwo" />，由
          <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" alt class="imgTre" />提供应用性能服务。
        </div>
        <div class="wordLast">
            <div class="wordTre">新手搭建 Node.js 服务器，推荐使用无需备案的</div>
            <div class="wordFour">DigitalOcean(https://www.digitalocean.com/)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  height: 50px;
  width: 100%;
  background: #444444;
  display: flex;
  justify-content: center;
}
.logo {
  width: 120px;
  height: 50px;
  margin-left: 40px;
}
.topAll {
  width: 1240px;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
}

.ipt {
  margin-left: 20px;
  height: 24px;
  width: 220px;
  border: 1px solid #888888;
  border-radius: 20px 20px 20px 20px;
  background: #888888;
  padding-left: 30px;
  outline: none;
  &:focus {
    background: white;
  }
}
.iptAll {
  position: relative;
  display: flex;
  align-items: center;
}
.el-icon-search {
  transform: rotateY(180deg);
  position: absolute;
  left: 30px;
}
.topNav {
  font-size: 14px;
  color: #cccccc;
  display: flex;
  width: 360px;
  line-height: 50px;
  justify-content: space-between;
  position: absolute;
  right: 40px;
}
.nav:hover {
  color: white;
  cursor: pointer;
}
.logo:hover {
  cursor: pointer;
}
.foot {
  height: 200px;
  width: 100%;
  background: red;
  display: flex;
  justify-content: center;
}
.footAll {
  width: 1240px;
  height: 200px;
  //   display: flex;
  //   position: relative;
  flex-wrap: wrap;
  background: white;
}
.wordOne {
  font-size: 13px;
}
.wordTwo {
  color: #888888;
  font-size: 12px;
}
.wordAllOne {
  display: flex;
}
.wordTre {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}
.imgOne {
  width: 80px;
  height: 16px;
}
.imgTwo {
  width: 100px;
  height: 40px;
}
.imgTre {
  width: 150px;
  height: 50px;
}
.wordFour {
    color: #256DF8;
    font-size: 13px;
    
}
.wordLast {
    display: flex;
    margin-top: 6px;
}
</style>