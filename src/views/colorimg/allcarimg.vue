
<template>
  <div class="allcarimg">
    <div class="box">
      <div class="smallImg" v-for="(item,index) in allcarimgList" :key="index">
        <!-- 渲染汽车展示小图片 -->
        <div class="imgs" v-for="(ite,i) in item.List" :key="i" @click="showSwiper(index,item.Count,item.List)">
          <img :src="ite.Url.replace('{0}',1)" />
        </div>
        <!-- 图片上的遮罩层 -->
        <div class="reduce" @click="showPic(item)">
          <p class="p">{{item.Name}}</p>
          <p>{{item.Count}}></p>
        </div>
      </div>
    </div>
    <ImageTypeList v-if="showImageList" :showImageSwiper.sync="showImageSwiper"/>
    <!-- <transition name="scroll-top">
     
      <div class="wrapper" v-show="flag">
        <ImageTypeList :flag.sync="flag"/>
      </div>
    </transition> -->
    <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import ImageTypeList from "./ImageTypeList.vue";
import ImagePreview from './ImagePreview';
export default {
  data() {
    return {
      // flag: false,
       showImageList: false,
       showImageSwiper: false
    };
  },

  computed: {
    ...mapState({
      allcarimgList: state => state.Carimg.allcarimgList
    })
  },
  components: {
    ImageTypeList,
    ImagePreview
  },
  methods: {
    ...mapActions({
      getImageList: "Carimg/getImageList",
      getPictureList: "Carimg/getPictureList"
    }),
    ...mapMutations({
      setImageId: "Carimg/setImageId",
      setCurrent: 'Carimg/setCurrent',
      setImageList: 'Carimg/setImageList'
    }),
    showPic(item) {
      console.log(item);
      this.setImageId(item.Id);
      this.showImageList = true;
    }, 
    showSwiper(index, Count, List){
      this.setCurrent(index);
      this.setImageList({
        Count,
        List,
        
      });
      this.showImageSwiper = true;
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