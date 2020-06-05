<template>
  <div>
    <div class="top">
      <div class="topAll">
        <div>
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt class="logo" />
        </div>
        <div ><input type="text"></div>
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
}
.topAll {
  width: 1240px;
  height: 50px;
  display: flex;
}
</style>