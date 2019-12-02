<template>
  <div class="wrapper">
    <div v-for="(item,index) in list" :key="index" class="ele" :id="item.letter">
      <h4>{{item.letter}}</h4>
      <ul v-for="(item,index1) in item.children" :key="index1" class="bot"
        @click="addShow(item.MasterID)"
      >
        <img class="img" v-lazy="item.CoverPhoto" alt />
        <div class="span">{{item.Name}}</div>
      </ul>
    </div>
    <!-- 弹框数据 -->
    <RightIndex v-if="tag" :listIndex=listIndex class="rightIndex" /> 
    <Right class="right" @jump="jumps" :list="list" />
  </div>
</template>
<script>
import axios from "axios";
import Right from "../components/right";
import RightIndex from '../components/rightIndex'
export default {
  props: {},
  components: {
    Right,
    RightIndex
  },
  data() {
    return {
      list: [],
      listIndex:[],
      tag:false,
    };
  },
  computed: {},
  methods: {
    jumps(item) {
      document.querySelector(".wrapper").scrollTop = document.querySelector(`#${item}`).offsetTop;
    },
    addShow(id){
      this.tag =!this.tag;
      axios.get('https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID:id}}).then(res=>{
       this.listIndex = res.data.data;  
      //  console.log(this.listIndex);
      })
    }
  },
  created() {},
  mounted() {
    axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(res => {
        if (res.data.code == 1) {
          res.data.data.map(item => {
            let letter = item.Spelling[0];
            let newArr = res.data.data.filter(
              item => item.Spelling[0] == letter
            );
            if (this.list.findIndex(item => item.letter == letter) == -1) {
              this.list.push({ letter, children: newArr });
            }
          });
        } else {
          alert(res.data.msg);
        }
      })
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  transform: all 1s;
}
.right {
  position: fixed;
  right: 10px;
  top: 15%;
}
.rightIndex{
  width: 300px;
  height: 100%;
  background: #fff;
  position: fixed;
  right: 0;
  top: 0;
  overflow-y: scroll;
  z-index: 99;
}
h4 {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #ccc;
}
.ele {
  line-height: 50px;
}
.img {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.bot {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(247, 243, 243);
}
.span {
  margin-left: 15px;
  padding: 10px 0;
  line-height: 40px;
}
</style>

