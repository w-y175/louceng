<template>
  <div class="color">
    <!-- 导航 -->
    <div class="quan">全部颜色</div>
    <div class="box">
<div class="nav">
  <span v-for="(item,index) in list" :key='index' :class="{active:cur==index}" @click='tab(index)'>{{item}}</span>
</div>
<!--  -->
<div class="main">
 <div class="in">
   
   <span v-for='(item,index) in color[list[cur]]' :key='index'><i :style="{'background':item.Value}"></i>{{item.Name}}
    
   </span>
 </div>
 </div>
    <!-- <i :style="{'background':item.Value}"></i> -->
      
 

</div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return{
      cur:0
    }
  },
 computed:{
    ...mapState({
        color:state=>state.home.color
       
    }),
     list(){
  return Object.keys(this.color)
  console.log(list)
  
}
},
methods:{
    ...mapActions({
getModelImageYearColor:'home/getModelImageYearColor',

  }),
  tab(index){
this.cur=index
  }
   
},

created(){
    this.getModelImageYearColor(this.$route.query.id);
    console.log('$store...', this.$store)
   
   
}

}
</script>

<style>
.color{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}
.quan{
  width: 100%;
  height: .8rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  color: #6fd2ff;
  align-items: center


}
.box{
  width: 100%;
  height: 100%;
  
}
.box .nav{
 display: flex;
 justify-content: space-around;
 width: 100%;
 height: .8rem;
 background: #fff;
 margin-top: 10px;
 align-items: center;
 font-size: 14px;
}
.active{
  color: #6fd2ff
}
.box .main{
  width: 100%;
 /* height: .40rem; */
background: #fff;
 margin-top: 10px;
  
}
 .in{
  width: 100%;
  
  
 
  
  

}
.in span{
  display: inline-block;
  width:45%;
  height: .50rem;
  margin-top: 5px;
  margin-left: 5px;
  border:1px solid #ccc;
  text-align: center;
  

}
i{
  display: inline-block;
  width: .40rem;
  height: .40rem;
  margin-right: 20px;

  

}


 


</style>