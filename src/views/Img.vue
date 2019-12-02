<template>
  <div class="page-img">
     <div class="select">
   <div class="left" >颜色</div>
   <div class="right" @click="car">车款</div>
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
    car(){
    //    axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2593').then(res=>{
    //         console.log(res.data.data)
    //         this.datalist=res.data.data
    //     })
    }
},
mounted(){
    axios.get("http://baojia.chelun.com/v2-car-getImageList.html?SerialID=2593&_1575248179043").then(res=>{
                console.log(res.data.data)
                this.list=res.data.data
            })
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