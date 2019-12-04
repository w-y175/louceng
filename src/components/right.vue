<template>
    <div>
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
      }
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