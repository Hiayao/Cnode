<template>
  <div>
    <el-card class="box-card">
      <div class="userName">
        <div class="name">用户名:</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <br />
      <div class="passWord">
        <div class="pwd">密码:</div>
        <div>
          <input type="text" />
        </div>
      </div>
    </el-card>
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
}
.userName {
    display:flex
}
.passWord {
    display: flex;
}
.name {
    width: 60px;
}
.pwd {
    width: 60px;
}
</style>