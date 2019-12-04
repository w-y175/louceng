<template>

    <div>
        <p class="topp">可向多个商家询问最低价,商家及时回复</p>
        <div  class="inquiryDetail">
            <img v-lazy="inquiryDetailList.Picture" slt="" class="inquiryDetailImg" />
            <div>
                <p class="inquiryDetailtop">{{inquiryDetailList.AliasName}}</p>
                <p><span>{{inquiryDetailList.list&&inquiryDetailList.list[0].market_attribute.year}}</span>款 <span  v-show="inquiryDetailList">{{inquiryDetailList.list&&inquiryDetailList.list[0].car_name}}</span> </p>
                </div>
                <span>&gt;</span>
        </div>
        <p class="geren">个人信息</p>
        <form action="" class="input">
            <p> 姓名 <input type="text" placeholder="请输入真实姓名" class="inputRight"></p>
            <p> 手机 <input type="text" placeholder="请输入手机号" class="inputRight"></p>
            <p> 城市 <span class="inputspan" @click="jumpCity">{{titleEle}} &gt;</span></p>
        </form>
        <div class="btnXun">
            <p class="inquirybtn"><button class="btn">询最低价</button></p>
        </div>
        <p class="geren">选择报价经销商</p>
    </div>
  
</template>
<script>
import axios from 'axios';
import {mapState,mapActions} from 'vuex';
export default {
    props:{

    },
    components:{
    },
    data(){
        return {
            id:this.$route.query.id,
            // 询问低价详情数据
        }
    },
    computed:{
       ...mapState({
           inquiryDetailList:state=>state.Home.inquiryDetailList,
           titleEle:state=>state.Home.titleEle,
       })
    },
    methods:{
        ...mapActions({
            setList:'city/setList',
            getInquiryDetailList:'Home/getInquiryDetailList'
        }),
        // 跳转到 城市页面
        jumpCity(){
           this.$router.push({path:'/city'});
            this.setList();
        }
    },
    created(){
        let id = this.id;
        this.getInquiryDetailList(id)
    console.log(this.$store)
        
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
        line-height: 29px;
        margin-top: 15px;
    }
    .inquiryDetailtop{
        font-size: 18px;
    }
    .inquiryDetailImg{
        width: 115px;
        height: 75px;
        border-radius: 5%;
        border: 1px solid #ccc;
        margin:0 20px 0 15px;
    }
    .geren{
        font-size: 12px;
        padding-left: 10px;
        width: 100%;
        background: rgb(216, 216, 216);
        line-height: 20px;
        margin-top: 10px;
    }
    .input{
        line-height: 45px;
    }
    .input p{
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .inputRight{
        outline: none;
        border: none;
        padding-right: 10px;
        width: 312px;
        font-size: 16px;
        float: right;
        line-height: 45px;
        text-align: right;
    }
    .inputspan{
        font-size: 16px;
        float: right;
        margin-right: 10px;
    }
    .inquirybtn{
        text-align: center;
        line-height: 45px;
    }
    .btnXun{
        width: 100%;
        height: 64px;
        line-height: 64px;
        text-align: center;
        padding: 15px 0 14px;
    }
    .btn{
        font-size: 16px;
        color: #fff;
        width: 80%;
        background: #3aacff;
        height: 35px;
        border-radius: 5px;
        outline: none;
        border: none;
    }
</style>