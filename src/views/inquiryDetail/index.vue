<template>
    <div>
        <p class="topp">可向多个商家询问最低价,商家及时回复 ？</p>
        <div  class="inquiryDetail">
            <img v-lazy="inquiryDetailList.Picture" slt="" class="inquiryDetailImg" />
            <div>
                <p class="inquiryDetailtop">{{inquiryDetailList.AliasName}}</p>
                <p><span>{{inquiryDetailList.list[0].market_attribute.year}}</span>款 <span>{{inquiryDetailList.list[0].car_name}}</span> </p>
                </div>
                <span class="">&gt;</span>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            id:this.$route.query.id,
            // 询问低价详情数据
             inquiryDetailList:{}
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        let id = this.id;
        axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html',{params:{SerialID:id}}).then(res=>{
            console.log(res);
            this.inquiryDetailList=res.data.data;
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .topp{
        line-height: 35px;
        font-size: 14px;
        text-align: center;
        background: rgb(163, 235, 163)
    }
    .inquiryDetail{
        display: flex;  
        line-height: 30px;
        margin-top: 15px;
    }
    .inquiryDetailtop{
        font-size: 18px;
    }
    .inquiryDetailImg{
        width: 110px;
        height: 70px;
        border-radius: 5%;
        border: 1px solid #ccc;
        margin:0 20px 0 15px;
    }
</style>