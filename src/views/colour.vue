<template>
  <div class="color">
    <!-- 头部 -->
    <div class="quan">全部颜色</div>
    <div class="box">
      <div class="nav">
        <span
          v-for="(item,index) in list"
          :key="index"
          :class="{active:cur==index}"
          @click="tab(index)"
        >{{item}}</span>
      </div>
      <!--  -->
      <div class="main">
        <div class="in">
          <p v-for="(item,index) in color[list[cur]]" :key="index" >
            <i :style="{'background':item.Value}"></i>
            <span>{{item.Name}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      cur: 0
    };
  },
  computed: {
    ...mapState({
      color: state => state.color.color
    }),
    list() {
      return Object.keys(this.color);
    }
  },
  methods: {
    ...mapActions({
      getModelImageYearColor: "color/getModelImageYearColor"
    }),

    tab(index) {
      this.cur = index;
    },
   
  },

  created() {
    this.getModelImageYearColor(2593);
    
  }
};
</script>

<style>
.color {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
 
}
.quan {
  width: 100%;
  height: 30px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  color: #6fd2ff;
  align-items: center;
  font-size: 16px;
  margin-top: 5px;
}
.box {
  width: 100%;
  height: 100%;

}
.nav {
  margin-top:7.5px;
    padding-left:10px;
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    background: #fff;
    overflow-x: scroll;
 
}
.nav span{
  /* display: flex; */
  font-size: 16px;
    line-height: 30px;
    padding-right: 20px
  
}
.active {
  color: #6fd2ff;
}
.box .main {
  width: 100%;
  background: #fff;
  margin-top: 10px;
}
.in {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.in p {
  display: flex;
  width: 45%;
  height: 35px;
  margin: 7px 7px;
  border: 1px solid #69c0ff;
  border-radius: 3px
}
p span {
  display: inline-block;
  margin: 5px;
  font-size: 16px;
}
i {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 5px 5px;
}
</style>