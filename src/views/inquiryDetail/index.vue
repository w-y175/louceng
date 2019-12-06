<template>

    <div>
        <p class="topp">可向多个商家询问最低价,商家及时回复</p>
        <div  class="inquiryDetail">
            <img v-lazy="inquiryDetailList.Picture" slt="" class="inquiryDetailImg" />
            <div>
                <p class="inquiryDetailtop">{{inquiryDetailList.AliasName}}</p>
                <p class="inpuiry"><span>{{inquiryDetailList.list&&inquiryDetailList.list[0].market_attribute.year}}</span>款 <span  v-show="inquiryDetailList">{{inquiryDetailList.list&&inquiryDetailList.list[0].car_name}}</span> </p>
                </div>
                <span class="righticon">&gt;</span>
        </div>
        <p class="geren">个人信息</p>
        <form action="" class="input">
            <p> <span>姓名</span> <input type="text" v-model="name" maxlength="4"
             placeholder="请输入真实姓名" class="inputRight"></p>
            <p> <span>手机</span> <input type="text" v-model="phone"  maxlength="11"
             placeholder="请输入手机号" class="inputRight"></p>
            <p> <span>城市</span> <span class="inputspan" @click="jumpCity">{{titleEle}} &gt;</span></p>
        </form>
        <div class="btnXun">
            <p class="inquirybtn"><button class="btn" @click="addXun">询最低价</button></p>
        </div>
        <p class="geren">选择报价经销商</p>
        <div class="dealer">
            
            <ul v-for="(item,index) in dealerList" :key="index" class="dealerele">
                <input type="checkbox" class="check">
                <li>
                    <span class="spanName">{{item.dealerShortName}}</span> 
                    <span class="spanPrice">{{item.promotePrice}}万</span>
                 </li> 
                <li>
                    <span class="spanAddress">{{item.address}}</span>
                    <span class="spanAddress spanAddressRight">售{{item.saleRange}}</span>
                </li>
            </ul>
        </div>
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
            // 询问低价详情数据,
            phone:'',
            name:'',
        }
    },
    computed:{
       ...mapState({
           // 询问数据
           inquiryDetailList:state=>state.Home.inquiryDetailList,
           // 切换城市
           titleEle:state=>state.Home.titleEle,
           // 车款数据
           currentList:state=>state.detail.currentList,
           // 经销商数据
           dealerList:state=>state.dealer.dealerList,
           // 默认北京ID
           cityCurrentId:state=>state.city.cityCurrentId,
       })
    },
    methods:{
        ...mapActions({
            setList:'city/setList',
            getInquiryDetailList:'Home/getInquiryDetailList',
            getDealerList:'dealer/getDealerList'
        }),
        // 跳转到 城市页面
        jumpCity(){
           this.$router.push({path:'/city'});
            this.setList();
        },
        // 验证
        addXun(){
            if(!(/^1[3456789]\d{9}$/.test(this.phone)) || !(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,4}$/.test(this.name))){
                alert('请输入正确的手机号或姓名')
            }
        }
    },
    created(){
        let id = this.id;
        this.getInquiryDetailList(id);
        let car_id = this.currentList;
         // 车款id
        let idi = car_id[0].list[0].car_id;
        localStorage.setItem('car_id',idi)
         // 默认地点北京id
        let cityCurrentId = this.cityCurrentId;
        this.getDealerList({idi,cityCurrentId});
        console.log(this.dealerList,'15616546456')
        console.log(this.$store)
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .topp{
        line-height: 30px;
        font-size: 15px;
        text-align: center;
        color: #fff;
        background: #79cd92;
    }
    .inquiryDetail{
        display: flex;  
        line-height: 30px;
        margin-top: 18px;
        position: relative;
    }
    .inquiryDetailtop{
        font-size: 18px;
    }
    .inquiryDetailImg{
        width: 115px;
        height: 70px;
        border-radius: 5%;
        border: 1px solid rgb(238, 238, 238);
        margin:0 10px 0 10px;
    }
    .geren{
        font-size: 12px;
        padding-left: 10px;
        width: 100%;
        background: #eeeeee;
        line-height: 26px;
        margin-top: 10px;
    }
    .input{
        line-height: 45px;
    }
    .input p{
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .input p span{
        font-size: 16px;
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
    .inpuiry{
        width: 215px;
        line-height: 20px;
        font-size: 15px;
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
    .righticon{
        position: absolute;
        right: 10px;
        top: 15px;
        font-size: 22px;
        color: #999;
    }
    .dealerele{
        height: 82px;
        line-height:25px;
        align-items: center;
        border-bottom:1px solid #eeeeee;
        padding: 15px 15px 15px 30px;
        position: relative;
    }
    .spanAddress{
        color: #999999;
    }
    .spanAddressRight{
        float: right;
    }
    .spanName{
        font-size: 15px;
    }
    .spanPrice{
        color: red;
        float: right;
    }
    .check{
        position: absolute;
        left: 10px;
        top: 50%;
    }
</style>