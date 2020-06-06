<template>
  <div>
    <div>
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

.box-card {
  width: 480px;
  height: 500px;
}
</style>