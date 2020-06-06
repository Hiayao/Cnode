<template>
  <div class="mainAll">
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div>主题</div>
          <div>精华</div>
          <div>分享</div>
          <div>回答</div>
          <div>招聘</div>
          <div>客户端测试</div>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{ }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        
    };
  },
  methods: {
    getData() {
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
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
  margin-top: 30px;
  margin-bottom: 30px;
}
.box-card {
  width: 880px;
  height: 800px;
}
.clearfix {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
</style>