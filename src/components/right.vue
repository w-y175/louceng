<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
        <h4 @click="ancher(item.letter)">{{item.letter}}</h4>
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

</style>