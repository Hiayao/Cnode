<template>
  <div>
    <div class="img">
      <img src="../assets/timg.gif" alt />
    </div>
    <div class="word">
      <div class="word1">这位勇敢的少年，你误入歧途</div>
      <div class="word1">请点击下方按钮回归正道吧！</div>
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
.img {
  margin-left: 200px;
  margin-top: 200px;
}
.word1 {
    font-size: 28px;
    font-weight: 700;
    // text-align: center;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>