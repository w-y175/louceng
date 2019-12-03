<template>
    <div class="city">
        <p class="autom">自动定位</p>
        <p class="beijing">北京</p>
        <p class="autom">省市</p>
        <ul class="ul">
            <li v-for="(item,index) in cityList" :key="index"
            @click="cityIndex(item.CityID)"
            >
            {{item.CityName}}
            <span class="cityicn">&gt;</span></li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
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
         ...mapState(['cityList'])
    },
    methods:{
        cityIndex(id){
            console.log(id,'id')
        }
    },
    created(){
        console.log(this.cityList)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .city{
         overflow-y: scroll;
    }
    .autom{
        width: 100%;
        height: 20px;
        background: rgb(228, 228, 228);
        line-height: 20px;
        font-size: 12px;
        padding-left: 10px;
    }
    .beijing{
        line-height: 40px;
        padding-left: 15px;
        font-size: 12px;
    }
    .ul{
        line-height: 35px;
        padding-left: 5px;
    }
    .ul li{
        border-bottom: 1px solid #ccc;
        padding-left: 15px;
        font-size: 12px;
    }
    .cityicn{
        float: right;
        padding-right: 15px;
        font-size: 18px;
        color: #ccc;
       
    }
</style>