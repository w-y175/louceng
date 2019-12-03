<template>
  <div class="page-img">
     {{list}}
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

import {mapState,mapActions} from 'vuex'
export default {
    computed:{
    ...mapState({
        list:state=>state.home.list
       
    })
},
methods:{
    ...mapActions({
getImageList:'home/getImageList',
colour(){
        this.$router.push('/colour')
    }
    })
},
created(){
    this.getImageList(this.$route.query.id);
    console.log('$store...', this.$store)
   
   
},
data(){
    return{
       
    }
},


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