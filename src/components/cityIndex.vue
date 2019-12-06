<template>
    <div class="cityele">
        <ul class="cityul">
            <li v-for="(item,index) in cityIndex" :key="index"
            @click="upDateTitle(item)"
            >
            {{item.CityName}}</li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex';
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
            cityIndex:state=>state.city.cityIndex,
            titleEle:state=>state.Home.titleEle,
        }),
    },
    methods:{
        ...mapMutations({
            getTitle:'Home/getTitle',
        }),
        ...mapActions({
            getDealerList:'dealer/getDealerList'
        }),
        upDateTitle(item){
            // 跳回inquiryDetail  获取车系id
            let id = localStorage.getItem('SerialID');
            // 城市ID
            let cityCurrentId = item.CityID;
            // 车款ID
            let idi = localStorage.getItem('car_id');
            // 请求 经销商
            this.getDealerList({idi,cityCurrentId});
            
            this.$router.push({path:'/inquiryDetail',query:{id}});
            this.getTitle(item.CityName)
        }
    },
    created(){
        // console.log(this.$store)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .cityele{
        height: 100%;
        overflow-y: scroll;
    }
    .cityul{
        line-height: 40px;
    }
    .cityul li{
        border-bottom: 1px solid #ccc;
        font-size: 14px;
        padding-left: 18px;
    }
</style>