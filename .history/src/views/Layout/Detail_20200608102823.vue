<template>
  <div >
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <div>{{arr.title}}</div>
    <div>发布于</div>
    <div v-if="arr.author">作者：{{arr.author.loginname}}</div>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    
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
</style>