<template>
  <div >
      <el-card class="box-card">
  <div slot="header" class="clearfix">
      <div v-if="arr.top === true">置顶</div>
    <div>{{arr.title}}</div>
    <span>发布于</span>
    <span v-if="arr.author">作者：{{arr.author.loginname}}</span>
    <span>{{arr.visit_count}}次浏览</span>
    <span>最后一次编辑是</span>
    <span v-if="arr.tab ==='share'">来自分享</span>
    <span v-if="arr.tab ==='ask'">来自问答</span>
  </div>
  <div>
      <div v-html="arr.content"></div>
    
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
      arr:[]
    };
  },
  methods: {
    getData() {
      axios
        .get(`https://cnodejs.org/api/v1/topic/${this.id}`)
        .then(res => {
            this.arr = res.data.data
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
 .box-card {
    width: 880px;
    margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  }
</style>