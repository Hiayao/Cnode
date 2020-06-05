<template>
  <div>
    <div class="top">
      <div class="topAll">
        <div>
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt class="logo" />
        </div>
        <div class="iptAll">
          <input type="text" class="ipt" />
          <i class="el-icon-search"></i>
        </div>
        <div class="topNav">
            <div>首页</div>
            <div>新手入门</div>
            <div>API</div>
            <div>关于</div>
            <div>注册</div>
            <div>登录</div>
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
  methods: {},
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
}

.ipt {
  margin-left: 20px;
  height: 24px;
  width: 220px;
  border: 1px solid #888888;
  border-radius: 20px 20px 20px 20px;
  background: #888888;
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
    width: 300px;
    height: 50px;
}
</style>