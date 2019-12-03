<template>
    <div class="cityele">
        <ul class="cityul">
            <li v-for="(item,index) in cityIndex" :key="index"
            @click="upDateTitle(item.CityName)"
            >
            {{item.CityName}}</li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
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
        ...mapState(['cityIndex','carID'])
    },
    methods:{
        ...mapMutations(['getTitle']),
        upDateTitle(name){
            this.getTitle(name);
            let carID = this.carID;
            this.$router.push({path:'/inquiryDetail',query:{id:carID}})
        }
    },
    created(){

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