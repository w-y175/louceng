
<template>
    <div class="wrap">
        <CommonList :list="{
                    query: {},
                    limit: 30,
                    count: count,
                    refreshDispatch: '',
                    loadMoreDispatch: '',
                    value:value
                }">  
                  </CommonList>         
               <scroll
      ref="scroll"
      :data="value"
      :pullDownRefresh="pullDownRefreshObj"
      :pullUpLoad="pullUpLoadObj"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
                        <ul>
                            <span :key="index" @click="showSwiper(index)" v-for="(item, index) in value" :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"/>
                        </ul>
               </scroll>
  

    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
import ImageList from '@/views/ImageList';
import CommonList from '../components/CommonList'
export default {
    components:{
        CommonList
    },
    computed:{
        ...mapState({
            count:state=>state.Carimg.count,
            value:state=>state.Carimg.ImageList,
             page:state=>state.Carimg.page
        })
    },
   methods:{
       ...mapActions({
           getCategoryImageList:'Carimg/getCategoryImageList'
       }),

   },
   created(){
       this.getCategoryImageList()
   }
}
</script>
<style scoped lang="scss">
.wrap{
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    width: 100%;
    height: 100%;
}
</style>