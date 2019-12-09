<template>
  <div class="page-img">
    <div class="select">
      <div class="left" @click="colour">颜色</div>
      <div class="right" @click='car'>车款</div>
    </div>
    <div class="pic">
   <div class="smallImg" v-for="(item,index) in pic" :key="index">
      <!-- 渲染汽车展示小图片 -->
      <div class="imgs" v-for="(ite,i) in item.List" :key="i">
        <img :src="ite.Url.replace('{0}',1)"/>
      </div>
        <!-- 图片上的遮罩层 -->
        <div class="reduce">
            <p class="p">{{item.Name}}</p>
             <p>{{item.Count}}></p>
        </div> 
    </div>
  </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  computed:{
    ...mapState({
      pic:state=>state.Carimg.CarImg,
      // colorId:state=>state.Carimg.colorId,
      // carId:state=>state.Carimg.carId
    })
  },
  methods: {
    ...mapActions({
getImageList:'Carimg/getImageList'
    }),
    colour(){
      this.$router.push("/colour");
    },
    car(){
      this.$router.push({path:"/carstyle",query:{SerialID:this.$route.query.id}})
    }
  },
  created(){
    console.log(this.$route.query.SerialID)
    this.getImageList(this.$route.query.SerialID);
    console.log("$store...", this.$store);
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
 
  background: #f5f5f5;
}
.select {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  line-height: 30px;
  font-size: 15px;
  background: #fff;
}
.pic{
  width: 100%;
  height: 100%;
  overflow-y: scroll
}
 .smallImg{
  width: 100%;
 
   display:flex;
   flex-wrap: wrap;
   justify-content: space-between;
   position:relative;
   
}
.smallImg .imgs{
  width:32.5%;
  
}
 .smallImg img{
  width:100%; 
  height:95px;
}
 .smallImg .reduce{
 width:32.5%;
 height:95px;
 background:rgba(0, 0, 0, 0.5);
 position: absolute;;
 top:0;
 left:0;
 color:#fff;
 text-align: center;
}
 .smallImg .reduce .p{
  margin-top:20px;
}

</style>