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
        <div v-for="item in list" :key="item.id" class="textItem">
            <!-- 头像 -->
          <div><img :src="item.author.avatar_url" alt class="avatar"/></div>
          <!-- 回复数 -->
          <div class="reply_count">{{item.reply_count}}</div>
          <div style="font-size:12px">/</div>
          <!-- 阅读量 -->
          <div class="visit_count">{{item.visit_count}}</div>
          <!-- 标题 -->
          <div class="title">{{item.title}}</div>
          <!-- <div v-for="item1"></div> -->
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: [],
      id:''
    };
  },
  methods: {
    getData() {
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
          this.list = res.data.data;
          this.id = res.data.item.id
          console.log(res.data);
        
        })
        .catch(err => {
          console.log(err);
        });
    },
    getDataTwo(){
        axios.get(`https://cnodejs.org/api/v1/topic/${this.id}`)
        .then(res => {
          
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();this.getDataTwo()
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
//   height: 800px;
}
.clearfix {
  display: flex;
  align-items: center;
}
.dav {
  margin-left: 18px;
  color: #80bd01;
}
.avatar {
    width: 32px;
    height: 32px;
    border: 1px;
    border-radius: 5px;
}
.textItem {
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.reply_count {
    color:#9E78C0;
    margin-left: 10px;
    width: 20px;
}
.visit_count {
    color: #B4B4B4;
    font-size: 12px;
    width: 50px;
}
.title {
    margin-left: 10px;
}
</style>