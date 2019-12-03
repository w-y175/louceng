<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        colour:[]
    }
},
mounted(){
    axios.get("https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=4765").then(res=>{
        console.log(res.data)
    })
}

}
</script>

<style>

</style>