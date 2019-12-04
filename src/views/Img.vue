<template>
  <div class="page-img">
    <div class="select">
      <div class="left" @click="colour">颜色</div>
      <div class="right">车款</div>
    </div>
    <div class="image">
      <ul class="ul">
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    colour() {
      this.$router.push("/colour");
    }
  },

  data() {
    return {};
  }
};
</script>

<style>
.page-img {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f5f5f5;
}
.select {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  background: #fff;
}
</style>