
<template>
  <div class="allcarimg">
    <div class="box" >
    <div class="smallImg" v-for="(item,index) in allcarimgList" :key="index">
      <!-- 渲染汽车展示小图片 -->
      <div class="imgs" v-for="(ite,i) in item.List" :key="i">
        <img :src="ite.Url.replace('{0}',1)"/>
      </div>
        <!-- 图片上的遮罩层 -->
        <div class="reduce" @click='clickID'>
            <p class="p">{{item.Name}}</p>
             <p>{{item.Count}}></p>
        </div> 

      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import ImageList from '@/components/ImageList'
export default {
  components:{
ImageList
  },
  data(){
    return{
         showImageList: false
    }
  },
  computed:{
    ...mapState({
      allcarimgList:state=>state.Carimg.allcarimgList
    })
  },
  methods:{
    ...mapActions({
      getImageList:"Carimg/getImageList"
    }),
   
    clickID(){
     
      this.showImageList=true
      
    }
  },
  created(){
   let ids=this.$route.query.SerialID
  if(ids instanceof String){
    alert("")
  }{
    let id=ids*1
  this.getImageList(id)
  }
  
    
  }
} 
</script>

<style scoped>
.allcarimg{
  width:100%;
 height:100%;
 overflow-x: hidden;
background:#fff;
}
.allcarimg .smallImg{
  width: 100%;
   display:flex;
   flex-wrap: wrap;
   justify-content: space-between;
   position:relative;
     overflow-y: scroll;
}
.allcarimg .smallImg .imgs{
  width:32.5%;
}
.allcarimg .smallImg img{
  width:100%; 
  height:110px;
}
.allcarimg .smallImg .reduce{
 width:32.5%;
 height:110px;
 background:rgba(0, 0, 0, 0.5);
 position: absolute;;
 top:0;
 left:0;
 color:#fff;
 font-size: 14px;
 text-align: center;
}
.allcarimg .smallImg .reduce .p{
  margin-top:35px;
}
.allcarimg .wrap{
  width:100%;
  text-align: center;
  margin: 0 auto;
}
</style>