<template>
  <div>
    <div class="top">
      <div class="topAll">
        <div>
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt class="logo" />
        </div>
        <div class="iptAll"><input type="text" class="ipt">
        <i class="el-icon-search"></i></div>
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
    margin-left :20px;
    height: 24px;
    width: 220px;
    border: 1px solid #888888;
    border-radius: 20px 20px 20px 20px;
    background: #888888;
}
.el-icon-search{
    transform: rotate(180deg);
}
</style>