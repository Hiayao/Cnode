<template>
  <div >
      <div>{{arr.title}}</div>
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