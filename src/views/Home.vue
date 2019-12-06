<template>
  <div class="wrapper">
    <div v-for="(item,index) in carList" :key="index" class="ele" :id="item.letter">
      <p class="head">{{item.letter}}</p>
      <ul
        v-for="(item,index1) in item.children"
        :key="index1"
        class="bot"
        @click="addShow(item.MasterID)"
      >
        <img class="img" v-lazy="item.CoverPhoto" alt />

        <div class="span">{{item.Name}}</div>
      </ul>
    </div>
    <!-- 弹框数据 -->
    <transition name="slide-fade">
      <RightIndex v-show="tag" class="carIndex" :listIndex=carIndexList /> 
    </transition>
    <Right class="right" @jump="jumps" :list="carList" />
  </div>
</template>

<script>
import axios from "axios";
import Right from "../components/right";
import RightIndex from "../components/rightIndex";
import { mapActions, mapState ,mapMutations} from "vuex";
export default {
  props: {},
  components: {
    Right,
    RightIndex
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      carList: state => state.Home.carList,
      carIndexList: state => state.Home.carIndexList,
      tag:state => state.Home.tag,
    })
  },
  methods: {
    ...mapActions({
      getCarlist: "Home/getCarlist",
      getCarIndexlist: "Home/getCarIndexlist",
    }),
    ...mapMutations({
      getTag:'Home/getTag'
    }),
    // 锚点连接
    jumps(item) {
      document.querySelector(".wrapper").scrollTop = document.querySelector(
        `#${item}`
      ).offsetTop;
    },
    addShow(id){
      this.getTag(true)
      this.getCarIndexlist(id);
    }
  },
  created() {
    this.getCarlist();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all .3s ease;// cubic-bezier(0.3, 0.3, 0.3, 0.3) 开始到结束过程的时间
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(75%);
}
.carIndex{
  width: 280px;
  height: 100%;
  background: #fff;
  position: fixed;
  right: 0;
  top: 0;
  overflow-y: scroll;
  z-index: 99;
}
.right {
  position: fixed;
  right: 5px;
  top: 20%;
}
.head {
  width: 100%;
  height: 20px;
  color: rgb(150, 150, 150);
  line-height: 20px;
  background: rgb(245, 245, 245);
  padding-left: 15px;
  font-size: 14px;
}
.ele {
  line-height: 49.5px;
}
.img {
  width: 40px;
  height: 40px;
}
.bot {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(223, 223, 223);
  margin-left: 15px;
}
.span {
  margin-left: 20px;
  font-size: 16px;
}
</style>

