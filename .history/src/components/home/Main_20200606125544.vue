<template>
  <div class="mainAll">
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
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
.mainAll {
  width: 100%;
  background: #e1e1e1;
  display: flex;
  justify-content: center;
}
.main {
  width: 1240px;
  display: flex;
  margin-left: 40px;
}
.box-card {
  width: 880px;
  height: 800px;
}
</style>