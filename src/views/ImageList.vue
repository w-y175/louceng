
<template>
  <div class="wrap">
   
    <ul>
     
    </ul>
  
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ImageList from "@/views/ImageList";

export default {
  // components:{
  //     CommonList
  // },
  computed: {
    ...mapState({
      count: state => state.Carimg.count,
      value: state => state.Carimg.ImageList,
    //   page: state => state.Carimg.page
    })
  },
  methods: {
    ...mapActions({
      getCategoryImageList: "Carimg/getCategoryImageList"
    })
  },
  created() {
    this.getCategoryImageList();
  }
};
</script>
<style scoped lang="scss">
.wrap {
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  width: 100%;
  height: 100%;
}
</style>