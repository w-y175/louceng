<template>
  <div class="wrapper">

  </div>
</template>
<script>
import axios from 'axios'
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
        list:[]
    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){
      axios.get('https://baojia.chelun.com/v2-car-getMasterBrandList.html').then(res=>{
        console.log(res);
        
      })
  }
}
</script>
<style scoped lang="scss">

</style>
