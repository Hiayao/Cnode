<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <div class="clearfix">
          <div v-if="arr.top === true" class="label">置顶</div>
          <div class="title">{{arr.title}}</div>
        </div>
        <div class="titleAll">
          <span class="titleOne">• 发布于</span>
          <span v-if="arr.author" class="titleTwo">• 作者：{{arr.author.loginname}}</span>
          <span class="titleTwo">• {{arr.visit_count}}次浏览</span>
          <span class="titleTwo">• 最后一次编辑是</span>
          <span v-if="arr.tab ==='share'" class="titleTwo">• 来自 分享</span>
          <span v-if="arr.tab ==='ask'" class="titleTwo">• 来自 问答</span>
        </div>
      </div>
      <div>
        <div v-html="arr.content" class="detail"></div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{arr.reply_count}}回复</span>
      </div>
      <div>
        <div v-for="(item,index) in arr.replies" :key="index">
          <div>
            <img :src="item.author.avatar_url" alt />
          </div>
          <div>
            <span>{{item.author.loginname}}</span>
            <span>{{index +1}}楼</span>
          </div>
          <div v-html="item.content"></div>
        </div>
      </div>
    </el-card>
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
      id: "",
      arr: []
    };
  },
  methods: {
    getData() {
      axios
        .get(`https://cnodejs.org/api/v1/topic/${this.id}`)
        .then(res => {
          this.arr = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style lang='scss'>
.box-card {
  width: 880px;
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.clearfix {
  display: flex;
  align-items: center;
}
.label {
  background: #80bd01;
  width: 40px;
  height: 20px;
  font-size: 13px;
  font-weight: 700;
  color: white;
  text-align: center;
  border-radius: 5px;
  margin-top: 8px;
}
.title {
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
}
.titleTwo {
  font-size: 12px;
  color: #999;
  margin-left: 10px;
}
.titleOne {
  font-size: 12px;
  color: #999;
}
.titleAll {
  margin-top: 10px;
}
.detail {
 font-size: 10px;
}
</style>