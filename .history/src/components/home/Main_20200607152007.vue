<template>
  <div class="el-form__item__label mainAll">
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="davOne">全部</div>
          <div class="dav">精华</div>
          <div class="dav">分享</div>
          <div class="dav">回答</div>
          <div class="dav">招聘</div>
          <div class="dav">客户端测试</div>
        </div>
        <div v-for="item in list" :key="item.id" class="textItem">
          <!-- 头像 -->
          <div>
            <img :src="item.author.avatar_url" alt class="avatar" />
          </div>
          <!-- 回复数 -->
          <div class="reply_count">{{item.reply_count}}</div>
          <div style="font-size:12px">/</div>
          <!-- 阅读量 -->
          <div class="visit_count">{{item.visit_count}}</div>
          <!-- 标题 -->
          <div class="title">{{item.title}}</div>
          <!-- <div v-for="item1"></div> -->
          <div>
            <img :src="item.replies.avatar_url" alt class="avatar" />
          </div>
        </div>

        <div class="block">
          <span class="demonstration"></span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
          ></el-pagination>
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
      arr: [],
      currentPage4: 1
      //   id:''
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      axios
        .get("https://cnodejs.org/api/v1/topics?tab=all&page=" + val)
        .then(res => {
          this.list = res.data.data;

          for (let i = 0; i < this.list.length; i++) {
            const data = this.list[i];
            var url = "https://cnodejs.org/api/v1/topic/" + data.id;
            axios
              .get(url)
              .then(res => {
                var replies = res.data["data"]["replies"];
                if (replies.length > 0) {
                  data.replies = replies[replies.length - 1]["author"];
                }
              })
              .catch(err => {
              });
          }
        })
        .catch(err => {});
    },
    getData() {
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
          this.list = res.data.data;
        })
        .catch(err => {});
    },
    getDataTwo(data) {}
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
  //   height: 800px;
}
.clearfix {
  display: flex;
  align-items: center;
}
.dav {
  margin-left: 18px;
  color: #80bd01;
  &:hover {
    cursor: pointer;
    color: rgb(22, 22, 97);
  }
}
.avatar {
  width: 32px;
  height: 32px;
  border: 1px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
}
.textItem {
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 60px;
  border-bottom: 1px solid rgb(219, 217, 217);
  &:hover {
    background: rgb(221, 219, 219);
  }
}
.reply_count {
  color: #9e78c0;
  margin-left: 5px;
  width: 30px;
  display: flex;
  justify-content: flex-end;
}
.visit_count {
  color: #b4b4b4;
  font-size: 12px;
  width: 50px;
}
.title {
  margin-left: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 600px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
.davOne {
  margin-left: 18px;
  color: white;
  background: #80bd01;
  width: 40px;
  line-height: 26px;
  text-align: center;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
}
</style>