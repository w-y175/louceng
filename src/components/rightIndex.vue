<template>
    <div>
        <ul v-for="(item,index) in listIndex" :key="index" class="ul">
            <h5>{{item.GroupName}}</h5>
            <li v-for="(val,ind) in item.GroupList" :key="ind" class="indexTop"
            @click="detail(val.SerialID)"
            ><img v-lazy="val.Picture" slt="" class="indexImg" />
            <div>
                <p>{{val.AliasName}}</p>
                <span class="span">{{val.DealerPrice}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        listIndex:{
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
        detail(id){
            this.$router.push({path:'/detail',query:{id}})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .ul{
        line-height: 35px;
        
    }
    .indexImg{
        width: 90px;
        height: 60px;
        margin:0 20px 0 15px;
    }
    .indexTop{
        display: flex;
      border-bottom: 1px solid #666;
    }
    .span{
        color: red;
    }
    h5{
        width: 100%;
        background: rgb(231, 231, 231);
         padding-left: 15px;
    }
</style>