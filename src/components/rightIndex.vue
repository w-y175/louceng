<template>
    <div>
        <ul v-for="(item,index) in listIndex" :key="index" class="ul">
            <p class="GroupName" @click="showTag">{{item.GroupName}}</p>
            <li v-for="(val,ind) in item.GroupList" :key="ind" class="indexTop"
            @click="detail(val.SerialID)"
            ><img v-lazy="val.Picture" slt="" class="indexImg" />
            <div class="imgpick">
                <p>{{val.AliasName}}</p>
                <span class="span">{{val.DealerPrice}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
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
        ...mapState({
            tag:state=>state.Home.tag
        })
    },
    methods:{
        ...mapMutations({
        getTag:'Home/getTag'
        }),
        detail(id){
            // 将车系id 存入本地存储
            localStorage.setItem('SerialID',id)
            this.$router.push({path:'/detail',query:{id}});
        },
        showTag(){
            this.getTag(false)
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
        line-height: 30px;
    }
    .indexImg{
        width: 90px;
        height: 60px;
        margin:5px 0 0 15px;
    }
    .indexTop{
        height: 70px;
        display: flex;
        align-items: center;
        border-top: 1px solid rgb(231, 231, 231);
    }
    .span{
        color: red;
        font-size: 14px;
    }
    .GroupName{
        height: 24px;
        line-height: 24px;
        width: 100%;
        font-size: 14px;
        background: rgb(231, 231, 231);
        padding-left: 15px;
        color: #666;
    }
    .imgpick{
        margin-left: 5px;
        font-size: 17px;
        line-height: 25px;
        color: rgb(131, 131, 131);
    }
</style>