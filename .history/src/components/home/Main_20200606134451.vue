<template>
  <div class="mainAll">
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="dav">全部</div>
          <div class="dav">精华</div>
          <div class="dav">分享</div>
          <div class="dav">回答</div>
          <div class="dav">招聘</div>
          <div class="dav">客户端测试</div>
        </div>
        <div v-for="item in list" :key="item.id" class="text item">{{item.data.title}}</div>
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
        list:[]
    };
  },
  methods: {
    getData() {
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
            this.list = this.data
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
}
.dav {
    margin-left: 18px;
    color: #80BD01;
}
</style>