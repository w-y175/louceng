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
        <p >{{item.key}}</p>
        <ul >
        <li  v-for="(ite,i) in item.list" :key='i'>
          <p >{{ite.market_attribute.year}}款{{ite.car_name}}</p>
          <p >{{ite.horse_power}}马力{{ite.gear_num}}档{{ite.trans_type}}</p>
          <p >
            <span class="max">指导价{{ite.market_attribute.official_refer_price}}</span>
            <span class="min">{{ite.market_attribute.dealer_price_min}}起</span>
          </p>
            <p @click="skip" class="buttom">{{del.BottomEntranceTitle}}</p>
          </li>
       
        
        
        </ul>

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
        console.log(id)
        this.$router.push({ path: "/inquiryDetail", query: { id }});
      },
      tab(index,item) {
        // console.log(index,item)
        this.cur = index;
        this.setCurrent(item)
        this.getInfoAndListById(this.$route.query.id);
      },
      img() {
      this.$router.push({path:"/Img",query:{SerialID:this.$route.query.id}});
      }
  },
  mounted() {
    this.getInfoAndListById(this.$route.query.id);
    console.log(this.$route.query.id)
  },

  data() {
    return {
      cur: 0,
     id:this.$route.query.id
      
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
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: relative;
}
.con .left {
  width: 50%;
height: 50px;
  margin-left: 10px;
  margin-top: 5px
}
.left p {
  font-size: 16px;
  color: red;
 
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
  
}
.con .right button {
  width: 185px;
  height: 35px;
  background: #00afff;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  margin-top: 8px;
}

 .count .top {
 border-top: 10px solid #f4f4f4;
    padding: 0 10px;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    background: #fff;
}
 .count .top span {
 
  padding-right: 20px
}
.active {
  color: #00afff;
}
 .count {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x:hidden 
}
.count>div>p {
    padding: 0 10px;
    height: 25px;
    line-height: 30px;
    font-size: 13px;
    color: #999;
    background: #f4f4f4;
}
.count ul{
  background: #fff;
 
}
.count ul li:last-child {
    border-bottom: 0;
}
.count ul li p:first-child {
    padding: 10px 0 16px;
    font-size: 16px;
    /* line-height: ; */
    color: #3d3d3d;
}
.count ul li p:nth-child(2) {
    color: #bdbdbd;
    font-size: 14px;
}
.count ul li p:nth-child(3) {
    text-align: right;
    margin-right: 10px;
    padding-bottom: 20px;
    font-size: 13px;
    color: #818181;
}
.count ul li p:nth-child(3) span:nth-child(2) {
    font-size: 16px;
    color: #ff2336;
    margin-left:15px;
    
}
.buttom {
   border: none;
    border-top: 1px solid #eee;
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #00afff;
    background: #fff;
    font-weight: 500;
   padding-left: 150px;
    line-height: 40px
  
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
