<template>
  <div class="page"  v-if="(Object.keys(currentList).length)">
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
        <p>{{item.key}}</p>
        <ul>
          <li v-for="(ite,i) in item.list" :key="i">
            <p>{{ite.market_attribute.year}}款{{ite.car_name}}</p>
            <p>{{ite.horse_power}}马力{{ite.gear_num}}档{{ite.trans_type}}</p>
            <p>
              <span class="max">指导价{{ite.market_attribute.official_refer_price}}</span>
              <span class="min">{{ite.market_attribute.dealer_price_min}}起</span>
            </p>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return{
            cur:0
        }
    },
computed:{
    ...mapState({
 currentList: state => state.detail.currentList,
      year: state => state.detail.year,
      current: state => state.detail.current
    })
},
methods:{
    ...mapActions({
       getInfoAndListById: "detail/getInfoAndListById",
      }),
      ...mapMutations({setCurrent:"detail/setCurrent"}),
       tab(index,item) {
        // console.log(index,item)
        this.cur = index;
        this.setCurrent(item)
        this.getInfoAndListById(this.$route.query.SerialID);
      },
    
},
created(){
    this.getInfoAndListById(this.$route.query.SerialID)
}
}
</script>

<style>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  font-weight: none;
  
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
  padding-right: 20px;
}
.active {
  color: #00afff;
}
.count {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.count > div > p {
  padding: 0 10px;
  height: 25px;
  line-height: 30px;
  font-size: 13px;
  color: #999;
  background: #f4f4f4;
}

.count ul {
  background: #fff;
 }
.count .list ul li {
  margin-bottom: 5px;
}

.count ul li:last-child {
  border-bottom: 0;
 
}
.count ul li p:first-child {
  padding: 10px  16px;
  font-size: 16px;
  color: #3d3d3d;
}
.count ul li p:nth-child(2) {
  color: #bdbdbd;
  font-size: 14px;
  padding: 4px 15px
}
.count ul li p:nth-child(3) {
  text-align: right;
  margin-right: 10px;
  padding-bottom: 10px;
  font-size: 13px;
  color: #818181;
}
.count ul li p:nth-child(3) span:nth-child(2) {
  font-size: 16px;
  color: #ff2336;
  margin-left: 15px;
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
  line-height: 40px;
  /* margin-bottom: 5px */
}
</style>