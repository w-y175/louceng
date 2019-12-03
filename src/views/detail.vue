<template>
  <div class="page">
    <!-- 图片 -->
    <div class="img" @click="img">
      <img :src="del.CoverPhoto" alt />
      <p>{{del.pic_group_count}}张照片</p>
    </div>
<!--指导价 -->
    <div class="con">
      <div class="left">
        <p>{{del.market_attribute&&del.market_attribute.dealer_price}}</p>
        <h5>指导价{{del.market_attribute&&del.market_attribute.official_refer_price}}</h5>
      </div>
      <!--询问低价 -->
      <div class="right">
        <button @click="skip">{{del.BottomEntranceTitle}}</button>
      </div>
    </div>
    <!-- 中间tab -->
    <div class="count">
      <!-- 导航 -->
      <div class="top">
        <span
          v-for="(item,index) in list "
          :key="index"
          :class="{active:cur==index}"
          @click="tab(index)"
        >{{item}}</span>
      </div>
<!-- 内容 -->
      <div class="list" v-for="(item,index) in del.list" :key="index">
        <div class="title">{{item.exhaust}}/{{item.exhaust_str}} {{item.inhale_type}}</div>
        <div class="box">
          <p class="name">2019款{{item.car_name}}</p>
          <p class="type">{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
          <div class="cone">
            <span class="max">指导价 28.68万</span>
            <span class="min">20.98万起</span>
          </div>
        </div>

        <div class="buttom">
          <p @click="skip">{{del.BottomEntranceTitle}}</p>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer" @click="skip">
      <div class="one">询问低价</div>
      <div class="two">本地经销商为你报价</div>
    </div>
  </div>
</template>
<script>
// import { create } from 'domain'
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      del: state => state.home.del
    })
  },
  methods: {
    ...mapActions({
      getInfoAndListById: "home/getInfoAndListById",
      skip() {
        let id = this.id;
        this.$router.push({ path: "/inquiryDetail", query: { id } });
      },
      tab(index) {
        this.cur = index;
       
      },

      img() {
        this.$router.push("/img");
      }
    })
  },
  created() {
    this.getInfoAndListById(this.$route.query.id);
  },
  data() {
    return {
      list: ["全部", "2019"],
      cur: 0,

      id: this.$route.query.id
    };
  }
};
</script>
<style>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  font-weight: none;
}
.img {
  width: 100%;
  height: 176px;
  position: relative;
}
.img img {
  width: 100%;
  height: 100%;
}
.img p {
  position: absolute;
  right: 10px;
  bottom: 20px;
  color: #fff;
  width: 90px;
  height: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
}
.con {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.con .left {
  width: 50%;
  height: 60px;
  margin-left: 10px;
}
.left p {
  font-size: 18px;
  color: red;
  margin-top: 10px;
}
.left h5 {
  font-size: 13px;
  color: #c0c0c0;
  font-weight: none;
}
.con .right {
  width: 50%;
  height: 60px;
  margin-top: 10px;
  /* margin-left: 10px; */
}
.con .right button {
  width: 180px;
  height: 30px;
  background: #00afff;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  margin-top: 10px;
}
.page .count {
  width: 100%;
}
.page .count .top {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  padding: 10px 0;
  background: #fff;
}
.page .count .top span {
  margin-left: 20px;
}
.active {
  color: #00afff;
}
.page .count {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.list {
  width: 100%;
  height: 100%;
}
.list .title {
  width: 100%;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  color: #ccc;
}
.list .box {
  width: 100%;
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.list .box .name {
  font-size: 16px;

}
.list .box .type {
  font-size: 14px;
  color: #ccc;
  margin-top: 10px;
}

.list .cone {
  margin-left: 170px;
}
.list .cone span {
  color: #c0c0c0;
  font-size: 14px;
}
.list .cone .min {
  color: red;
  font-size: 14px;
  margin-left: 20px;
}
.list .cone .max {
  font-size: 12px;
}
.list .buttom {
  width: 100%;
  height: 40px;
  background: #fff;
  line-height: 40px;
}
.list .buttom p {
  margin-left: 120px;
  width: 140px;
  height: 30px;
  color: #00afff;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}
.footer {
  width: 100%;
  height: 90px;
  background: #00afff;
  text-align: center;
  line-height: 27px;
}
.footer .one {
  font-size: 16px;
  color: #fff;
}
.footer .two {
  font-size: 14px;
  color: #fff;
}
</style>
