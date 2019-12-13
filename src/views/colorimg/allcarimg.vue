
<template>
  <div class="allcarimg">
    <div class="box">
      <div class="smallImg" v-for="(item,index) in allcarimgList" :key="index">
        <!-- 渲染汽车展示小图片 -->
        <div class="imgs" v-for="(ite,i) in item.List" :key="i" @click="showSwiper(item)">
          <img :src="ite.Url.replace('{0}',1)" />
        </div>
        <!-- 图片上的遮罩层 -->
        <div class="reduce" @click="showPic(item)">
          <p class="p">{{item.Name}}</p>
          <p>{{item.Count}}></p>
        </div>
      </div>
    </div>
    <transition name="scroll-top">
      <!-- 选择车系颜色 -->
      <div class="wrapper" v-show="flag">
        <ImageTypeList :flag.sync="flag" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import ImageTypeList from "./ImageTypeList.vue";
export default {
  data() {
    return {
      flag: false
    };
  },

  computed: {
    ...mapState({
      allcarimgList: state => state.Carimg.allcarimgList
    })
  },
  components: {
    ImageTypeList
  },
  methods: {
    ...mapActions({
      getImageList: "Carimg/getImageList",
      getPictureList: "Carimg/getPictureList"
    }),
    ...mapMutations({
      setImageId: "Carimg/setImageId"
      // setSerialID: 'pic/setSerialId',
      // setCurrent: 'pic/setCurrent',
      // setImageList: 'pic/setImageList'
    }),
    showPic(item) {
      console.log(item);
      this.setImageId(item.Id);
      this.flag = true;
    },
    showSwiper(item) {
       this.setImageId(item.Id);
    }
  },
  created() {
    let ids = this.$route.query.SerialID;
    if (ids instanceof String) {
      alert("");
    }
    {
      let id = ids * 1;
      this.getImageList(id);
    }
  }
};
</script>

<style scoped>
.scroll-top-enter,
.scroll-top-leave-to {
  transform: translate3d(0, 100%, 0);
}
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: transform 0.3s linear;
}
.allcarimg {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #fff;
}
.allcarimg .smallImg {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  overflow-y: scroll;
}
.allcarimg .smallImg .imgs {
  width: 32.5%;
}
.allcarimg .smallImg img {
  width: 100%;
  height: 110px;
}
.allcarimg .smallImg .reduce {
  width: 32.5%;
  height: 110px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 14px;
  text-align: center;
}
.allcarimg .smallImg .reduce .p {
  margin-top: 35px;
}
.allcarimg .wrap {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
</style>