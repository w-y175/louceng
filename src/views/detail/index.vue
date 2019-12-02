<template>
    <div>
        del
        <button @click="inquiryDetail(id)">询问低价</button>
       <p>{{id}}</p>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            // 详情id
            id:this.$route.query.id
        }
    },
    computed:{

    },
    methods:{
        inquiryDetail(id){
            this.$router.push({path:'/inquiryDetail',query:{id}})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>