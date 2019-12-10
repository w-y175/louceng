<template>
    <div
        ref="touch"
        @touchmove="touchmove"
    >
        <span>#</span>
        <div v-for="(item,index) in list" :key="index">
        <p class="right" @click="ancher(item.letter)">{{item.letter}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    watch:{
         //watch监听dataList数据的改变，获取到他减去该元素的高度，然后给需要滚动的元素原型上面添加offsetTop
        list:function(){
            this.$nextTick(()=>{
                this.offsetTop=(window.innerHeight - this.$refs.touch.offsetHeight)/2
                // console.log(window.innerHeight - this.$refs.offcialref.offsetHeight)
            })
        }
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ancher(item){
         this.$emit('jump',item)
      },
      touchmove(e){
             let y = e.changedTouches[0].pageY-this.offsetTop
            let index = Math.floor(y/18)-1
     
            if(index > this.list.length-1){
                index=this.list.length-1
            }else if(index<1){
                index=0
            }
            console.log(this.list[index])
            document.getElementById(this.list[index].letter).scrollIntoView(true);
        },
    },
    created(){

    },
    mounted(){
      
       
    }
}
</script>
<style scoped lang="scss">
    .right{
        font-size: 12px;
        color: #666;
        line-height: 18px;
    }
</style>