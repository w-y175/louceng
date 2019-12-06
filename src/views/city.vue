<template>
    <div class="city">
        <p class="autom">自动定位</p>
        <p class="beijing" @click="location('北京')">北京</p>
        <p class="autom">省市</p>
        <ul class="ul">
            <li v-for="(item,index) in cityList" :key="index"
            @click="addCityIndex(item.CityID)"
            >
            {{item.CityName}}
            <span class="cityicn">&gt;</span></li>
        </ul>
         
        <div v-show="tag" class="cityRight" @click="showBlock">
            <transition name="slide-fade">
            <cityIndex v-show="tag" class="cityIndex" />
            </transition>
        </div>
         
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import cityIndex from '../components/cityIndex'
export default {
    props:{
        
    },  
    components:{
        cityIndex
    },
    data(){
        return {
            tag:false,
        }
    },
    computed:{
         ...mapState({
            cityList:state=>state.city.cityList,
            cityCurrentId:state=>state.city.cityCurrentId
         }),
    },
    methods:{
        ...mapActions({
            setcityIndex:'city/setcityIndex',
            getDealerList:'dealer/getDealerList'
        }),
        ...mapMutations({
            getTitle:'Home/getTitle'
        }),
        addCityIndex(id){
            this.tag = true;
           this.setcityIndex(id)
        },
        showBlock(){
            this.tag = false;
        },
        // 定位北京
        location(name){
            this.getTitle(name);
            this.$router.push({path:'/inquiryDetail'});
            // 车款ID
            let idi = localStorage.getItem('car_id');
            let cityCurrentId = this.cityCurrentId;
            // 请求 经销商
            this.getDealerList({idi,cityCurrentId});
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .city{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .slide-fade-enter-active,.slide-fade-leave-active {
        transition: all .3s ease;// cubic-bezier(0.3, 0.3, 0.3, 0.3) 开始到结束过程的时间
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(75%);
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
        font-size: 13px;
    }
    .ul{
        line-height: 35px;
        padding-left: 5px;
    }
    .ul li{
        border-bottom: 1px solid #ccc;
        padding-left: 12px;
        font-size: 13px;
    }
    .cityicn{
        float: right;
        padding-right: 15px;
        font-size: 18px;
        color: #ccc;
       
    }
    .cityRight{
        width: 100%;
        height: 100%;
        position: fixed;
        right: 0;
        top: 0;
        background: rgba($color: #000000, $alpha: .6)
    }
    .cityIndex{
        width: 262px;
        height: 100%;
        position: fixed;
        right: 0;
        top: 0;
        background:#fff;
    }
</style>