<template>
  <div class="page-img">
    <div class="select">
      <div class="left" @click="colour">{{name}}</div>
      <div class="right">车款</div>
    </div>
    <div class="pic">
      <div class="smallImg" v-for="(item,index) in pic" :key="index">
        <!-- 渲染汽车展示小图片 -->
        <div class="imgs" v-for="(ite,i) in item.List" :key="i">
          <img :src="ite.Url.replace('{0}',1)" />
        </div>
        <!-- 图片上的遮罩层 -->
        <div class="reduce">
          <p class="p">{{item.Name}}</p>
          <p>{{item.Count}}></p>
        </div>
      </div>
    </div>
    <transition name="scroll-top">
      <div v-show="colorFn" class="con">
        <Color :colorFn.sync="colorFn" :name.sync="name"></Color>
      </div>
    </transition>
  </div>
</template>

<script>
import Color from "./colour";
// import Car from './CarStyle'
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      //控制颜色组件
      colorFn: false,
      name: "颜色"
    };
  },
  components: {
    Color
  },

  computed: {
    ...mapState({
      pic: state => state.Carimg.CarImg
    })
  },
    watch:{
  colorFn(){
       let ids=this.$route.query.SerialID
  },
  
  },
  methods: {
    ...mapActions({
      getImageList: "Carimg/getImageList"
    }),
    

    colour() {
      this.colorFn = true;
    },
      colorFuns(colorname){
        this.name=colorname
      },
  },
  created() {
     let ids=this.$route.query.SerialID

    console.log("$store...", this.$store);
  }
};
</script>

<style>
.page-img {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background: #f5f5f5;
}
.select {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  line-height: 30px;
  font-size: 15px;
  background: #fff;
}
.pic {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.smallImg {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}
.smallImg .imgs {
  width: 32.5%;
}
.smallImg img {
  width: 100%;
  height: 95px;
}
.smallImg .reduce {
  width: 32.5%;
  height: 95px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
}
.smallImg .reduce .p {
  margin-top: 20px;
}
.con {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>