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
        <div class="title">{{item.key}}</div>
        <div class="box">
          <p class="name">{{item.list[0].market_attribute.year}}款{{item.list[0].car_name}}</p>
          <p class="type">{{item.list[0].horse_power}}马力{{item.list[0].gear_num}}档{{item.list[0].trans_type}}</p>
          <div class="cone">
            <span class="max">指导价{{item.list[0].market_attribute.official_refer_price}}</span>
            <span class="min">{{item.list[0].market_attribute.dealer_price_min}}起</span>
          </div>
        </div> 
        
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
        this.cur = index;
        this.setCurrent(item)
        this.getInfoAndListById();
      },
    
},
created(){
    this.getInfoAndListById(2593)
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
  height:30px;
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
</style>