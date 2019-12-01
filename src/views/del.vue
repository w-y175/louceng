<template>
  <div class="page">
     
<div class="img">
<img :src="datalist.CoverPhoto" alt="">
</div>
<div class="con">
    <div class="left">
        <p>{{datalist.market_attribute&&datalist.market_attribute.dealer_price}}</p>
        <h5>指导价{{datalist.market_attribute&&datalist.market_attribute.official_refer_price}}</h5>
    </div>
    <div class="right">
        <button>{{datalist.BottomEntranceTitle}}</button>
    </div>
</div>
<div v-for="(item,index) in list" :key='index' class="top">
<p >{{item}}</p>
</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            datalist:[],
            list:["全部","2019"]
        }
    },
    mounted(){
        axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2593').then(res=>{
            console.log(res.data.data)
            this.datalist=res.data.data
        })
    }
}
  
</script>
<style  >
.page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
}
.img{
    width: 100%;
    height: 176px;

}
.img img{
    width: 100%;
    height: 100%;
}
.con{
    width: 100%;
    height: 60px;
    display: flex;
   justify-content: space-between;
   align-items: center;
   background: #fff;

}
.con .left{
    width: 50%;
    height: 50px;
    margin-left: 10px;

}
.left p{
    font-size: 18px;
    color: red;
    margin-top: 10px;
}
.left h5{
    font-size: 13px;
    color: #ccc;
}
.con .right{
    width: 40%;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
}
.con .right button{
    width: 140px;
    height: 30px;
    background: skyblue;
    color: #fff;
    border-radius: 10px;
    border:none;
    font-size: 14px;
     margin-top: 10px;
};
.top{
    display: flex;
    width: 100%;
    height: 30px;
    background: #fff;
    
}




</style>
