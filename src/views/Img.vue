<template>
  <div class="page-img">
     <div class="select">
   <div class="left" @click='colour'>颜色</div>
   <div class="right">车款</div>
     </div>
     <div class="image">
         <ul class="ul" v-for="(item,index) in list" :key='index'>
             <li>{{item.Url}}</li>
         </ul>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        list:[]
    }
},
methods: {
    colour(){
        this.$router.push('/colour')
    }
},
mounted(){
    // axios.get("https://baojia.chelun.com/v2-car-getModelImageYearColor.html?,{params:{SerialID:id}}").then(res=>{
    //             console.log(res.data.data)
    //             this.list=res.data.data
    //         })
}
}
</script>

<style>
.page-img{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #f5f5f5
}
.select{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 30px;
  line-height: 30px;
    font-size: 14px;
    background: #fff;

}
</style>