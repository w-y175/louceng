<template>
  <div class="page" v-if="(Object.keys(del).length)">
    <!-- 图片 -->
    <div class="img" @click="img">
      <img :src="del.CoverPhoto" alt />
      <p>{{del.pic_group_count}}张照片</p>
    </div>
    <!--指导价 -->
    <div class="con">
      <div class="left">
        <p>{{del.market_attribute.dealer_price}}</p>
        <h5>指导价{{del.market_attribute.official_refer_price}}</h5>
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
          v-for="(item,index) in year"
          :key="index"
          :class="{active:cur==index}"
          @click="tab(index,item)"
        >{{item}}</span>
      </div>
      <!-- 内容 -->
      <div class="list" v-for="(item,index) in currentList" :key="index">
        <div class="title">{{item.key}}</div>
        <div class="box">
          <p class="name">{{item.list[0].market_attribute.year}}款{{item.list[0].car_name}}</p>
          <p class="type">{{item.list[0].horse_power}}马力{{item.list[0].gear_num}}档{{item.list[0].trans_type}}</p>
          <div class="cone">
            <span class="max">指导价{{item.list[0].market_attribute.official_refer_price}}</span>
            <span class="min">{{item.list[0].market_attribute.dealer_price_min}}起</span>
          </div>
        </div>

        <div class="buttom">
          <p @click="skip">{{del.BottomEntranceTitle}}</p>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer" @click="skip">
      <div class="one">{{del.BottomEntranceTitle}}</div>
      <div class="two">本地经销商为你报价</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      del: state => state.detail.del,
      currentList: state => state.detail.currentList,
      year: state => state.detail.year,
      current: state => state.detail.current
    })
  },
  
  methods: {
    ...mapActions({
      getInfoAndListById: "detail/getInfoAndListById",
      }),
      ...mapMutations({setCurrent:"detail/setCurrent"}),
      skip() {
        let id = this.id;
        this.$router.push({ path: "/inquiryDetail", query: { id } });
      },
      tab(index,item) {
        // console.log(index,item)
        this.cur = index;
        this.setCurrent(item)
        this.getInfoAndListById(this.$route.query.id);
      },
      img() {
        this.$router.push("/img");
      }
  },
  mounted() {
    this.getInfoAndListById(this.$route.query.id);
  },

  data() {
    return {
      cur: 0,
      id: this.$route.query.id
    };
  }
};
</script>
<style>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  font-weight: none;
  
}
.img {
  position: relative;
  height: 6.4rem;
  overflow: hidden;
}
.img img {
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
}
.img p {
  position: absolute;
  right: 0.1rem;
  bottom: 0.3rem;
  color: #fff;
  width: 1.9rem;
  height: 0.4rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
}
.con {
  width: 100%;
  height: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: relative;
}
.con .left {
  width: 50%;
  height: 1.3rem;
  margin-left: 10px;
}
.left p {
  font-size: 0.35rem;
  color: red;
  margin-top: 0.3rem;
}
.left h5 {
  font-size: 13px;
  color: #999999;
  font-weight: none;
}
.con .right {
  width: 50%;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
.con .right button {
  width: 185px;
  height: 35px;
  background: #00afff;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  margin-top: 10px;
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
  overflow-x:hidden 
}
.list {
  width: 100%;
  height: 100%;
}
.list .title {
  width: 100%;
  height: 0.5rem;
  font-size: 14px;
  line-height: 30px;
  color: #999999;
  margin-left: 10px;
}
.list .box {
  width: 100%;
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.list .box .name {
  font-size: 15px;
  padding: 8px 10px;
  color: #3d3d3d;
}
.list .box .type {
  font-size: 14px;
  color: #999999;
  padding: 0px 10px;
}

.list .cone {
  margin-left: 190px;
}
.list .cone span {
  color: #999999;
  font-size: 12px;
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
