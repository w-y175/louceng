<template>
    <div class="preview">
        <van-image-previwe
        v-model="showPreview"
        :images='list'
        @change='change'
        :start-position='current'
        >
        <template v-slot:index>
          {{`${current+1}/${count}`}}
        </template>
</van-image-previwe>

    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    props:{
        showImageSwiper:{
            type:Boolean,
            default:false
        }
    },
   
    components:{

    },
    
    computed:{
...mapState({
imageList:state=>state.Carimg.imageList,
current:state=>state.Carimg.current,
count:state=>state.Carimg.count,
page:state=>state.Carimg.page
}),
list(){
return this.imageList.map(item=>{
    return item.Url.replace('{0}',item.HighSize)
})
},
showPreview:{
    get(){
        return this.showImageSwiper
    },
    set(value){
        this.$emit('updata:showImageSwiper',false)

    }
}
    },
    methods:{
...mapMutations({
    setCurrent:'Carimg/setCurrent'
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
}
    
   
}
</script>
<style scoped lang="scss">

</style>