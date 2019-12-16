<template>
  <div class="wrap">
    <Scroll
      ref="scroll"
      :data="value"
      :pullDownRefresh="pullDownRefreshObj"
      :pullUpLoad="pullUpLoadObj"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
      <ul>
        <span
          :key="index"
          @click="showSwiper(index)"
          v-for="(item, index) in value"
          :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"
        />
      </ul>
    </Scroll>
    <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview>
  </div>
</template>

 <script>
import { mapState, mapMutations, mapActions } from "vuex";
import Scroll from "./better-scroll/scroll";
import ImagePreview from "./ImagePreview";

export default {
  data() {
    return {
      showImageSwiper: false
    };
  },
  computed: {
    ...mapState({
      count: state => state.Carimg.count,
      value: state => state.Carimg.imageList,
      page: state => state.Carimg.page
    }),
    pullDownRefreshObj: () => {
      return {
        threshold: 90,
        stop: 50,
        txt: "刷新成功"
      };
    },
    pullUpLoadObj: () => {
      return {
        threshold: 50,
        txt: {
          more: "加载更多",
          noMore: "没有更多数据了"
        }
      };
    }
  },
  watch: {
    pullDownRefreshObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll;
        if (val) {
          scroll.openPullDown();
        } else {
          scroll.closePullDown();
        }
      },
      deep: true
    },
    pullUpLoadObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll;
        if (val) {
          scroll.openPullUp();
        } else {
          scroll.closePullUp();
        }
      },
      deep: true
    }
  },
  components: {
    Scroll,
    ImagePreview
  },
  methods: {
    ...mapActions({
      getPictureList: "Carimg/getPictureList",
      refreshDispatch: "Carimg/getPictureList",
      loadMoreDispatch: "Carimg/getPictureList"
    }),
    ...mapMutations({
      setCurrent: "Carimg/setCurrent"
    }),
    async onPullingDown() {
      await this.refreshDispatch(1);
    },
    async onPullingUp() {
      await this.loadMoreDispatch(this.page + 1);
    },
    showSwiper(index) {
      // 显示轮播
      this.showImageSwiper = true;
      // 修改current
      this.setCurrent(index);
    }
  },
  async mounted() {
    await this.getPictureList();
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
  z-index: 99;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul span {
  display: inline-block;
  width: 32.7vw;
  height: 32.7vw;
  margin-bottom: 1vw;
  background-size: cover;
  background-position: center;
}
</style>