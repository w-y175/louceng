<template>
    <div class='wrap' @click.self="hideImageSwiper">
        <van-swiper
        :durtioin='3000'
        :loop='false'
        :initial-swiper='current'
        @change='change'
        :show-indicators='false'
        >
        <van-swiper-item v-for="(image,index) in imageList" :key='index'>
            <img class="img" v-lazy="image.Url.replace('{0}',image.HighSize)"/>
        </van-swiper-item>
    <p>{{`${current+1}/${count}`}}</p>

        </van-swiper>

    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
...mapState({
            imageList: state=>state.Carimg.imageList,
            current: state=>state.Carimg.current,
            count: state=>state.Carimg.count,
            page: state=>state.Carimg.page
        })
    },
    methods:{
...mapMutations({
    setCurrent:"Carimg/setCurrent"
}),
...mapActions({
     getPictureList:'Carimg/getPictureList'
}),
change(index){
        if(index>this.imageList.length-2){
            if(this.imageList.length<30){
                this.getPictureList(1)
            }else{
                this.getPictureList(this.page+1)
            }

        }
        this.setCurrent(index)
    },
     hideImageSwiper(){
        this.$emit('update:showImageSwiper',false)
    },
    },
    
}
</script>
<style scoped lang="scss">
.wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff
}
</style>